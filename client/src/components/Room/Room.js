import React from "react"
import Chat from "../Chat/Chat";
import SettingsContainer from "../SettingsContainer/SettingsContainer"

const Room = ({ location }) => {
    return (
       <div className="row">
           <div className="col-md-6">
                <SettingsContainer/>   
            </div>
            <div className="col-md-6">
                <Chat location = { location }/>
            </div>
       </div>
    );
}

export default Room