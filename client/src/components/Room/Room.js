import React, { useState, useEffect } from "react"
import Chat from "../Chat/Chat";
import SettingsContainer from "../SettingsContainer/SettingsContainer";
import WordBankContainer from "../WordBankContainer/WordBankContainer";
import queryString from 'query-string';
import io from "socket.io-client";
import GameContext from "../../utils/GameContext";
import GameContainer from "../GameContainer/GameContainer";
import ScoreContainer from "../ScoreContainer/ScoreContainer";

let socket;
const Room = ({ location }) => {
    // const { currentUser } = useContext(AuthContext)
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [wordBank, setwordBank] = useState([]);
    const [currentWord, setCurrentWord] = useState({});
    const [gameState, setGameState] = useState(false);
    const [isHost, setisHost] = useState(false)
    // const ENDPOINT = "http://localhost:5000";
    // const ENDPOINT = 'https://quizzlyisawesome.herokuapp.com/';
    const ENDPOINT = "https://enigmatic-springs-12174.herokuapp.com/"

    useEffect(() => {

        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name)
        // console.log(currentUser);
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
          if (room.hostId === userID){
            setisHost(true);
          }
          setUsers(users);
          setwordBank(room.wordBank)
        });

        socket.on("startGame", (room) => {
            console.log("SOMEONE STARTED THE GAME. DATA: ", room);
            if (room.currentWord.word) {
              setCurrentWord(room.currentWord)
              setGameState(true)
            }
        });

        socket.on("endGame", (roomData) => {
          console.log("SOMEONE ENDED THE GAME. DATA: ", roomData);
            setGameState(false)
            setUsers(roomData.users)
      });

        socket.on("newWord", (data) => {
          setwordBank([...data.wordBank])
        });

        socket.on("deleteWord", (data) => {
          console.log("RECEIVED DATA WHEN DELETING WORDS");
          setwordBank([...data.wordBank])
        });

        socket.on("correctAnswerSubmitted", (roomData) => {
          setCurrentWord(roomData.currentWord)
          setUsers(roomData.users);
        })

    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if(gameState && currentWord.word.trim().toLowerCase() === message.trim().toLowerCase()){
          console.log("right answer");
          socket.emit('sendMessage', message, name, room, () => setMessage(''));
          socket.emit('correctAnswerSubmitted', message, name, room, (roomData) => {
            console.log("UPDATED SCORE:", roomData);
            setCurrentWord(roomData.currentWord)
            setUsers(roomData.users)
          });
        } else{
          if(message) {
            socket.emit('sendMessage', message, name, room, () => setMessage(''));
          }
        }
    }

    function handleStartBtn () {
      console.log("gameState:", gameState);
      socket.emit('startGame', () => {
        console.log("You started a Game")
        setGameState(true)
      });
    }

    function handleCancelBtn(){
      socket.emit('endGame', room, () => {
        console.log("You ended the Game")
        setGameState(false)
      });
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

    function deleteWord(flashcard, room) {
      console.log("DELTE BUTTUN PRESSED");

      socket.emit('deleteWord', flashcard, room, data => {
        console.log("Word Deleted", data);
        setwordBank(data.wordBank)
      });
    }

    function quizletAddWords (words) {
      socket.emit('addWord', words, room, data => {
        console.log("sent new word", data);
        setwordBank(data.wordBank)
      });
    }

    //Game container UI elements
    function returnGameContainer(){
      if (currentWord !== null && currentWord.word) {
        return (
          <div className="container">
          <GameContainer /> <p></p>
          <ScoreContainer />
          {isHost ? (<center><button className="btn btn-danger m-1" onClick={handleCancelBtn}>Cancel</button></center>) : null}
          </div>
          ) 
      }
      else {
        return (
          <div className="container">
          <ScoreContainer />
          {isHost ? (<center><button className="btn btn-success m-1" onClick={handleCancelBtn}>Return</button></center>) : null}
          </div>
        )
      }
    }
    return (
      <GameContext.Provider value={{users, name, room, messages, message, isHost, setMessage, sendMessage, handleStartBtn, handleCancelBtn, addWord, wordBank, currentWord, setwordBank, quizletAddWords, deleteWord}}>
          {gameState ? returnGameContainer() : ( isHost ? <SettingsContainer /> : <div className="col-lg-8 col-md-8 col-sm-12"><WordBankContainer /></div>)}
            <Chat />
      </GameContext.Provider>
    );
}

export default Room;
