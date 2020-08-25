import React, { useState, useEffect, useContext } from "react";
import GameContext from "../../utils/GameContext"
const Game = () => {
  const { currentWord, message } = useContext(GameContext)
  const [charactersAlreadyDisplay, addNewCharacterToCharactersAlreadyDisplay] = useState([]);
  let timeOut = null;
  
  console.log(currentWord);
  const questionTimerInSec = 30;
  //const score = 1000;
  const word = currentWord.word;
  const length = word.length;
  const timeInMilliSec = (questionTimerInSec/length)  * 1000;
  const guessedWord = message;
  let i = 0;
  const getRandomNumber = () => {
    return Math.floor(Math.random() * length);
  };
  useEffect(() => {
    timeOut = setTimeout(function () {
      if (charactersAlreadyDisplay.length < length) {
        let randomNumber = getRandomNumber();
        let randomCharacter = word[randomNumber];
        while (charactersAlreadyDisplay.some((p) => p === randomCharacter)) {
          randomNumber = getRandomNumber();
          randomCharacter = word[randomNumber];
        }
        const newValue = [...charactersAlreadyDisplay, randomCharacter];
        addNewCharacterToCharactersAlreadyDisplay(newValue);
        console.log(newValue);
      } else {
        clearTimeout(timeOut);
      }
    }, timeInMilliSec);
    return () => clearTimeout(timeOut);
  }, [charactersAlreadyDisplay]);

  const getSpan = (char, array) => {
    if (word.toLowerCase() === guessedWord.toLowerCase()) {
      clearTimeout(timeOut);
      
      return (
        <span key={i++}>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
          <span
            className="text-success"
            style={{ textDecoration: "underline" }}
          >
            &nbsp;&nbsp;{char}&nbsp;&nbsp;
          </span>
        </span>
      );
    } else {
      if (array.some((x) => char === x))
        return (
          <span key={i++}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
            <span
              className="text-warning"
              style={{ textDecoration: "underline" }}
            >
              &nbsp;&nbsp;{char}&nbsp;&nbsp;
            </span>
          </span>
        );
      else
        return (
          <span key={i++}>
            <span>&nbsp;&nbsp;&nbsp;</span>{" "}
            <span style={{ textDecoration: "underline" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
        );
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header">
        <p className="card-text">Definition</p>
      </div>
      <div className="card-body">
        <p className="card-text">{currentWord.definition}</p>
      </div>
      <div className="card-footer">
        {Array.from(word).map((x) => getSpan(x, charactersAlreadyDisplay))}
      </div>
    </div>
  );
};

export default Game;
