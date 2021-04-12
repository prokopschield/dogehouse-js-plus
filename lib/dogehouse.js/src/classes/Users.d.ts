export = Users;
declare class Users {
    /**
     * @param {Client} client
     */
    constructor(client: Client);
    _client: Client;
    /**
     * UserController Cache
     * @type {Collection<String, UserController>}
     * @private
     */
    private _userControllerCache;
    /**
     * Set User Data
     *
     * This function will allow you to cache a user, or update a user's data and then it will
     * return the Controller object.
     *
     * @param {Object} data Raw User Data Object
     *
     * @function
     * @returns {UserController}
     */
    setUserData(data: Object): UserController;
    /**
     * Get User
     *
     * This function will get a user by their user_id or username.  If they are in the user cache, it will
     * pull that, otherwise it will add them to the cache.
     *
     * @type {Promise<UserController> | UserController}
     * @param {String} value User ID or Username
     */
    get(value: string): Promise<any> | UserController | undefined;
    /**
     * Retrieve the User Cache
     *
     * This will return the User Controller Cache which will have a list of all of the cached
     * users.
     *
     * @type {Collection<String, UserController>}
     */
    get cache(): Collection<string, UserController>;
}
import Client = require("../Client");
import UserController = require("../controllers/UserController");
import { default as Collection } from "../util/Collection";
