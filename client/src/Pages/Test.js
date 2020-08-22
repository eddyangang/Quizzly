import React from 'react';
import { withRouter, Redirect } from "react-router";
import { firebase, uiConfig } from "../firebaseConfig"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import InForm from "../components/InForm/InForm";


const Test = () => (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="jumbotron">
              <h1 className="text-center">Log In</h1>
              <br />
              {/* <center><a href="/signup">Create A New Account</a></center> */}
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
);

export default withRouter(Test);