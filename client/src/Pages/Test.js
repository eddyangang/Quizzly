import React from 'react';
import { withRouter, Redirect } from "react-router";
import { firebase, uiConfig } from "../firebaseConfig"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const Test = () => (
  <div>
      <h1>This is a test to see if something will render</h1>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  </div>
);

export default withRouter(Test);