import React, { useContext } from "react";
import WordBankContainer from "../WordBankContainer/WordBankContainer";
import AddWordContainer from "../AddWordContainer/AddWordContainer";
import GameContext from "../../utils/GameContext";
import "../SettingsContainer/settingsContainer.css";

const SettingsContainer = () => {
  const{ handleStartBtn } = useContext(GameContext);
    return (
      <div className="col-lg-8 col-md-8 col-sm-12"><center>
        <button type="button" className="btn m-3 startButton glowEffect green purple-text" onClick={handleStartBtn}>Start Game</button></center>
        <AddWordContainer />
        <WordBankContainer />
      </div>

    );

}

export default SettingsContainer;
