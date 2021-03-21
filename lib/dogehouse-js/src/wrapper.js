"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrap = void 0;
const wrap = (connection) => ({
    getTopPublicRooms: () => connection
        .fetch("get_top_public_rooms", { cursor: 0 })
        .then((data) => data.rooms),
    joinRoom: (id) => connection.fetch("join_room", { roomId: id }, "join_room_done"),
    sendRoomChatMsg: (ast, whisperedTo = []) => connection.send("send_room_chat_msg", { tokens: ast, whisperedTo }),
    leaveRoom: () => connection.fetch("leave_room", {}, "you_left_room"),
    listenForChatMsg: (callback) => {
        connection.addListener("new_chat_msg", ({ userId, msg }) => callback({ userId, msg }));
    },
    getCurrentRoomUsers: () => connection.fetch("get_current_room_users"),
    getRoomUsers: async () => connection.fetch("get_current_room_users", {}, "get_current_room_users_done"),
});
exports.wrap = wrap;
