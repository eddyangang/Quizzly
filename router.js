const express = require("express");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const Room = require("./models/roomModel");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Quizzly", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

if (process.env.NODE_ENV === "production") {
  router.use(function (req, res, next) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
    next()
  })
}

// check if server is running
router.get("/", (req, res) => {
  res.send({
    response: "Server is up and running."
  }).status(200);
});

// return all the current rooms
router.get("/api/rooms", (req, res) => {
  // (async () => {
  //   try {
      // const rooms = await Room.find({});
      Room.find({}).then((rooms)=>{
        res.json(rooms);
      })

  //   } catch (err) {
  //     throw err;
  //   }
  // })();
})


module.exports = router;