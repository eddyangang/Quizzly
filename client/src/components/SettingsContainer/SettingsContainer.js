import React from 'react';
import AddWordContainer from '../AddWordContainer/AddWordContainer';
import WordBankContainer from "../WordBankContainer/WordBankContainer"


const SettingsContainer = () => {

    return(
       <div>
            <AddWordContainer/>
            <WordBankContainer/>
            <button>Start Game</button>
       </div>
    );
}

export default SettingsContainer;