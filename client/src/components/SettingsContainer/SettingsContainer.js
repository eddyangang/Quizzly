import React, { useContext } from "react";
import WordBankContainer from "../WordBankContainer/WordBankContainer";
import AddWordContainer from "../AddWordContainer/AddWordContainer"
import GameContext from "../../utils/GameContext"
const SettingsContainer = () => {
  const{ handleStartBtn } = useContext(GameContext);
    return (
      <div className="col-lg-8 col-md-8 col-sm-12">
        <button type="button" className="btn btn-success mb-5" onClick={handleStartBtn}>Start Game</button>
        <AddWordContainer />
        <WordBankContainer />
      </div>

    );

}

export default SettingsContainer;
