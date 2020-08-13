import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { firebase, uiConfig } from "../firebaseConfig"
import { AuthContext } from "../utils/AuthContext.js";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
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
        <h1>Log in</h1>
        <form onSubmit={handleLogin}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Log in</button>
        </form>
        <a href="/signup">Create a new Account</a>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  };
  
  export default withRouter(Login);