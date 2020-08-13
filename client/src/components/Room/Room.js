import React from "react"
import Chat from "../Chat/Chat";
import SettingsContainer from "../SettingsContainer/SettingsContainer"

const Room = ({ location }) => {
    return (
       <div>
        <SettingsContainer/>   
        <Chat location = { location }/>
       </div>
    );
}

export default Room