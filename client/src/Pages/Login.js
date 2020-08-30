import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import { firebase, uiConfig } from "../firebaseConfig"
import { AuthContext } from "../utils/AuthContext.js";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import InForm from "../components/InForm/InForm";
import './Login.css';

const Login = ({ history }) => {
  const handleLogin = useCallback(

    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (

    <div>
      <div className="container-fluid mt-4">
        <div className="row justify-content-center">
          <div>
            <img src="/img/Logo.png" alt="logo" className="logoLogin mb-4"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <h1 className="text-center">Log In</h1>
            <InForm onSubmit={handleLogin} />
            <br />
            <center><Link to={"/signup"}>Create A New Account</Link></center>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
          <div className="col-lg-3"></div>
        </div>

      </div>
    </div>
  );
};

export default withRouter(Login);