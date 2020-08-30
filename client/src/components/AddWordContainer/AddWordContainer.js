import React, { useState, useContext } from "react";
import GameContext from "../../utils/GameContext"
import QuizletForm from "../QuizletForm/QuizletForm"
const AddWordContainer = () => {

  const { addWord } = useContext(GameContext)
  const [currentSubject, setCurrentSubject] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordDefinition, setCurrentWordDefinition] = useState("");

  const handleAddBtn = (e) => {
    e.preventDefault();
    if (currentWord.trim() !== "" && currentSubject.trim() !== "" &&currentWordDefinition.trim() !== ""){
      addWord(currentWord, currentSubject, currentWordDefinition)
    }
    else alert("All fields must have an input")
    clear(e);
  };

  const clear = (e) => {
    e.preventDefault();
    setCurrentSubject("");
    setCurrentWord("");
    setCurrentWordDefinition("");
  };

  return (
    <form className="card container-fluid py-3">
        <div className="d-flex row justify-content-between m-2">
          <h3>Add a Word</h3>
          <QuizletForm/>
        </div>
        <hr/>
        <div className="form-row">
          <div className="col">
            <label htmlFor="subjectinput">Subject</label>
            <input
              placeholder="Subject"
              type="text"
              className="form-control"
              id="subjectinput"
              value={currentSubject}
              onChange={({ target: { value } }) => setCurrentSubject(value)}
            />
          </div>
          <div className="col">
            <label htmlFor="wordinput">Word</label>
            <input
              type="text"
              placeholder="Word"
              className="form-control"
              id="wordinput"
              value={currentWord}
              onChange={({ target: { value } }) => setCurrentWord(value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="definationinput">Enter the Definition:</label>
          <textarea
            className="form-control"
            id="definitioninput"
            rows="3"
            placeholder="definition"
            value={currentWordDefinition}
            onChange={({ target: { value } }) =>
            setCurrentWordDefinition(value)
            }
          />
        </div>
        <div className="form-row">
          <div className="col">
            <button
              style={{ background: "#605c55" }}
              type="submit"
              className="btn float-right text-white"
              onClick={(e) => handleAddBtn(e)}
            >
              Add Word
            </button>
          </div>
          <div className="col">
            <button
              style={{ background: "#605c55" }}
              type="submit"
              className="btn text-white float-left"
              onClick={(e) => clear(e)}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
  );
};

export default AddWordContainer;
