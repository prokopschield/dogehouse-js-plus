export = Chat;
declare class Chat {
    /**
     *
     * @param {Client} client
     * @param {ChatOptions} options
     */
    constructor(client: any, options?: ChatOptions);
    _client: any;
    _cooldown: any;
    get queue(): void;
    /**
     * Alias of sendMessage
     *
     * @param {*} message The message that is sent
     * @param {SendMessageOptions} options Options used when sending a message.
     *
     * @function
     * @returns {Promise<MessageController>}
     */
    send(message: any, options?: SendMessageOptions): Promise<MessageController>;
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
    sendMessage(message: any, options?: SendMessageOptions): Promise<MessageController>;
    /**
     * Internal Method
     * @private
     */
    private _queueRoutine;
    _queueRoutineRevivePointer: any;
    _reviveQueue(): void;
    _queues: any[];
    _sendMessageAndWait(msgReqObj: any): Promise<any>;
    /**
     * Send Message to Server - Internal
     *
     * This function actually sends the message to the server.
     * You probably shouldn't touch it.
     *
     * @param {MessageToken[]} tokens
     * @private
     */
    private _sendMessageToServer;
}
declare namespace Chat {
    export { SendMessageOptions, MessageToken, ChatOptions };
}
type SendMessageOptions = {
    /**
     * The user who the message is whispered to (if any).
     */
    whisperedTo?: string | undefined;
    /**
     * Message priority, higher is more important
     */
    priority: number;
};
import MessageController = require("../controllers/MessageController");
type ChatOptions = {
    /**
     * Message cooldown in ms
     */
    cooldown: any;
};
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
