import React, { useContext } from 'react'
import GameContext from "../../utils/GameContext"
export default function DefinitionDisplay() {
    const { currentWord } = useContext(GameContext)
    return (
        <div>
            Hi
        </div>
    )
}
