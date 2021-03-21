import WebSocket from "isomorphic-ws";
import ReconnectingWebSocket from "reconnecting-websocket";
import { v4 as generateUuid } from "uuid";
import { User, UUID } from "./entities";

const heartbeatInterval = 8000;
const apiUrl = "wss://api.dogehouse.tv/socket";
const connectionTimeout = 15000;

export type Token = string;
export type FetchID = UUID;
export type Opcode = string;
export type Logger = (direction: "in" | "out", opcode: Opcode, data?: object, fetchId?: FetchID, raw?: string) => void;
export type ListenerHandler = (data: object, fetchId?: FetchID) =>
  boolean | void | Promise<boolean> | Promise<void>;
export type Listener = {
  opcode: Opcode;
  handler: ListenerHandler;
};

export type Connection = {
  addListener: (opcode: Opcode, handler: ListenerHandler) => void;
  user: User;
  send: (opcode: Opcode, data: object, fetchId?: FetchID) => void;
  fetch: (opcode: Opcode, data: object, doneOpcode?: Opcode) => Promise<object>;
};

export const connect = (
  token: Token,
  refreshToken: Token,
  {
    logger = () => {},
    onConnectionTaken = () => {}
  }: { logger?: Logger, onConnectionTaken?: () => void }
): Promise<Connection> => new Promise((resolve, reject) => {
  const socket = new ReconnectingWebSocket(apiUrl, [], { connectionTimeout, WebSocket });
  const apiSend = (opcode: Opcode, data: object, fetchId?: FetchID) => {
    const raw = `{"op":"${opcode}","d":${JSON.stringify(data)}${fetchId ? `,"fetchId":"${fetchId}"` : ""}}`;
    socket.send(raw);
    logger("out", opcode, data, fetchId, raw);
  };

  const listeners: Listener[] = [];
  const runListener = async (listener: Listener, data: object, fetchId: FetchID) => {
    const result = listener.handler(data, fetchId);
    const remove = result instanceof Promise ? !!await result : !!result;
    if(remove) listeners.splice(listeners.indexOf(listener), 1);
  };

  socket.addEventListener("open", () => {
    const heartbeat = setInterval(
      () => {
        socket.send("ping");//send keepalive to ws
        logger("out", "ping");
      },
      heartbeatInterval
    );

    socket.addEventListener("close", (error) => {
      clearInterval(heartbeat);
      if(error.code === 4003) onConnectionTaken();
      reject(error);
    });

    apiSend(
      "auth",
      {
        accessToken: token,
        refreshToken: refreshToken,
        reconnectToVoice: false,
        currentRoomId: null,
        muted: false,
        platform: "dogegarden"
      }
    );

    socket.addEventListener("message", e => {
      if(e.data === `"pong"`) {
        logger("in", "pong");
        return;
      }

      const message = JSON.parse(e.data);
      logger("in", message.op, message.d, message.fetchId, e.data);

      if(message.op === "auth-good") {
        const connection: Connection = {
          addListener: (opcode: Opcode, handler: ListenerHandler) => listeners.push({ opcode, handler }),
          user: message.d.user,
          send: apiSend,
          fetch: (opcode: Opcode, data: object, doneOpcode?: Opcode) => new Promise((resolveFetch) => {
            const fetchId: FetchID | false = !doneOpcode && generateUuid();
            listeners.push({
              opcode: doneOpcode ?? "fetch_done",
              handler: (data, arrivedId) => {
                if(!doneOpcode && arrivedId !== fetchId) return;
                resolveFetch(data);

                return true;
              }
            });

            apiSend(opcode, data, fetchId || undefined);
          })
        };

        resolve(connection);
      } else {
        listeners
          .filter(({ opcode }) => opcode === message.op)
          .forEach(it => runListener(it, message.d, message.fetchId));
      }
    });
  });
});
