import React from "react";
import Score from "../ScoreContainer/score"
const ScoreContainer = () => {
  return (
    <div className="card container-fluid mt-5">
      <h2>Score Board</h2>
      <table className="table table-bordered border-purple">
        <thead>
          <tr >
            <th className="text-center " scope="col-md-4">
              Name
            </th>
            <th className="text-center" scope="col-md-4">
              Score
            </th>
          </tr>
        </thead>
        <ScoreItem/>
      </table>
    </div>
  );
};

export default ScoreContainer;