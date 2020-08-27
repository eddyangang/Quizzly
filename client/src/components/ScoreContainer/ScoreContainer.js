import React, { useContext } from "react";
// import Score from "../ScoreItem/ScoreItem" //might use this to display score
import GameContext from "../../utils/GameContext"



const ScoreContainer = () => {

  const { users } = useContext(GameContext);

  const getUserList = (users) => {
    if (users) {
      return users.map((user) => (
        <li key={user.name} className="activeItem">
          <p className="purple-text">{user.name}</p>
        </li>
      ));
    } else return null;
  };

  const getUserScoreList = (users) => {
    if (users) {
      return users.map((user) => (
        <li key={user.score} className="activeItem">
          <p className="purple-text">{user.score}</p>
        </li>
      ));
    } else return null;
  };

  return (
    //holds
    // set margin to 4 and make container responsive
    <div className="card container-fluid w-50 h-50 m-4">
      <h2>Score Board</h2>
      <table className="table table-bordered border-purple">
        <thead>
          <tr >
            <th className="text-center" scope="col-sm-4">Name</th>
            <th className="text-center" scope="col-sm-4">Score</th>
          </tr>
        </thead>

        <tr >
          <td className="text-center">{getUserList(users)}</td>
          <td className="text-center">{getUserScoreList(users)}</td>
        </tr>


      </table>
    </div>
  );
};

export default ScoreContainer;