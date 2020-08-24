import React from "react";
import WordBankContainer from "../WordBankContainer/WordBankContainer";
import AddWordContainer from "../AddWordContainer/AddWordContainer"
const SettingsContainer = (props) => {
  const isHost = props.isHost;
  if (isHost) {
    return (
      <div className="col-lg-8 col-md-8 col-sm-12">
        <button type="button" className="btn btn-success mb-5">Start Game</button>
        <AddWordContainer />
        <WordBankContainer />

      </div>

    );
  }
  return (
    <div className="col-lg-8 col-md-8 col-sm-12">
      <WordBankContainer />
    </div>
  )
}

export default SettingsContainer;
