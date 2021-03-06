import React from "react";

import "./TextContainer.css";

const getList = (users) => {
  if (users) {
    return users.map((user) => (
      <li key={user.name} className="activeItem">
        {/* <img className="p-1" alt="Online Icon" src={onlineIcon} /> */}
        <p className="playername" >{user.name}</p>        
      </li>
    ));
  } else return null;
};

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {/* <div className="textContainerHeader">Online People Status:</div> */}
    <ul className="list-group list-group-flush">{getList(users)}</ul>
  </div>

)

export default TextContainer;
