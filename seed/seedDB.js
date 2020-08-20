const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Quizzly", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const roomSeed = [{
  hostId: "1",
  roomName: "Terror Dome"
}];

db.Room.remove({})
  .then(() => db.Room.collection.insertMany(roomSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

console.log("hello");
db.Room.makeHost("abc").then(data => console.log(data))