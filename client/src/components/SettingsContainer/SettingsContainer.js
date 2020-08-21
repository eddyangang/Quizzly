import React, { useContext} from 'react';
import AddWordContainer from '../AddWordContainer/AddWordContainer';
import WordBankContainer from "../WordBankContainer/WordBankContainer"
import GameContext from "../../utils/GameContext"

const SettingsContainer = () => {
    const { handleStartBtn } = useContext(GameContext)
    return(
        <div>
       <div className = "row">
           <AddWordContainer/>
        </div>
        <div className = "row">
            <WordBankContainer/>
        </div>
        <div className="text-center" style={{padding:"10px",margin:"10px"}}>
            <button className ="btn btn-success btn-lg" onClick={handleStartBtn}>Start Game</button>
        </div>
        </div>
    );
}

export default SettingsContainer;