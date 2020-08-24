const express = require("express");
const router = express.Router();
const path = require("path");


if (process.env.NODE_ENV === "production") {
  router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
  })
}


// router.get("/", (req, res) => {
//   res.send({ response: "Server is up and running." }).status(200);
// });


module.exports = router;