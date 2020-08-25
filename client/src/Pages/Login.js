import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { firebase, uiConfig } from "../firebaseConfig"
import { AuthContext } from "../utils/AuthContext.js";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import InForm from "../components/InForm/InForm";
import './Signup.css';

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
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="jumbotron">


              <h1 className="text-center">Log In</h1>
              <InForm onSubmit={handleLogin} />
              {/* <form onSubmit={handleLogin}>
<label>
Email
<input name="email" type="email" placeholder="Email" />
</label>
<label>
Password
<input name="password" type="password" placeholder="Password" />
</label>
<button type="submit">Log in</button>
</form> */}
              <br />
              <center><a href="/signup">Create A New Account</a></center>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>

      </div>
    </div>
  );
};

export default withRouter(Login);