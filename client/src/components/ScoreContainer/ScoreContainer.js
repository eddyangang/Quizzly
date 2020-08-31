import React, { useContext } from "react";
// import Score from "../ScoreItem/ScoreItem" //might use this to display score
import GameContext from "../../utils/GameContext"
import "./ScoreContainer.css";


const ScoreContainer = () => {

  const { users } = useContext(GameContext);

  const getUserList = (users) => {
    if (users) {
      return users.map((user, i) => (
        <li key={i} className="activeItem text-center">
          <p className="purple-text">{user.name}</p>
        </li>
      ));
    } else return null;
  };

  const getUserScoreList = (users) => {
    if (users) {
      return users.map((user, i) => (
        <li key={i} className="activeItem text-center">
          <p className="purple-text">{user.score}</p>
        </li>
      ));
    } else return null;
  };

  return (
    //holds the score table
    <div className="card">
      <center><h2>Score Board</h2></center>
      <table className="table table-bordered border-purple">
        <thead>
          <tr >
            <th className="text-left" scope="col-sm-4">Name</th>
            <th className="text-left" scope="col-sm-4">Score</th>
          </tr>
        </thead>

      <tbody>
          <tr >
            <td className="text-center m-0">{getUserList(users)}</td>
            <td className="text-center m-0">{getUserScoreList(users)}</td>
          </tr>
      </tbody>


      </table>
    </div>
  );
};

export default ScoreContainer;