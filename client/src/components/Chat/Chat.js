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

    <div className="container p-0 mr-2">
      {/* <div className="row">
        <TextContainer users={users} />
      </div> */}

      <div class="accordion" id="accordionExample">
        <div class="card rounded-0">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left text-white text-center cardback" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Online Players
        </button>
            </h2>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body rounded-0">
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
