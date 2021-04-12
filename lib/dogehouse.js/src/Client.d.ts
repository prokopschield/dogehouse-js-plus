export = Client;
/**
 * @extends {BaseClient}
 */
declare class Client extends BaseClient {
    /**
     * @param {ClientOptions} options Client Options
     */
    constructor(options?: ClientOptions);
    /** @private */
    private _startTime;
    /** @private */
    private _sendTelemetry;
    /** @private */
    private _blockAngular;
    /** @private */
    private _connectionDate;
    /** @private */
    private _botUser;
    /** @type {ReconnectingWebSocket.default} */
    socket: ReconnectingWebSocket.default;
    /** @type {API} */
    api: API;
    /**
     * Allows you to manage and get users.
     * @type {Users}
     */
    users: Users;
    /**
     * Allows you to manage and get rooms
     * @type {Rooms}
     */
    rooms: Rooms;
    /**
     * Provides access to all the juicy chat functionality
     * @type {Chat}
     */
    chat: Chat;
    /**
     * Listener Cache
     * @type {Map<String, Function[]}
     */
    incommingChatMessageListeners: Map<string, Function[]>;
    registerIncommingChatMessageListener: (text: any, fn: any) => void;
    /**
     * @type {Collection<String, any>}
     * @private
     */
    private _hooks;
    /**
     * @type {Collection<String, Function>}
     * @private
     */
    private _eventCache;
    /**
     * @type {?number} How long has it been since the bot connected?
     * @readonly
     */
    readonly get uptime(): number | null;
    /**
     * Get the bot
     *
     * This will return the BotUser which has everything you need to work with the
     * bot it will allow you to get all of the data about the bot.
     *
     * @type {BotUser}
     */
    get bot(): BotUser;
    /**
     * Connect the bot.
     *
     * This function will take the token and the refresh token and use them
     * to connect to the DogeHouse API
     *
     * @param {String} token User token
     * @param {String} refreshToken User refresh token
     *
     * @function
     * @returns {Promise<Client>} Connected Client
     */
    connect(token: string, refreshToken: string): Promise<Client>;
}
declare namespace Client {
    export { ClientOptions };
}
import BaseClient = require("./BaseClient");
import ReconnectingWebSocket = require("reconnecting-websocket");
import API = require("./classes/API");
import Users = require("./classes/Users");
import Rooms = require("./classes/Rooms");
import Chat = require("./classes/Chat");
import BotUser = require("./classes/BotUser");
type ClientOptions = {
    /**
     * Would you like to send Telemetry data back to the DogeGarden team?
     */
    sendTelemetry?: boolean | undefined;
    /**
     * Would you like to block the word angular from being said in chat?  Enable this!
     */
    blockAngular?: boolean | undefined;
};
