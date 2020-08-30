import React, { useContext } from 'react'
import GameContext from "../../utils/GameContext"

export default function WordBankItem() {
    const { wordBank } = useContext(GameContext)
    return (
    <tbody style={{background:"#d2d2d2"}}>
        {wordBank.length ? (wordBank.map( (word, i) => (
            <tr key={i}>
                <td className="mb-3 text-wrap">{word.subject}</td>
                <td className="mb-3 text-wrap">{word.word}</td>
                <td className="mb-3 text-wrap">{word.definition}</td>
            </tr>
        ))) : null}
    </tbody>
    )
}

