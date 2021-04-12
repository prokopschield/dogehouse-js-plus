export = UserController;
declare class UserController {
    /**
     * @param {Object} data User data
     * @param {Client} client Client Class
     */
    constructor(data: Object | undefined, client: Client);
    /** @private */
    private _client;
    /**
     * @type {String} User ID
     * @private
     */
    private _id;
    /**
     * @type {String} User Bio
     * @private
     */
    private _bio;
    /**
     * @type {String} User's username
     * @private
     */
    private _username;
    /**
     * @type {Number} Number of people who the bot follows
     * @private
     */
    private _numFollowing;
    /**
     * @type {Number} Number of followers that the bot has.
     * @private
     */
    private _numFollowers;
    /**
     * @type {?Date} When was the last time this user was online.
     * @private
     */
    private _lastOnline;
    /**
     * @type {Boolean} Does this user follow the bot?
     * @private
     */
    private _followsBot;
    /**
     * @type {String} User Display Name
     * @private
     */
    private _displayName;
    /**
     * @type {String} The user's avatar url
     * @private
     */
    private _avatarURL;
    /**
     * Get the User's id
     * @type {String}
     */
    get id(): string;
    /**
     * Get the user's bio
     * @type {String}
     */
    get bio(): string;
    /**
     * Get the users avatar URL
     * @type {String}
     */
    get avatarUrl(): string;
    /**
     * Get the user's username
     * @type {String}
     */
    get username(): string;
    /**
     * Get the user's display name
     * @type {String}
     */
    get displayName(): string;
    /**
     * Get the number of followers that this user has
     * @type {Number}
     */
    get numFollowers(): number;
    /**
     * Get the number of people that this user follows
     * @type {Number}
     */
    get numFollowing(): number;
    /**
     * Does this user follow the bot?
     * @type {Boolean}
     */
    get followsBot(): boolean;
    /**
     * Follow the user
     *
     * This function will follow a user as the bot account. Once following, you will be able to unfollow
     * using the unfollow method.
     *
     * @returns {Promise<UserController>}
     */
    follow(): Promise<UserController>;
    /**
     * Unfollow the user.
     *
     * This function will unfollow a user that the bot has followed previously.  If you choose to follow
     * this user back, simply use the follow method.
     *
     * @returns {Promise<UserController>}
     */
    unfollow(): Promise<UserController>;
    /**
     * Whisper to a user
     *
     * This function will whisper a userwith the provided message. Once the message has been
     * sent, this will resolve with the message object.
     *
     * @param {String} msg The message string / object that will be sent
     *
     * @function
     * @returns {Promise<MessageController>}
     */
    whisper(msg: string): Promise<MessageController>;
    /**
     * Mention a user.
     *
     * This function will mention a user in the chat with the provided message.  If you want to
     * whisper them, simply use the whisper method
     *
     * @param {String} msg The message you want to mention a user with.
     *
     * @function
     * @returns {Promise<MessageController>}
     */
    mention(msg: string): Promise<MessageController>;
    /** @todo */
    blockFromChat(): void;
    /** @todo */
    blockFromRoom(): void;
    /**
     * Set Listener
     *
     * This function will set the user to a listener, and the user can be set to speaker
     * with the setSpeaker method.
     *
     * @function
     * @returns {Promise<UserController>}
     */
    setListener(): Promise<UserController>;
    /**
     * Set Speaker
     *
     * This function will set the user as a speaker.  Once they're a speaker you can
     * set them back to a listener with the setListener method.
     *
     * @function
     * @returns {Promise<UserController>}
     */
    setSpearker(): Promise<UserController>;
    /**
     * Update user data
     *
     * This functino will simply take all of the new user data
     * and update the controlelr with the data.
     *
     * @param {Object} data User data
     *
     * @private
     * @function
     */
    private update;
}
import MessageController = require("./MessageController");
import Client = require("../Client");
