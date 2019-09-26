import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import AutenticationService from "./AuthenticationService.js";

class Header extends Component {
  render() {
    const mylogs = AutenticationService.isUserLogin();
    let styles = {
      color: "white"
    };
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a className="navbar-brand" style={styles}>
              Kajanan
            </a>
          </div>
          <ul className="navbar-nav">
            {mylogs && (
              <li>
                <Link className="nav-link" style={styles} to="/welcome/kajanan">
                  Home
                </Link>
              </li>
            )}
            {mylogs && (
              <li>
                <Link className="nav-link" style={styles} to="/todos">
                  Todos
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ml-auto">
            {!mylogs && (
              <li>
                <Link className="nav-link" style={styles} to="/login">
                  Login
                </Link>
              </li>
            )}
            {mylogs && (
              <li>
                <Link
                  className="nav-link"
                  style={styles}
                  to="/logout"
                  onClick={AutenticationService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
