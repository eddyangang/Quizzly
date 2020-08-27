import React, { useContext } from 'react'
import GameContext from "../../utils/GameContext"
export default function ScoreItem() {
    const { users } = useContext(GameContext)
    return (
        <tbody className="gray">
            {(users.map((score) => (
                <tr key={user.score}>
                    <td className="mb-3 text-wrap">{score}</td>
                </tr>
            )))}
        </tbody>
    )
}

