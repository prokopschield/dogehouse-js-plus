export = BotUser;
declare class BotUser {
    /** @param {Client} client */
    constructor(data: any, client: Client);
    /** @private */
    private _client;
    /**
     * @type {Object} Raw Bot User Data
     * @private
     */
    private _rawData;
    /**
     * @type {?Boolean} Is the bot muted
     * @private
     */
    private _muted;
    /**
     * @type {String} Bot Username
     * @private
     */
    private _username;
    /**
     * @type {number} The number of people that the bot follows.
     * @private
     */
    private _numFollowing;
    /**
     * @type {number} The number of people that follow the bot.
     * @private
     */
    private _numFollowers;
    /**
     * @type {?Date} When was the bot last online?
     * @private
     */
    private _lastOnline;
    /**
     * @type {String} The bot's user id.
     * @private
     */
    private _id;
    /**
     * @type {String} The bot's display name.
     * @private
     */
    private _displayName;
    /**
     * @type {String} The Bot's user bio.
     * @private
     */
    private _bio;
    /**
     * @type {String} The bot's avatar URl
     * @private
     */
    private _avatarURL;
    /**
     * Get the bot's username.
     * @type {String}
     * @readonly
     */
    readonly get username(): string;
    /**
     * The number of people that the bot is following.
     * @type {Number}
     * @readonly
     */
    readonly get numFollowing(): number;
    /**
     * The number of people that follow the bot.
     * @type {Number}
     * @readonly
     */
    readonly get numFollowers(): number;
    /**
     * The last time the bot was online
     * @type {?Date}
     * @readonly
     */
    readonly get lastOnline(): Date | null;
    /**
     * The bot's user ID
     * @type {String}
     * @readonly
     */
    readonly get id(): string;
    /**
     * Get the bot's display name
     * @type {String}
     * @readonly
     */
    readonly get displayName(): string;
    /**
     * Get the bot's bio
     * @type {String}
     * @readonly
     */
    readonly get bio(): string;
    /**
     * Get the bot's avatar URL
     * @type {String}
     * @readonly
     */
    readonly get avatarURL(): string;
    /**
     * Is the bot muted
     * @type {?Boolean} muted
     */
    get muted(): boolean | null;
    /**
     * Returns the bot's current room
     * @type {RoomController}
     */
    get room(): RoomController;
    /**
     * Ask to speak
     *
     * This function will make the bot request to speak in the voice channel. Once you request
     * to speak, if it was successful, it will return a resolved promise.
     *
     * @function
     * @returns {Promise<any>}
     */
    askToSpeak(): Promise<any>;
    /**
     * Mute the bot
     *
     * @function
     * @returns {Promise<BotUser>}
     */
    mute(): Promise<BotUser>;
    /**
     * Unmute the bot
     *
     * @function
     * @returns {Promise<BotUser>}
     */
    unmute(): Promise<BotUser>;
    /**
     * Toggle bot muted
     *
     * This function will toggle the bots muted state using the aforementioned
     * mute and unmute functions.
     *
     * @async
     * @function
     *
     * @returns {Promise<BotUser>}
     */
    toggleMute(): Promise<BotUser>;
    /**
     * Send Message
     *
     * This function will send a message to the chatbox of the room that the bot
     * is currently in. If the message is blank it will throw an error.
     *
     * @param {*} message The message that is sent.
     * @param {SendMessageOptions} options Options used when sending a message.
     *
     * @function
     * @returns {Promise<MessageController>}
     */
    sendMessage(message: any, options?: any): Promise<MessageController>;
    /**
     * Join a room
     *
     * This function will allow you to join a dogehouse room.  Once you've given it a DogeHouse
     * room ID, it will connect you to the room.
     *
     * @param {String} id DogeHouse Room ID
     *
     * @deprecated
     * @function
     * @returns {Promise<Object>}
     */
    joinRoom(id: string): Promise<Object>;
}
import RoomController = require("../controllers/RoomController");
import MessageController = require("../controllers/MessageController");
import Client = require("../Client");
