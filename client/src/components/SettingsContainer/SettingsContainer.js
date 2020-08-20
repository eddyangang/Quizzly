import React from 'react';
import AddWordContainer from '../AddWordContainer/AddWordContainer';
import WordBankContainer from "../WordBankContainer/WordBankContainer"


const SettingsContainer = () => {

    return(
        <div>
            <div className ="row">      
            <AddWordContainer/>
            </div>        
            <div className ="row">
                <WordBankContainer/>
            </div>
            <div className="text-center" style={{padding:"10px",margin:"10px"}}>
                <button className ="btn btn-success btn-lg ">Start Game</button>
            </div>
        </div>
        
    );
}

export default SettingsContainer;