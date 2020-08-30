import React, { useContext } from 'react'
import GameContext from "../../utils/GameContext"

export default function WordBankItem() {
    const { wordBank, deleteWord, room } = useContext(GameContext)
    return (
    <tbody style={{background:"#d2d2d2"}}>
        {wordBank.length ? (wordBank.map( (word) => (
            <tr key={word.word}>
                <td className="mb-3 text-wrap">{word.subject}</td>
                <td className="mb-3 text-wrap">{word.word}</td>
                <td className="mb-3 text-wrap">{word.definition}</td>
                <td className="mb-3 text-wrap text-center">
                    <button className="btn btn-danger" onClick={() => deleteWord(word, room)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ))) : null}
    </tbody>
    )
}
