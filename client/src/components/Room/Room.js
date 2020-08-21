import React from "react";
import Chat from "../Chat/Chat";
import AddWordContainer from "../AddWordContainer/AddWordContainer";
import SettingsContainer from "../SettingsContainer/SettingsContainer";

const Room = ({ location }) => {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <div className="row mt-3 ml-2">
            <AddWordContainer />
            
          </div>
         <div className="row mt-3 ml-2">
            <SettingsContainer />
          </div>
          <div className= "text-center">
              <button className="btn btn-success ">Start Game</button>            
            </div>
        </div>
      
          <div className="col-3 px-1 bg-dark fixed-right" id="sticky-sidebar">
            <Chat location={location} />
          </div>
    </div>
    </div>
  );
};

export default Room;
