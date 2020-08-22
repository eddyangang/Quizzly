import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Test from "./Pages/Test"
import { AuthProvider } from "./utils/AuthContext"
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
