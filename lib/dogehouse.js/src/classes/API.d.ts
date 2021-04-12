export = API;
declare class API {
    /**
     * @param {Client} client
     */
    constructor(client: Client);
    /**
     * Client declaration
     * @private
     */
    private _client;
    _onMessageCallbacks: Map<any, any>;
    /**
     * @type {Map<OP_CODE, Function>}
     * @private
     */
    private _onMessageOnceQueue;
    /**
     * @type {Map<string, Function>}
     * @private
     */
    private _onFetchDoneQueue;
    /**
     * Internal Method
     * @private
     */
    private _registerMessageCallbackHandler;
    /**
     * Send an API request
     *
     * This function will send an API request to the socket connection established by the client
     * connection function.
     *
     * @param {string} opCode Socket OP Code
     * @param {Object} data Data sent to the socket connection.
     * @param {string} [fetchId] UUID (if any)
     *
     * @function
     * @returns {Promise<void>}
     */
    send(opCode: string, data: Object, fetchId?: string | undefined): Promise<void>;
    /**
     * Fetch Data from the API
     *
     * This function is used to get data form the API using the OP_CODE and data of your choice. It
     * will then return the data that it recieved.
     *
     * @param {OP_CODE} opCode Op code to execute
     * @param {Object} data Data to send with request
     *
     * @returns {ApiDataBack}
     */
    fetchData(opCode: {
        AUTH_GOOD: string;
        NEW_TOKENS: string;
        BOT_JOINED_AS_SPEAKER: string;
        BOT_JOINED_AS_PEER: string;
        BOT_LEFT_ROOM: string;
        BOT_IS_NOW_SPEAKER: string;
        NEW_PEER_SPEAKER: string;
        JOIN_ROOM: string;
        JOIN_ROOM_DONE: string;
        ACTIVE_SPEAKER_CHANGE: string;
        USER_LEFT_ROOM: string;
        USER_JOINED_ROOM: string;
        NEW_CHAT_MESSAGE: string;
        MOD_CHANGED: string;
        SPEAKER_REMOVED: string;
        CHAT_USER_BANNED: string;
        ASK_TO_SPEAK: string;
        HAND_RAISED: string;
        ADD_SPEAKER: string;
        SET_LISTENER: string;
        GET_CURRENT_ROOM_USERS: string;
        GET_CURRENT_ROOM_USERS_DONE: string;
        SEND_ROOM_CHAT_MSG: string;
        DELETE_ROOM_CHAT_MESSAGE: string;
        MUTE: string;
        FOLLOW: string;
        CHANGE_MOD_STATUS: string;
        GET_TOP_PUBLIC_ROOMS: string;
        GET_TOP_PUBLIC_ROOMS_DONE: string;
        GET_USER_PROFILE: string;
        FETCH_DONE: string;
    }, data: Object): ApiDataBack;
    /**
     * API Message Event
     *
     * This function will wait for all API messages.  This will allow you to wait for an API call without
     * having to hastle with the node.js event handlers.
     *
     * @param {Function} callback
     *
     * @function
     * @returns {void}
     */
    onMessageAny(callback: Function): void;
    /**
     * API Message Event
     *
     * This function will wait for all API messages.  This will allow you to wait for an API call without
     * having to hastle with the node.js event handlers.
     *
     * @param {OP_CODE} opCode
     * @param {Function} callback
     *
     * @function
     * @returns {void}
     */
    onMessage(opCode: {
        AUTH_GOOD: string;
        NEW_TOKENS: string;
        BOT_JOINED_AS_SPEAKER: string;
        BOT_JOINED_AS_PEER: string;
        BOT_LEFT_ROOM: string;
        BOT_IS_NOW_SPEAKER: string;
        NEW_PEER_SPEAKER: string;
        JOIN_ROOM: string;
        JOIN_ROOM_DONE: string;
        ACTIVE_SPEAKER_CHANGE: string;
        USER_LEFT_ROOM: string;
        USER_JOINED_ROOM: string;
        NEW_CHAT_MESSAGE: string;
        MOD_CHANGED: string;
        SPEAKER_REMOVED: string;
        CHAT_USER_BANNED: string;
        ASK_TO_SPEAK: string;
        HAND_RAISED: string;
        ADD_SPEAKER: string;
        SET_LISTENER: string;
        GET_CURRENT_ROOM_USERS: string;
        GET_CURRENT_ROOM_USERS_DONE: string;
        SEND_ROOM_CHAT_MSG: string;
        DELETE_ROOM_CHAT_MESSAGE: string;
        MUTE: string;
        FOLLOW: string;
        CHANGE_MOD_STATUS: string;
        GET_TOP_PUBLIC_ROOMS: string;
        GET_TOP_PUBLIC_ROOMS_DONE: string;
        GET_USER_PROFILE: string;
        FETCH_DONE: string;
    }, callback: Function): void;
    /**
     * API Message Event Once
     *
     * This function will wait for an API message once.  It will call back one time and the time
     * will be when the OP code is recognized.
     *
     * @param {OP_CODE} opCode The OP Code to callback on.
     * @param {Function} callback The function that will be called once the event fires.
     *
     * @function
     * @returns {void}
     */
    onMessageOnce(opCode: {
        AUTH_GOOD: string;
        NEW_TOKENS: string;
        BOT_JOINED_AS_SPEAKER: string;
        BOT_JOINED_AS_PEER: string;
        BOT_LEFT_ROOM: string;
        BOT_IS_NOW_SPEAKER: string;
        NEW_PEER_SPEAKER: string;
        JOIN_ROOM: string;
        JOIN_ROOM_DONE: string;
        ACTIVE_SPEAKER_CHANGE: string;
        USER_LEFT_ROOM: string;
        USER_JOINED_ROOM: string;
        NEW_CHAT_MESSAGE: string;
        MOD_CHANGED: string;
        SPEAKER_REMOVED: string;
        CHAT_USER_BANNED: string;
        ASK_TO_SPEAK: string;
        HAND_RAISED: string;
        ADD_SPEAKER: string;
        SET_LISTENER: string;
        GET_CURRENT_ROOM_USERS: string;
        GET_CURRENT_ROOM_USERS_DONE: string;
        SEND_ROOM_CHAT_MSG: string;
        DELETE_ROOM_CHAT_MESSAGE: string;
        MUTE: string;
        FOLLOW: string;
        CHANGE_MOD_STATUS: string;
        GET_TOP_PUBLIC_ROOMS: string;
        GET_TOP_PUBLIC_ROOMS_DONE: string;
        GET_USER_PROFILE: string;
        FETCH_DONE: string;
    }, callback: Function): void;
    /**
     * API Message Event Once Promise
     *
     * This function will wait for an API message once and will return a promise.  The promise will resolve
     * once the data is recieved, and it will resolve with the data recieved.
     *
     * @param {OP_CODE} opCode The OP code to resolve on.
     *
     * @function
     * @returns {Promise<ApiDataBack>}
     */
    onMessageOnceP(opCode: {
        AUTH_GOOD: string;
        NEW_TOKENS: string;
        BOT_JOINED_AS_SPEAKER: string;
        BOT_JOINED_AS_PEER: string;
        BOT_LEFT_ROOM: string;
        BOT_IS_NOW_SPEAKER: string;
        NEW_PEER_SPEAKER: string;
        JOIN_ROOM: string;
        JOIN_ROOM_DONE: string;
        ACTIVE_SPEAKER_CHANGE: string;
        USER_LEFT_ROOM: string;
        USER_JOINED_ROOM: string;
        NEW_CHAT_MESSAGE: string;
        MOD_CHANGED: string;
        SPEAKER_REMOVED: string;
        CHAT_USER_BANNED: string;
        ASK_TO_SPEAK: string;
        HAND_RAISED: string;
        ADD_SPEAKER: string;
        SET_LISTENER: string;
        GET_CURRENT_ROOM_USERS: string;
        GET_CURRENT_ROOM_USERS_DONE: string;
        SEND_ROOM_CHAT_MSG: string;
        DELETE_ROOM_CHAT_MESSAGE: string;
        MUTE: string;
        FOLLOW: string;
        CHANGE_MOD_STATUS: string;
        GET_TOP_PUBLIC_ROOMS: string;
        GET_TOP_PUBLIC_ROOMS_DONE: string;
        GET_USER_PROFILE: string;
        FETCH_DONE: string;
    }): Promise<ApiDataBack>;
    /**
     * On Fetch Done
     *
     * This function will wait for a fetch_done api message with a specific fetch ID to arrive, once it does it will
     * callback with the datat that was returned.
     *
     * @param {String} fetchID The fetch ID to listen for.
     * @param {Function} callback The callback function.
     *
     * @function
     * @returns {void}
     */
    onFetchDone(fetchID: string, callback: Function): void;
    /**
     * On Fetch Done Promise
     *
     * This functino will wait for a fetch_done api message with a specific IP to arrive.  This function returns a promise
     * that will be resolved once the fetchId returns.
     *
     * @param {String} fetchID The fetch ID to listen for.
     *
     * @function
     * @returns {void}
     */
    onFetchDoneP(fetchID: string): void;
    /**
     * Authenticate Bot
     *
     * This function will authenticate the bot account with the credentials provided in the
     * client connection function.
     *
     * @param {string} token Bot Authentication Token
     * @param {string} refreshToken Bot Refresh Token
     *
     * @function
     * @returns {Promise<ReconnectingWebSocket>}
     */
    authenticate(token: string, refreshToken: string): Promise<ReconnectingWebSocket>;
}
declare namespace API {
    export { ApiDataBack };
}
type ApiDataBack = {
    /**
     * The op_code recieved back.
     */
    op: string;
    /**
     * The fetch ID recieved back.
     */
    fetchId?: string | undefined;
    /**
     * The data recieved back.
     */
    d: (Object | string);
};
import { default as ReconnectingWebSocket } from "reconnecting-websocket";
import Client = require("../Client");
