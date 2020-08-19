import React, { useContext } from "react";
// import queryString from 'query-string';
// import io from "socket.io-client";
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';
import GameContext from "../../utils/GameContext";

const Chat = () => {
  const { users, name, room, message, messages, setMessage, sendMessage } = useContext(GameContext)

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;
