export = RoomController;
declare class RoomController {
    /**
     * @param {RawRoomData} data The raw room data.
     * @param {Client} client The application client
     */
    constructor(data: RawRoomData | undefined, client: Client);
    /** @private */
    private _client;
    /** @private */
    private _rawData;
    /** @private */
    private _id;
    /** @private */
    private _name;
    /** @private */
    private _description;
    /** @private */
    private _isPrivate;
    /** @private */
    private _created;
    /** @private */
    private _creator;
    /** @private */
    private _voiceServer;
    /**
     * This will return the room ID.
     * @type {String}
     * @readonly
     */
    readonly get id(): string;
    /**
     * This will return the room name.
     * @type {String}
     * @readonly
     */
    readonly get name(): string;
    /**
     * This will return the room Description
     * @type {String}
     * @readonly
     */
    readonly get description(): string;
    /**
     * This will return weather the room is private or not.
     * @type {Boolean}
     * @readonly
     */
    readonly get isPrivate(): boolean;
    /**
     * This will return the date that the room was created.
     * @type {Date}
     * @readonly
     */
    readonly get created(): Date;
    /**
     * This will return the creator of the room.
     * @type {UserController}
     */
    get creator(): UserController;
    /**
     * Get Voice Server ID
     * @type {String}
     */
    get voiceServer(): string;
    /**
     * Get all of the users currently in the voice channel
     *
     * This will return a collection of all of the users currently in the room.
     *
     * @async
     * @type {Promise<Collection<String, UserController>>}
     * @returns {Collection<String, UserController>}
     */
    get users(): Promise<Collection<string, UserController>>;
}
declare namespace RoomController {
    export { PeoplePreviewObject, RawRoomData };
}
import UserController = require("./UserController");
import { default as Collection } from "../util/Collection";
type RawRoomData = {
    /**
     * The voice server that the room is on.
     */
    voiceServerId: string;
    /**
     * preview all of the people in the room.
     */
    peoplePreviewList: PeoplePreviewObject[];
    /**
     * The number of people in the room.
     */
    numPeopleInside: number;
    /**
     * The name of the room.
     */
    name: string;
    /**
     * Is the room private?
     */
    isPrivate: boolean;
    /**
     * The date the room was created.
     */
    inserted_at: string;
    /**
     * The room's id.
     */
    id: string;
    /**
     * The room's description
     */
    description: string;
    /**
     * The creator of the room.
     */
    creatorId: any;
};
import Client = require("../Client");
type PeoplePreviewObject = {
    /**
     * The number of followers the user has.
     */
    numFollowers: number;
    /**
     * The user's ID.
     */
    id: string;
    /**
     * The user's display name.
     */
    displayName: string;
};
