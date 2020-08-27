import React, { useContext } from 'react'
import GameContext from "../../utils/GameContext"
export default function ScoreItem() {
    const { users } = useContext(GameContext)
    return (
    <tbody style={{background:"#3A3A3D"}}>
        {users.length ? (users.map( (score, i) => (
            <tr key={i}>
                <td className="mb-3 text-wrap">{score}</td>
            </tr>
        ))) : null}
    </tbody>
    )
}

