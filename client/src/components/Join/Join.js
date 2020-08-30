import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import './Join.css';
import { AuthContext } from "../../utils/AuthContext"
import API from "../../utils/API"
import QuizletForm from "../QuizletForm/QuizletForm"
export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [existingRooms, setExistingRooms] = useState([])
  const { currentUser } = useContext(AuthContext)
  useEffect(() => {
    API.getRooms().then(data => {
      setExistingRooms(data.data)
    }).catch(err => {
      throw err
    })
  }, [])

  // useEffect(() => {
  //   const url = "https://quizlet.com/8775815/software-engineering-vocabulary-flash-cards/"

  //   API.quizletScrap(url).then(data => {
  //     console.log(data);
  //   })
  // }, [])

  return (


    <div className="container-fluid">
      <QuizletForm/>
      <div className="row">
        <div className="col-sm-6"><h1 className="heading">Open Rooms</h1>
          {existingRooms.length > 0 ? (existingRooms.map((room, i) => (
            <div className="d-flex" key={i}>
              <h4>{room.roomName}</h4>
              <hr />
              <Link to={`/room?name=${currentUser.displayName}&room=${room.roomName}`}>
                <button type="submit" className="btn purple" disabled={room.currentWord !== null && room.currentWord.word ? true : false } >Join</button>
              </Link>
            </div>
          ))) : <h1>No Rooms</h1>}
        </div>

        <div className="col-sm-1"></div>

        <div className="col-sm-4">
          <h1 className="heading">Create a Room</h1>
          <form>
            <div className="form-group">
              <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onChange={(event) => setName(event.target.value)} />
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
