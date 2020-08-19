import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (

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
        </Link>
      </form>

      </div>
  );
}
