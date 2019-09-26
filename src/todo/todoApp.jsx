import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./HeaderComponent";
import AutenticateRoute from "./AutenticateRoute";
import LoginComponent from "./LoginComponet";
import TodoComponent from "./TodoComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorMessageComponent";
import TodoUpdate from "./TodoUpdateComponent";

class Mytodo extends Component {
  render() {
    return (
      <div className="myTodo">
        <Router>
          <>
            <Header />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <AutenticateRoute
                path="/welcome/:name"
                component={WelcomeComponent}
              />
              <AutenticateRoute path="/todos/:id" component={TodoUpdate} />
              <AutenticateRoute path="/todos" component={TodoComponent} />
              <Route path="/logout" component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}

export default Mytodo;
