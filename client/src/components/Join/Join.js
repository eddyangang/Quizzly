import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Join.css';
import '../OpenChatrooms/OpenChatrooms.js';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
<div className="container-fluid mt-5">
  <div className="row">
    <div className="col-lg-3"></div>
    <div className="room">
    <h1 className="heading">Create A Room</h1>
      <form>
        <div className="form-group">
          <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Room Name" onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Room Number" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/room?name=${name}&room=${room}`}>
        <center><button type="submit" className="btn purple">Create</button></center>
        </Link>
      </form>
     </div> 
    <div className="col-lg-3"></div>
  </div>

</div>
  );
}
