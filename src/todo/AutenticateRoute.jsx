import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AutenticationService from "./AuthenticationService.js";

class AutenticateRoute extends Component {
  render() {
    if (AutenticationService.isUserLogin()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default AutenticateRoute;
