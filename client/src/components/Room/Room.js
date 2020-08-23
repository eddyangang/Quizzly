import React from "react";
import Chat from "../Chat/Chat";
import AddWordContainer from "../AddWordContainer/AddWordContainer";
import SettingsContainer from "../SettingsContainer/SettingsContainer";

const Room = ({ location }) => {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <div style={{height:"70%", width:"70%"}} className="row mt-1 ml-5">
            <AddWordContainer />
            
          </div>
         <div style={{height:"70%", width:"70%"}} className="row mt-3 ml-5">
            <SettingsContainer />
          </div>
          <div className= "text-center">
              <button className="btn btn-success ">Start Game</button>            
            </div>
        </div>
      
          <div style={{position: "fixed", bottom:0, right:0,height:"90%"}} className="col-3 px-1 bg-dark">
            <Chat location={location} />
          </div>
    </div>
    </div>
  );
};

export default Room;
