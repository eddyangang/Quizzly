const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const RoomSchema = new Schema({
    hostId: {
        type: String,
        required: "A host is required"
    },
    users: {
        type: Array,
    },
    roomName: {
        type: String,
        required: "Room must have a name"
    },
    unPlayedWords: {
        type: Array,
        default: []
    },
    PlayedWords: {
        type: Array,
        default: []
    },
    currentWord: [{
        word: {
            type: String,
            default: null
        },
        definition: {
            type: String,
            default: null
        },
        subject: {
            type: String,
            default: null
        }
    }]

})


const Room = mongoose.model("Room",RoomSchema);
module.exports = Room;