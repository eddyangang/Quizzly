const mongoose = require("mongoose");
const db = require("../models/roomModel");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Quizzly");

const roomSeed = [
  {
    hostId: "1",
    roomName: "Terror Dome"
  }
];

// db.Books.remove({})
//   .then(() => db.Books.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
