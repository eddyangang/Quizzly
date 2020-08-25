const mongoose = require("mongoose");
const Room = require("../models/roomModel");
const User = require("../UserClass")

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Quizzly", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Quizzly");

// const newRoom = [{
//   hostId: "1",
//   roomName: "Terror Dome"
// }, {
//   hostId: "2",
//   roomName: "myRoom"
// }]


Room.collection.drop();

// newRoom.forEach(element => {
//   const room = new Room(element)
//   const newUser = new User("eddy", "myRoom", "myid")
//   room.addUser(newUser)
//   Room.create(room).then(data => console.log(data)).catch(err => {
//     console.error(err);
//     process.exit(1);
//   })
// });

const list = [
  {
    users: [{ name: 'eddy', room: 'myRoom', id: 'myid', score: 0}],
    unPlayedWords: [],
    PlayedWords: [],
    hostId: '2',
    roomName: 'myRoom',
    currentWord: [],
  }
]

Room.create(list).then(data => {
  console.log(data)
  process.exit();
}).catch(err => {throw err})



