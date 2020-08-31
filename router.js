const express = require("express");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const Room = require("./models/roomModel");
const quizletScrap = require("./utilities/quizletScraper")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Quizzly", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});



// check if server is running
router.get("/", (req, res) => {
  res.send({
    response: "Server is up and running."
  }).status(200);
});

// return all the current rooms
router.get("/api/rooms", (req, res) => {
  Room.find({}).then((rooms) => {
    res.json(rooms);
  })
})

router.post("/api/quizletscrap", (req, res) => {
  const{ url } = req.body
  console.log("URL:", url);
  quizletScrap(url).then((results) => {
    res.json(results)
  }).catch(err => console.log(err))
})


if (process.env.NODE_ENV === "production") {
  router.use(function (req, res, next) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
    next()
  })
}

module.exports = router;