import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar m-0 bg-secondary text-white rounded-0 text-center">
    {/* <div className="text-black text-center"> */}
      {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
      <h5 className="m-auto">Room: <span> {room} </span></h5>
    {/* </div> */}
    {/* <div className="pr-1">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div> */}
  </div>
);

export default InfoBar;