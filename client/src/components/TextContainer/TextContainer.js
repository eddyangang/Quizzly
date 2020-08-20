import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const getList = (users) => {
  if (users) {
    return users.map((user) => (
      <li key={user.name} className="activeItem">
        <img className="p-1" alt="Online Icon" src={onlineIcon} />
        <h5>{user.name}</h5>        
      </li>
    ));
  } else return null;
};
const TextContainer = ({ users }) => (
  <div className="card">
    <div className="card-header bg-primary">Online People Status:</div>
    <ul className="list-group list-group-flush">{getList(users)}</ul>
  </div>
);

export default TextContainer;
