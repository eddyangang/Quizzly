const mongoose = require("mongoose");
const Room = require("../models/roomModel");
const User = require("../UserClass");
const users = require("../users");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Quizzly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

function checkRoomNameExist(roomName) {
    console.log("CHECKING IF ROOM NAME EXIST");
    return Room.find({}).then(allRooms => {
        let state = false;
        allRooms.forEach(room => {
            console.log("Comparing Room names:", room.roomName, roomName);
            if (room.roomName === roomName) {
                state = room;
                return;
            }
        })
        return state;
    }).catch(err => {
        throw err
    })

}

function createNewRoom(username, roomName, id) {
    console.log("CREATING A NEW ROOM");
    const newUser = new User(username, roomName, id);

    const newRoom = new Room({
        hostId: id,
        roomName: roomName,
    })

    newRoom.addUser(newUser)

    return Room.create(newRoom).then(data => {
        return data
    }).catch(err => {
        console.error(err);
        process.exit(1)
    })
}
// add a new user to an existing room, or to a new room if the room doesnt already exist. Also will check if the username is alredy taken in that room.
async function addUser(username, roomName, id) {
    console.log("ADDING A NEW USER");
    const existingRoom = await checkRoomNameExist(roomName);
    if (existingRoom) {
        const existingUser = checkUsedUsername(existingRoom.users, username)
        if (existingUser) {
            return {error: 'Username is taken.'}
        }
        else {
            const newUser = new User(username, roomName, id);
            return await Room.findOneAndUpdate({
                roomName: roomName
            }, {
                $push: {
                    users: newUser
                }
            }).then(data => {
                const Room = data
                return {
                    Room
                }
            })
        }
    } else {
        const Room = await createNewRoom(username, roomName, id)
        console.log("New Room created", Room);
        return {
            Room
        }
    }
}

// check if name is taken in a room
function checkUsedUsername(usersList, username) {
    console.log("CHECKING IF USERNAME IS USED IN ROOM");
    const existingUser = usersList.find(user => {
        return user.name === username
    })

    if (existingUser) {
        console.log("User Already exist:", existingUser);
        return true
    } else {
        console.log("Username is not used in Room");
        return false
    }
}

function getUsersInRoom(room) {
    console.log("GETTING ALL USERS");
    return Room.findOne({
        roomName: room
    }).then(data => {
        return data.users
    })
}


module.exports = {
    addUser,
    getUsersInRoom,
    checkRoomNameExist,
    getRoomByUserId,
    removeUserWithId
}

function getRoomByUserId(id){
    console.log("LOOKING FOR USER", id);
    return Room.findOne({users: {$elemMatch: {id:id}}}).then(data=> {
        return data
    }).catch(err => {
        throw err
    })
}

function removeUserWithId (id) {
    return Room.update({}, { $pull: { users: { id:id } } }, { multi: true }).then(data => console.log(data))
}

// async function test () {
//     const results = await getRoomByUserId("PhZYn72WhDV5ELY1AAAA")
//     console.log(results);
// }
// test()

// async function log() {
//     console.log("calling");
//     const results = await createNewRoom("Eddy", "testRoom", "123456789")
//     console.log(results);
// }

// async function log() {
//     console.log("calling");
//     const results = await checkRoomNameExist("myRoom")
//     console.log(results);
// }

// log()