import React from 'react';
import Room from "../components/Room/Room";
import Join from "../components/Join/Join"
import { firebase } from "../firebaseConfig"
import { BrowserRouter as Router, Route } from "react-router-dom";


const Home = () => {

  const logout = () => {
    firebase.auth().signOut()
  }

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={logout}>Logout</button>
      <Router>
        <Route exact path="/" component={Join} />
        <Route path="/room" component={Room} />
      </Router>
    </>
  );
}

export default Home;
