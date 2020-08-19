import React, { useContext} from 'react';
import AddWordContainer from '../AddWordContainer/AddWordContainer';
import WordBankContainer from "../WordBankContainer/WordBankContainer"
import GameContext from "../../utils/GameContext"

const SettingsContainer = () => {
    const { handleStartBtn } = useContext(GameContext)
    return(
       <div>
            <AddWordContainer/>
            <WordBankContainer/>
            <button onClick={handleStartBtn}>Start Game</button>
       </div>
    );
}

export default SettingsContainer;