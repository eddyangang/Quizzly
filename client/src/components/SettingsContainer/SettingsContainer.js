import React from "react";
import WordBankContainer from "../WordBankContainer/WordBankContainer";
import AddWordContainer from "../AddWordContainer/AddWordContainer"
const SettingsContainer = () => {
  return (
    <div className="col-lg-8 col-md-8 col-sm-12">
        <AddWordContainer />
        <WordBankContainer />
    </div>

  );
};

export default SettingsContainer;
