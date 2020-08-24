const mongoose = require("mongoose");
const Room = require("../models/roomModel");
const User = require("../UserClass");

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
// Creates a new room and makes the user host
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
            }).catch(err => {throw err})
        }
        // else create a new room since that room doesnt already exist
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
// Get all the users for a specific room
function getUsersInRoom(room) {
    console.log("GETTING ALL USERS");
    return Room.findOne({
        roomName: room
    }).then(data => {
        return data.users
    }).catch(err => {throw err})
}

// Find the room a user is in by their ID
function getRoomByUserId(id){
    console.log("LOOKING FOR USER", id);
    return Room.findOne({users: {$elemMatch: {id:id}}}).then(data=> {
        return data
    }).catch(err => {
        throw err
    })
}

// Will remove a user from their room given theri ID
function removeUserWithId (id) {
    return Room.update({}, { $pull: { users: { id:id } } }, { multi: true }).then(data => console.log(data)).catch(err => {throw err})
}

// More functions to create
// create a function that will mix an array
function shuffle (array) {
    console.log("SHUFFLING ARRAY");
    return array.sort(() => Math.random() - 0.5);
}
// add the word bank into unplayed words for a specific room.
function addWordBank (array, room) {
    // shuffle the array before adding to word bank.
    array = shuffle(array);
    console.log("ADDING WORDS");
    return Room.findOneAndUpdate({roomName: room}, {$push: {unPlayedWords: array}}).then(data => console.log(data)).catch(err => {throw err})
}
// create a function that will remove an element (the first or a random element) from the unpalyed word list and make it the current word
async function setCurrentWord (room) {
    const Room = await Room.findOne({roomName: room})
    if(!Room) return null;
    const { unPlayedWords, currentWord } = Room;
    const newCurrentWord = unPlayedWords.pop();
    if (!newCurrentWord) return console.log("NO MORE WORDS");
    const update = {
        $set: {unPlayedWords, currentWord: newCurrentWord}
    }
    if (currentWord) {
        update.$push = {PlayedWords: currentWord}
    }

    return await Room.updateOne({roomName: room}, update)
}

// create a function that will add +1 to the score to a specific user given their ID  
function addScoreForUser (id) {
    return Room.updateOne({"users.id": id}, {'$inc': {
        'users.$.score': 1
    }})
}


module.exports = {
    addUser,
    getUsersInRoom,
    checkRoomNameExist,
    getRoomByUserId,
    removeUserWithId,
    addWordBank
}

let array = [{word: "trying", definition: "world", subject: "haha"}, {word: "again", definition: "world", subject: "haha"}]
async function test () {
    const results = await addWordBank(array, "qwe")
    console.log("RESULTS:", results);
}
test()

