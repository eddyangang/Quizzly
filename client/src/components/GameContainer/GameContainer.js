import React, { useState, useEffect,useContext } from "react";
import GameContext from "../../utils/GameContext";

const GameContainer = (props) => {
  const { currentWord, message } = useContext(GameContext);
  const questionTimerInSec = 30;
  // const score = 1000;
  const word = currentWord.word;
  const guessedWord =message;
  const defaultCharacterToBeDisplay = ['!',' ','?','-','_']
  const getUnqiueCharacterFromWord = () => {
    const arr = Array.from(word).sort().filter(x=> !defaultCharacterToBeDisplay.includes(x));
    const result = [arr[0]];
    for(var v = 1; v < arr.length; v++)
    {
      if(arr[v] !== arr[v-1] )
        result.push(arr[v]);
    }
    return result;
  }  
  const unqiueCharacterFromWord = getUnqiueCharacterFromWord();
  const length = unqiueCharacterFromWord.length;
  const getRandomNumber = () => {
    return Math.floor(Math.random() * length);
  };  
  const getRandomeCharacter = () =>
  {    
     if (charactersAlreadyDisplay.length !== length) {
      let randomNumber = getRandomNumber();
      let randomCharacter = unqiueCharacterFromWord[randomNumber];
      while (charactersAlreadyDisplay.some((p) => p === randomCharacter)) {
        randomNumber = getRandomNumber();
        randomCharacter = unqiueCharacterFromWord[randomNumber];
      }
      const newValue = [...charactersAlreadyDisplay, randomCharacter];
      addNewCharacterToCharactersAlreadyDisplay(newValue);
    } 
  }
  const timeInMilliSec = questionTimerInSec/length * 1000;
  const [charactersAlreadyDisplay, addNewCharacterToCharactersAlreadyDisplay] = useState([]);
  useEffect(
    () => {    
    let timer1 = setTimeout(() => getRandomeCharacter(), timeInMilliSec)
    return () => {      
      clearTimeout(timer1)
    }    
  }, 
  [charactersAlreadyDisplay]);

  let key= 0;
  const getSpan = (char, array) => {
    if (word.toLowerCase() === guessedWord.toLowerCase())
      return (
        <span key={key++}>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
          <span
            className="text-success"
            style={{ textDecoration: "underline" }}
          >
            &nbsp;&nbsp;{char}&nbsp;&nbsp;
          </span>
        </span>
      );
    else  if (defaultCharacterToBeDisplay.some(x=> char === x))
    return (
      <span key={key++}>
        <span>&nbsp;&nbsp;&nbsp;</span>{" "}
        <span>
        &nbsp;&nbsp;{char}&nbsp;&nbsp;
        </span>
      </span>
    );
    else if (array.some((x) => char === x) )
        return (
          <span key={key++}>
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
          <span key={key++}>
            <span>&nbsp;&nbsp;&nbsp;</span>{" "}
            <span style={{ textDecoration: "underline" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
        );
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

export default GameContainer;
