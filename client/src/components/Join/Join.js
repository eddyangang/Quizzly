import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
<<<<<<< HEAD
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Create a Room</h1>
        <div>
          <input placeholder="Room Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room #" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/room?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Join</button>
=======

    <div className="text-center mt-5">
        <h1 className="heading">Join</h1>
      <form>
        <div className="form-group">
          <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name" onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="room" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/room?name=${name}&room=${room}`}>
        <button type="submit" className="btn purple">Sign-in</button>
>>>>>>> 4b98287190af47669261c60ca787d91296c25990
        </Link>
      </form>

      </div>
  );
}
