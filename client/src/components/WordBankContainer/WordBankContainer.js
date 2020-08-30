import React, { useContext} from "react";
import WordBankItem from "../WordBankItem/WordBankItem"
import "./WordBankContainer.css";
import GameContext from "../../utils/GameContext"
const WordBankContainer = () => {
  const { isHost } = useContext(GameContext)
  return (
    <div className="card container-fluid mt-5 py-3">
      <h2>Word Bank</h2>
      <table className="table table-bordered border-bark">
        <thead>
          <tr >
            <th className="text-center " scope="col-md-3">
              Subject
            </th>
            <th className="text-center" scope="col-md-3">
              Word
            </th>
            <th className="text-center" scope="col-md-5">
              Definition
            </th>
            {isHost ? (<th className="text-center" scope="col-md-1">
              Delete
            </th>) : null}
          </tr>
        </thead>
        <WordBankItem/>
      </table>
    </div>
  );
};
export default WordBankContainer;