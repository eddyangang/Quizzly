import React, { useState, useEffect } from "react"
import Chat from "../Chat/Chat";
import SettingsContainer from "../SettingsContainer/SettingsContainer"
import queryString from 'query-string';
import io from "socket.io-client";
import GameContext from "../../utils/GameContext"
let socket;
const Room = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [gameState, setGameState] = useState(false)
    const ENDPOINT = "http://localhost:5000";
    // const ENDPOINT = 'https://quizzlyisawesome.herokuapp.com/';

    useEffect(() => {

        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name)
    
        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });
      }, [ENDPOINT, location.search]);


      useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });

        socket.on("startGame", ({ text }) => {
            console.log("received");
            console.log(text);
          });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, name, room, () => setMessage(''));
        }
    }

    function handleStartBtn () {
        setGameState(!gameState)
        console.log("gameState:", gameState);
        socket.emit('startGame', ()=> {console.log("working?");});
    }

    return (
      <div className="row">
      <GameContext.Provider value={{users, name, room, messages, message, setMessage, sendMessage, handleStartBtn}}>
            <SettingsContainer isHost={false}/> 
            <Chat />
      </GameContext.Provider>
       </div>
    );
}

export default Room;
