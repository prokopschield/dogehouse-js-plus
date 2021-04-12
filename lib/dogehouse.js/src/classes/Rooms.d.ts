export = Rooms;
declare class Rooms {
    /**
     * @param {Client} client
     */
    constructor(client: Client);
    /** @private */
    private _client;
    /**
     * RoomController Cache
     * @type {Map<String, RoomController>}
     * @private
     */
    private _roomControllerCache;
    /**
     * Set Room data
     *
     * This will set the room data in the room controller cache, and if it is already in the controller
     * it will simply update the data.
     *
     * @param {Object} data Update Data
     *
     * @private
     * @function
     */
    private setRoomData;
    /**
     * Retrieve the Room Cache
     *
     * This will return the Room Controller Cache which will have a list of all of the cached
     * Rooms.
     *
     * @type {Map<String, RoomController>}
     */
    get cache(): Map<string, RoomController>;
    /**
     * Get the top public Rooms
     *
     * This is an async getter which will get all of the top rooms from DogeHouse, once it gets the top rooms,
     * it will return a new Promise with all of the top rooms.
     *
     * @async
     * @type {Promise<Object>}
     */
    get top(): Promise<Object>;
    /** @private */
    set current(arg: RoomController);
    /**
     * Get the current room
     *
     * This property will simply get the current room and return the room controller for it
     *
     * @type {RoomController}
     */
    get current(): RoomController;
    _current: RoomController | undefined;
    /**
     * Join a room
     *
     * This function will allow you to join a room. Once you've joined the room you will be returned
     * a Room Controller object, but if it times out, it will be rejected.
     *
     * @param {*} roomUnresolved
     *
     * @function
     * @returns {Promise<RoomController>}
     */
    join(roomUnresolved: any): Promise<RoomController>;
    /**
     * Get Room
     *
     * This function will get a Room by their Room id. If they are in the Room cache, it will
     * pull that, otherwise it will add them to the cache.
     *
     * @param {String} id Room ID
     *
     * @function
     * @returns {RoomController}
     */
    get(id: string): RoomController;
}
import RoomController = require("../controllers/RoomController");
import Client = require("../Client");
