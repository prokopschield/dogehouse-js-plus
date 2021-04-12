export = MessageController;
declare class MessageController {
    /**
     * @param {Object} data Message Controller Data
     * @param {Client} client ApplicationClient
     */
    constructor(data: Object | undefined, client: Client);
    /** @private */
    private _client;
    /**
     * @type {MessageData} The raw message data;
     * @private
     */
    private _rawData;
    /**
     * @type {String} Message ID
     * @private
     */
    private _id;
    /**
     * @type {UserController}
     * @private
     */
    private _author;
    /**
     * @type {Date} The date the message was set at.
     * @private
     */
    private _date;
    /**
     * @type {MessageToken[]} Message Tokens
     * @private
     */
    private _msgTokens;
    /**
     * Get the Message ID
     *
     * @type {String}
     * @private
     */
    private get id();
    /**
     * Get the author of the message
     *
     * @type {UserController}
     */
    get author(): UserController;
    /**
     * The date the message was sent at.
     *
     * @type {Date}
     * @readonly
     */
    readonly get date(): Date;
    /**
     * Get the raw contents of the message
     *
     * @type {MessageToken[]}
     * @readonly
     */
    readonly get tokens(): MessageToken[];
    /**
     * Get the formatted contents of the message
     *
     * @type {String}
     * @readonly
     */
    readonly get content(): string;
    /**
     * Get an array of all the mentions in the message
     *
     * @type {Array}
     * @readonly
     */
    readonly get mentions(): any[];
    /**
     * Get an array of all the links in the message
     *
     * @type {Array}
     * @readonly
     */
    readonly get links(): any[];
    /**
     * Reply to a message
     *
     * This function can be used to reply to a users message by tagging them.  This uses the
     * MessageController object to get it's data.
     *
     * @param {*} msg Message to reply with
     * @param {MessageReplyOptions} options Message Options
     *
     * @function
     * @returns {Promise<MessageController>}
     */
    reply(msg: any, options?: MessageReplyOptions): Promise<MessageController>;
    /**
     * Delete a message
     *
     * This function will allow you to delete this message.  If you are the author of the message,
     * then it will delete 100% of the time, if you are not the author, you have to be a moderator
     * to delete messages.  And you can never delete the room owner's messages.
     *
     * @function
     * @returns {Promise<MessageController>}
     */
    delete(): Promise<MessageController>;
    toString(): string;
}
declare namespace MessageController {
    export { MessageReplyOptions, MessageToken, MessageData };
}
import UserController = require("./UserController");
type MessageToken = {
    /**
     * Type (text, emote, link, block, mention, etc.)
     */
    t: string;
    /**
     * Value (the actual string)
     */
    v: string;
};
type MessageReplyOptions = {
    /**
     * Would you like the message to be whispered to the author?.
     */
    whispered?: boolean | undefined;
    /**
     * Do you want to mention the user in the reply
     */
    mentionUser?: boolean | undefined;
};
import Client = require("../Client");
type MessageData = {
    /**
     * Message unique identifier
     */
    id: string;
    /**
     * The author's username
     */
    username: string;
    /**
     * The Authors User ID
     */
    userId: string;
    /**
     * Message tokens
     */
    tokens: MessageToken[];
    /**
     * When was message sent
     */
    sentAt: string;
    isWhisper: boolean;
    /**
     * Author's display name
     */
    displayName: string;
    /**
     * URL of Author's avatar
     */
    avatarUrl: string;
};
