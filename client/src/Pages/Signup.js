import React, { useCallback } from "react";
import { withRouter } from "react-router";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebase , uiConfig} from "../firebaseConfig"
import InForm from "../components/InForm/InForm";
import './Signup.css';

// import { auth } from "firebase";
// import Home from "./Home";
// import Login from "./Login";
// function Signup() {
//   return (
//     <div>
//       <h1>Landing / Signup Page</h1>
//       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
//     </div>
//   );
// }


  
const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);



  return (

    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="jumbotron">


              <h1>Sign Up</h1>
              <InForm onSubmit={handleSignUp} />
              <br />
              <center><a href="/login">Already Have An Account?</a></center>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>

      </div>
    </div>

    // <div>
    //   <h1>Sign up</h1>
    //   <form onSubmit={handleSignUp}>
    //     <label>
    //       Email
    //       <input name="email" type="email" placeholder="Email" />
    //     </label>
    //     <label>
    //       Password
    //       <input name="password" type="password" placeholder="Password" />
    //     </label>
    //     <button type="submit">Sign Up</button>
    //   </form>

    //   <a href="/login">Already Have an Account?</a>
    //   <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    // </div>
  );
};

export default withRouter(SignUp);
