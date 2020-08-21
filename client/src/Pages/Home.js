import React from "react";
import Room from "../components/Room/Room";
import Join from "../components/Join/Join";
import { firebase } from "../firebaseConfig";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <>

      <Navbar onClick={logout} />
      <div className="container-fluid mt-5">
        <div className="row">
            <Router>
              <Route exact path="/" component={Join} />
              <Route path="/room" component={Room} />
            </Router>
        </div>

      </div>
    </>
  );
};

export default Home;
