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
            return {
                error: 'Username is taken.'
            }
        } else {
            const newUser = new User(username, roomName, id);
            return await Room.findOneAndUpdate({
                roomName: roomName
            }, {
                $push: {
                    users: newUser
                }
            }, {
                new: true
            }).then(data => {
                const Room = data
                return {
                    Room
                }
            }).catch(err => {
                throw err
            })
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
async function getUsersInRoom(room) {
    console.log("GETTING ALL USERS");
    return Room.findOne({
        roomName: room
    }).then(data => {
        return data.users
    }).catch(err => {
        throw err
    })
}

// Find the room a user is in by their ID
async function getRoomByUserId(id) {
    console.log("LOOKING FOR USER", id);
    return Room.findOne({
        users: {
            $elemMatch: {
                id: id
            }
        }
    }).then(data => {
        return data
    }).catch(err => {
        throw err
    })
}

// Will remove a user from their room given theri ID
async function removeUserWithId(id) {
    return Room.update({}, {
        $pull: {
            users: {
                id: id
            }
        }
    }, {
        multi: true
    }).then(data => console.log(data)).catch(err => {
        throw err
    })
}

// More functions to create
// create a function that will mix an array
function shuffle(array) {
    console.log("SHUFFLING ARRAY");
    return array.sort(() => Math.random() - 0.5);
}
// add the word bank into unplayed words for a specific room.
async function addWordBank(array, room) {
    // shuffle the array before adding to word bank.
    array = shuffle(array);
    console.log("ADDING WORDS");
    return Room.findOneAndUpdate({
        roomName: room
    }, {
        $push: {
            unPlayedWords: array,
            wordBank: array
        }
    }, {
        new: true
    })
}
// create a function that will remove an element (the first or a random element) from the unpalyed word list and make it the current word
async function setCurrentWord(room, callback) {
    Room.findOne({
        roomName: room
    }).then(foundRoom => {
        // return null if no room is found
        if (!foundRoom) return null;
        const {
            unPlayedWords,
            currentWord
        } = foundRoom;
        // get a new word from the unPlayedWord list and remove it from the array.
        const newCurrentWord = unPlayedWords.pop();
        // If no more words in the array do some stuff
        if (!newCurrentWord) {
            console.log("NO MORE WORDS");
            const newRoomData = setCurrentWordToNull(foundRoom)
            return newRoomData
        };
        // update the unPlayedWords list for the room and the currentWord
        const update = {
            $set: {
                unPlayedWords,
                currentWord: newCurrentWord
            }
        }
        // push the current word into the PlayedWords array
        if (currentWord.length) {
            update["$push"] = {
                PlayedWords: currentWord
            }
        }
        console.log("found room name:", foundRoom);
        Room.findOneAndUpdate({
            roomName: foundRoom.roomName
        }, update, {
            new: true
        }).then(newUpdatedRoom => {
            callback(newUpdatedRoom)
        })


    }).catch(err => {
        throw err
    })
}

async function setCurrentWordToNull(room) {
    const currentWord ={
        word: null,
        definition: null,
        subject: null
    }

    const update = {
        $set: {
            currentWord: currentWord
        }
    }
    return Room.findOneAndUpdate({roomName: room}, update, {new: true})
}

// create a function that will add +1 to the score to a specific user given their ID  
async function addScoreForUser(id) {
    console.log("HELPER: UPDATING SCORE");
    return Room.findOneAndUpdate({
        "users.id": id
    }, {
        '$inc': {
            "users.$.score": 1
        }
    }, {
        new: true
    })
}

// Delete a room when the host leaves
// 

module.exports = {
    addUser,
    getUsersInRoom,
    checkRoomNameExist,
    getRoomByUserId,
    removeUserWithId,
    addWordBank,
    setCurrentWord,
    addScoreForUser
}
// create a new room with user 
// function test() {
//     addUser("Eddy", "myRoom", "1")
// }

// let array = [{word: "trying", definition: "world", subject: "haha"}, {word: "again", definition: "world", subject: "haha"}]
// async function test () {
//     const results = await addWordBank(array, "myRoom")
//     console.log("RESULTS:", results);
// }


// function test () {
//     const results = setCurrentWord("myRoom")
//     console.log("RESULTS:", results);
// }

// async function test() {
//     const results = await setCurrentWordToNull("6")
//     console.log("SET CURRENT WORD TO NULL: ", results);
// }
// test()