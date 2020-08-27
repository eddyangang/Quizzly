import React from "react";
import Score from "../ScoreItem/ScoreItem" //might use this to display score

const getUserList = (users) => {
  if (users) {
    return users.map((user) => (
      <li key={user.name} className="activeItem">
        {/* <img className="p-1" alt="Online Icon" src={onlineIcon} /> */}
        <p className="purple-text">{user.name}</p>        
      </li>
    ));
  } else return null;
};

const getUserScoreList = (users) => {
  if (users) {
    return users.map((user) => (
      <li key={user.score} className="activeItem">
        {/* <img className="p-1" alt="Online Icon" src={onlineIcon} /> */}
        <p className="purple-text">{user.score}</p>        
      </li>
    ));
  } else return null;
};

const ScoreContainer = ({users}) => {
  return (
    <div className="card container-fluid mt-5">
      <h2>Score Board</h2>
      <table className="table table-bordered border-purple">
        <thead>
          <tr >
            <th className="text-center " scope="col-md-4">
              Name
            </th>
            <ul className="list-group list-group-flush">{getUserList(users)}</ul>
            <th className="text-center" scope="col-md-4">
              Score
            </th>
            <ul className="list-group list-group-flush">{getUserScoreList(users)}</ul>
          </tr>
        </thead>
        <ScoreItem/>
      </table>
    </div>
  );
};

export default ScoreContainer;