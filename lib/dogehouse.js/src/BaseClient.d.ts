export = BaseClient;
declare class BaseClient extends EventEmitter {
    constructor();
    /** @private */
    private get randStrConst();
    /**
     * Generate a random string
     *
     * This function will generate a random string based on the length you provided.  Once generated,
     * it will return a your random string.
     *
     * @param {Number} length Length of the random string
     *
     * @function
     * @returns {String}
     */
    randStr(length: number): string;
    /**
     * Register Events
     *
     * This function will register all of the internal event handlers.  This will allow us
     * to listen for events independantly of anything else.
     *
     * @param {String} dir Events Directory
     *
     * @private
     * @function
     * @returns {Promise<any>}
     */
    private registerEvents;
    /**
     * Register Hooks
     *
     * This function will gather all of the hooks from the hooks directory.  Once they're pulled, they will be
     * put into the hooks collection which can be accessed globally.  Once they're in the hooks collection, they
     * can be delcared anywhere.
     *
     * @param {String} dir Hooks Directory
     *
     * @private
     * @function
     * @returns {Promise<any>}
     */
    private registerHooks;
    generateUUID(): string;
}
import EventEmitter = require("events");
