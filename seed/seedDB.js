const mongoose = require("mongoose");
const Room = require("../models/roomModel");
const User = require("../UserClass")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Quizzly", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const data = {
  hostId: "1",
  roomName: "Terror Dome"
}

const newUser = new User("eddy", "myRoom", "myid")
const room = new Room(data)
room.makeHost("eddy123345")
room.addUser(newUser)


Room.insertMany(room).then(data => console.log(data)).catch(err => {
  console.error(err);
  process.exit();
})
