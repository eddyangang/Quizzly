import React, { useContext } from 'react'
import GameContext from "../../utils/GameContext"
export default function DefinitionDisplay() {
    const { currentWord } = useContext(GameContext)
    console.log(currentWord);

    return (
        <div className="container p-3">
            <h1>Question: </h1>
            <h3>{currentWord.definition}</h3>
        </div>
    )
}
