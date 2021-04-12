"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const isomorphic_ws_1 = __importDefault(require("isomorphic-ws"));
const reconnecting_websocket_1 = __importDefault(require("reconnecting-websocket"));
const uuid_1 = require("uuid");
const heartbeatInterval = 8000;
const apiUrl = "wss://api.dogehouse.tv/socket";
const connectionTimeout = 15000;
const connect = (token, refreshToken, { logger = () => { }, onConnectionTaken = () => { } }) => new Promise((resolve, reject) => {
    const socket = new reconnecting_websocket_1.default(apiUrl, [], { connectionTimeout, WebSocket: isomorphic_ws_1.default });
    const apiSend = (opcode, data, fetchId) => {
        const raw = `{"op":"${opcode}","d":${JSON.stringify(data)}${fetchId ? `,"fetchId":"${fetchId}"` : ""}}`;
        socket.send(raw);
        logger("out", opcode, data, fetchId, raw);
    };
    const listeners = [];
    const runListener = async (listener, data, fetchId) => {
        const result = listener.handler(data, fetchId);
        const remove = result instanceof Promise ? !!await result : !!result;
        if (remove)
            listeners.splice(listeners.indexOf(listener), 1);
    };
    socket.addEventListener("open", () => {
        const heartbeat = setInterval(() => {
            socket.send("ping");
            logger("out", "ping");
        }, heartbeatInterval);
        socket.addEventListener("close", (error) => {
            clearInterval(heartbeat);
            if (error.code === 4003)
                onConnectionTaken();
            reject(error);
        });
        apiSend("auth", {
            accessToken: token,
            refreshToken: refreshToken,
            reconnectToVoice: false,
            currentRoomId: null,
            muted: false,
            platform: "dogegarden"
        });
        socket.addEventListener("message", e => {
            if (e.data === `"pong"`) {
                logger("in", "pong");
                return;
            }
            const message = JSON.parse(e.data);
            logger("in", message.op, message.d, message.fetchId, e.data);
            if (message.op === "auth-good") {
                const connection = {
                    addListener: (opcode, handler) => listeners.push({ opcode, handler }),
                    user: message.d.user,
                    send: apiSend,
                    fetch: (opcode, data, doneOpcode) => new Promise((resolveFetch) => {
                        const fetchId = !doneOpcode && uuid_1.v4();
                        listeners.push({
                            opcode: doneOpcode ?? "fetch_done",
                            handler: (data, arrivedId) => {
                                if (!doneOpcode && arrivedId !== fetchId)
                                    return;
                                resolveFetch(data);
                                return true;
                            }
                        });
                        apiSend(opcode, data, fetchId || undefined);
                    })
                };
                resolve(connection);
            }
            else {
                listeners
                    .filter(({ opcode }) => opcode === message.op)
                    .forEach(it => runListener(it, message.d, message.fetchId));
            }
        });
    });
});
exports.connect = connect;
