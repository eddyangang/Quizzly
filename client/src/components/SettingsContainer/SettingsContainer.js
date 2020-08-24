import React from "react";
import WordBankContainer from "../WordBankContainer/WordBankContainer";
import AddWordContainer from "../AddWordContainer/AddWordContainer"
const SettingsContainer = (props) => {
  const isHost = props.isHost;
  if (isHost) {
    return (
      <div className="col-lg-8 col-md-8 col-sm-12">
          <AddWordContainer />
          <WordBankContainer />
      </div>
  
    );
  }
  return <WordBankContainer />;
}

export default SettingsContainer;
