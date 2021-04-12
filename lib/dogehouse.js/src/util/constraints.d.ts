export namespace CONNECTION {
    const HEARTBEAT_INTERVAL: number;
    const API_URL: string;
    const CONNECTION_TIMEOUT: number;
    namespace AUTH {
        const RECONNECT_TO_VOICE: boolean;
        const CURRENT_ROOM_ID: null;
        const MUTED: boolean;
        const PLATFORM: string;
    }
}
export namespace TELEMETRY {
    const URL: string;
    const PATH: string;
    const INTERVAL: number;
    namespace EMITTER {
        const INIT: string;
        const TRANSMIT: string;
    }
}
export namespace TIMEOUT {
    const JOIN_ROOM: number;
    const CHAT_COOLDOWN: number;
}
export namespace EVENT {
    const READY: string;
    const CONNECTION_TAKEN: string;
    const SOCKET_MESSAGE: string;
    const SOCKET_MESSAGE_PONG: string;
    const NEW_CHAT_MESSAGE: string;
    const MOD_CHANGED: string;
    const USER_JOINED_ROOM: string;
    const USER_LEFT_ROOM: string;
    const BOT_JOINED_ROOM: string;
    const HAND_RAISED: string;
    const WEBRTC_VOIC_OPTS_REVIEVED: string;
    const IMPORT_HOOK_FAILED: string;
    const IMPORT_HOOK_SUCCESS: string;
    const NEW_TRANSPORT_CREATED: string;
    const TELEMETRY_INITIALIZED: string;
    const TELEMETRY_DATA_TRANSMITTED: string;
}
export namespace OP_CODE {
    export const AUTH_GOOD: string;
    export const NEW_TOKENS: string;
    export const BOT_JOINED_AS_SPEAKER: string;
    export const BOT_JOINED_AS_PEER: string;
    export const BOT_LEFT_ROOM: string;
    export const BOT_IS_NOW_SPEAKER: string;
    export const NEW_PEER_SPEAKER: string;
    const JOIN_ROOM_1: string;
    export { JOIN_ROOM_1 as JOIN_ROOM };
    export const JOIN_ROOM_DONE: string;
    export const ACTIVE_SPEAKER_CHANGE: string;
    const USER_LEFT_ROOM_1: string;
    export { USER_LEFT_ROOM_1 as USER_LEFT_ROOM };
    const USER_JOINED_ROOM_1: string;
    export { USER_JOINED_ROOM_1 as USER_JOINED_ROOM };
    const NEW_CHAT_MESSAGE_1: string;
    export { NEW_CHAT_MESSAGE_1 as NEW_CHAT_MESSAGE };
    const MOD_CHANGED_1: string;
    export { MOD_CHANGED_1 as MOD_CHANGED };
    export const SPEAKER_REMOVED: string;
    export const CHAT_USER_BANNED: string;
    export const ASK_TO_SPEAK: string;
    const HAND_RAISED_1: string;
    export { HAND_RAISED_1 as HAND_RAISED };
    export const ADD_SPEAKER: string;
    export const SET_LISTENER: string;
    export const GET_CURRENT_ROOM_USERS: string;
    export const GET_CURRENT_ROOM_USERS_DONE: string;
    export const SEND_ROOM_CHAT_MSG: string;
    export const DELETE_ROOM_CHAT_MESSAGE: string;
    export const MUTE: string;
    export const FOLLOW: string;
    export const CHANGE_MOD_STATUS: string;
    export const GET_TOP_PUBLIC_ROOMS: string;
    export const GET_TOP_PUBLIC_ROOMS_DONE: string;
    export const GET_USER_PROFILE: string;
    export const FETCH_DONE: string;
}
export namespace ERROR {
    namespace ROOMS {
        const UNRESOLVABLE_ROOM: string;
        const ROOM_CONNECTION_TIMEOUT: string;
    }
}
