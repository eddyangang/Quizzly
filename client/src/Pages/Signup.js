import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebase , uiConfig} from "../firebaseConfig"
import SignupForm from "../components/SignupForm/SignupForm";
import './Signup.css';
// import {AuthContext} from "../../utils/AuthContext"

const SignUp = ({ history }) => {
  // const { currentUser } = useContext(AuthContext)
  const handleSignUp = async event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        await firebase.auth().currentUser.updateProfile({
          displayName: name.value
        })
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

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
              <h1>Sign Up</h1>
              <SignupForm onSubmit={handleSignUp} />
              <br />
              <center><Link to={"/login"}>Already Have an Account</Link></center>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
          <div className="col-lg-3"></div>
        </div>

      </div>
    </div>
  );
};

export default withRouter(SignUp);
