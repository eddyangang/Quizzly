import React, { useState } from "react";

const AddWordContainer = () => {
  const [currentSubject, setCurrentSubject] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordDefinition, setCurrentWordDefinition] = useState("");

  const addWord = (e) => {
    e.preventDefault();
    const newFlasCard = {
      subject: currentSubject,
      word: currentWord,
      definition: currentWordDefinition,
    };

    clear(e);
    console.log(newFlasCard);
  };

  const clear = (e) => {
    e.preventDefault();
    setCurrentSubject("");
    setCurrentWord("");
    setCurrentWordDefinition("");
  };

  return (
      <form className="card container-fluid">
        <div className="form-row">
          <div className="col">
            <button
              style={{ background: "#605c55" }}
              type="submit"
              class="btn float-right text-white"
              onClick={(e) => addWord(e)}
            >
              Add Word
            </button>
          </div>
          <div className="col">
            <button
              style={{ background: "#605c55" }}
              type="submit"
              class="btn text-white float-left"
              onClick={(e) => clear(e)}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label for="subjectinput">Subject</label>
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
            <label for="wordinput">Word</label>
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
        <div class="form-group">
          <label for="definationinput">Enter the Defination:</label>
          <textarea
            class="form-control"
            id="definationinput"
            rows="3"
            placeholder="definition"
            value={currentWordDefinition}
            onChange={({ target: { value } }) =>
              setCurrentWordDefinition(value)
            }
          />
        </div>
      </form>
  );
};

export default AddWordContainer;
