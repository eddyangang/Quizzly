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

    <div className="col-md-4">

      <div className="accordion" id="accordionExample">
        <div className="card rounded-0">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left text-white text-center cardback" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Online Players
        </button>
            </h2>
          </div>

          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body rounded-0">
              <TextContainer users={users} />
            </div>
          </div>
        </div>
      </div>




      <div style={{ height: "60vh" }} className="row m-0">
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
