import React, { useState, useEffect, useContext } from "react"
import Chat from "../Chat/Chat";
import SettingsContainer from "../SettingsContainer/SettingsContainer"
import WordBankContainer from "../WordBankContainer/WordBankContainer";
import queryString from 'query-string';
import io from "socket.io-client";
import GameContext from "../../utils/GameContext"
import {AuthContext} from "../../utils/AuthContext"
import DefinitionDisplay from "../DefinitionDisplay/DefinitionDisplay";

let socket;
const Room = ({ location }) => {
    const { currentUser } = useContext(AuthContext)
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [wordBank, setwordBank] = useState([]);
    const [currentWord, setCurrentWord] = useState({});
    const [gameState, setGameState] = useState(false);
    const [isHost, setisHost] = useState(false)
    const ENDPOINT = "http://localhost:5000";
    // const ENDPOINT = 'https://quizzlyisawesome.herokuapp.com/';

    useEffect(() => {

        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name)
        console.log(currentUser);
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
        
        socket.on("roomData", ({ room, users, userID }) => {
          console.log("ROOM:", room);
          console.log("USERID:", userID);
          if (room.hostId === userID){
            setisHost(true);
          }
          setUsers(users);
          setwordBank(room.wordBank)
        });

        socket.on("startGame", (room) => {
            console.log("SOMEONE STARTED THE GAME. DATA: ", room);
            if (room.currentWord.word) {
              setGameState(true)
              console.log("GAMESTATE CAHNGED:", gameState);
              setCurrentWord(room.currentWord)
            }
        });

        socket.on("newWord", (data) => {
          console.log("AFTER BROADCAST");
          setwordBank([...data.wordBank])
        });

    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, name, room, () => setMessage(''));
        }
    }

    function handleStartBtn () {
        setGameState(true)
        console.log("gameState:", gameState);
        socket.emit('startGame', ()=> {console.log("working?");});
    }

    function handleClearBtn(){
      setGameState(!gameState)
      console.log("gameState:", gameState);
    }

    function addWord(word, subject, definition){

      const newFlashCard = {
        word, 
        subject,
        definition
      }
      
      socket.emit('addWord', newFlashCard, room, data => {
        console.log("sent new word", data);
        setwordBank(data.wordBank)
      });
    }


    return (
      <div className="row">
      <GameContext.Provider value={{users, name, room, messages, message, setMessage, sendMessage, handleStartBtn, addWord, wordBank, currentWord}}>
          {gameState ? <DefinitionDisplay /> : ( isHost ? <SettingsContainer /> : <WordBankContainer />)}
  
            <Chat />
      </GameContext.Provider>
       </div>
    );
  
    // return (
    //   <div className="row">
    //   <GameContext.Provider value={{users, name, room, messages, message, setMessage, sendMessage, handleStartBtn}}>
    //         <h1>This is a placeholder for game</h1>
    //         <Chat />
    //   </GameContext.Provider>
    //    </div>
    // );

}


//     return (
//       <div className="row">
//       <GameContext.Provider value={{users, name, room, messages, message, setMessage, sendMessage, handleStartBtn}}>
//             <SettingsContainer isHost={true}/> 
//             <Chat />
//       </GameContext.Provider>
//        </div>
//     );
// }

export default Room;
