import React, { useState } from "react";
import { Link } from "react-router-dom"; //links to our chat
import './Join.css';
import TextContainer from '../TextContainer/TextContainer';

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
  

<div className="container-fluid">
<div className="row">
    <div className="col-sm-6"><h1 className="heading">Open Rooms</h1>

    </div>

    <div className="col-sm-1"></div>

    <div className="col-sm-4">
    <h1 className="heading">Create a Room</h1>
      <form>
        <div className="form-group">
          <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className="form-group">
          <input type="name" className="form-control" id="exampleInputPassword1" placeholder="Room Name" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/room?name=${name}&room=${room}`}>
          {/* prevents click if there is no name or room; otherwise does nothing and we are routed to the url */}
        <center><button type="submit" className="btn purple">Create</button></center>
        </Link>
      </form>

     </div> 
</div>
</div>
  );
}
