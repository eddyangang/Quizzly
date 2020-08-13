import React, { useState } from 'react';


const AddWordContainer = () => {

    const [currentSubject, setCurrentSubject] = useState("")
    const [currentWord, setCurrentWord] = useState("")
    const [currentWordDefinition, setCurrentWordDefinition] = useState("")

    const addWord = (e) => {
        e.preventDefault()
        const newFlasCard = {
            subject: currentSubject,
            word: currentWord,
            definition: currentWordDefinition
        }
 
        clear(e)
        console.log(newFlasCard);
    }

    const clear = (e) => {
        e.preventDefault()
        setCurrentSubject("")
        setCurrentWord("")
        setCurrentWordDefinition("")
    }


    return (
       <div>
            <form>
                <input 
                    placeholder="Subject" 
                    type="text"
                    value ={currentSubject}
                    onChange={({ target: { value } }) => setCurrentSubject(value)}/>
                <input 
                    placeholder="Word"
                    type="text"
                    value={currentWord}
                    onChange={({ target: { value } }) => setCurrentWord(value)}/>
                <textarea 
                    placeholder="definition"
                    value={currentWordDefinition}
                    onChange={({ target: { value } }) => setCurrentWordDefinition(value)}
                ></textarea>
                <button onClick={(e) => addWord(e)}>Add Word</button>
                <button onClick={(e) => clear(e)}>Clear</button>
            </form>
       </div>
    );
}

export default AddWordContainer;