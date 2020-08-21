const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const { checkRoomNameExist, addUser, getUsersInRoom } = require("./utilities/roomHelper")

//added by Chris


// const path = require("path");
// const PORT = process.env.PORT || 3001;
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

//end

//Mongoose connections
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Quizzly",
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});


// const {
//   addUser,
//   removeUser,
//   getUser,
//   getUserInRoom
// } = require('./users');

const router = require('./router');


const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({
    name,
    room
  }, callback) => {
    (async () => {
      try {
        const id = socket.id;
        console.log("Given:", name, room ,id);
        const { error, Room } = await addUser(name, room, id );
        console.log("error: ", error);
        console.log("Room", Room);
        if (error) return callback(error);
        socket.join(Room.roomName);
      
        socket.emit('message', {
          user: 'admin',
          text: `${name}, welcome to room ${Room.roomName}.`
        });
        socket.broadcast.to(Room.roomName).emit('message', {
          user: 'admin',
          text: `${name} has joined!`
        });
    
        io.to(Room.roomName).emit('roomData', {
          room: Room.roomName,
          users: await getUsersInRoom(Room.roomName)
        });
    
        callback();
      }
      catch(err){
        console.log(err);
      }
    })();
    

  });

  socket.on('sendMessage', (message, name, room, callback) => {
    console.log("name, message, room:", name, message, room);

    // maybe check if room exist??
    io.to(room).emit('message', {
      user: name,
      text: message
    });

    callback();
  });

  // socket.on("startGame", (callback) => {
  //   const user = getUser(socket.id);

  //   io.to(user.room).emit('startGame', {
  //     text: `${user.name} started the game`
  //   })

  //   callback();
  // });

  // socket.on("startGame", callback => {
  //   const user = getUser(socket.id);
  //   io.to(user.room).emit('startGame', { user: user.name, text: `${user.name} started the game` });

  //   callback()
  // })

  socket.on('disconnect', () => {
    // const user = removeUser(socket.id);
    console.log("HERE:", socket.id);
    // if (user) {
    //   io.to(user.room).emit('message', {
    //     user: 'Admin',
    //     text: `${user.name} has left.`
    //   });
    //   io.to(user.room).emit('roomData', {
    //     room: user.room,
    //     users: getUsersInRoom(user.room)
    //   });
    // }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server listening on http://localhost:5000.`));