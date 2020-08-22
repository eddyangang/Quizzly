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
    <div className="container">
      <div className="row">
        <TextContainer users={users} />
      </div>
      <div style={{height:"50%"}}className="row">
        <InfoBar room={room} />
        <div className="list-group list-group-flush"></div>
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
