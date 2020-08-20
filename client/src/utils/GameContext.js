import React from 'react'

const GameContext = React.createContext({
    setMessage: () => {},
    sendMessage: ()=> {},
    gameState: false
})


export default GameContext;