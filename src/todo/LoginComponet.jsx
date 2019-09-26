import React, { Component } from "react";
import AutenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "kajanan",
      password: "",
      hasLoginFailed: false,
      successfullLogin: false
    };
    // this.handleUserNameChange = this.handleUserNameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.passwordCheck = this.passwordCheck.bind(this);
  }

  //   handleUserNameChange(event) {
  //     console.log(event.target.value);
  //     this.setState({
  //       username: event.target.value
  //     });
  //   }

  //   handlePasswordChange(event) {
  //     console.log(event.target.value);
  //     this.setState({
  //       password: event.target.value
  //     });
  //   }

  //Instead creating two method we can go with the one method

  handlechange(event) {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  passwordCheck() {
    if (this.state.username === "kajanan" && this.state.password === "1234") {
      AutenticationService.registerSuccessfullLogin(
        this.state.username,
        this.state.password
      );
      //Redirecting the path to `/welcome`
      this.props.history.push(`/welcome/${this.state.username}`);
      // this.setState({
      //   successfullLogin: true,
      //   hasLoginFailed: false
      // });
    } else {
      this.setState({
        successfullLogin: false,
        hasLoginFailed: true
      });
    }
  }

  render() {
    const imgMyimageexample = require('../world.png');
    const back = {
      width: '100%',
      height: '600px',
      backgroundImage: `url(${imgMyimageexample})`,
      backgroundSize: 'cover'  
      
    };
    return (
      < div style={back}>
        <h1>Login</h1>
        <div className="container">
          {/*<InvalidCredentials login={this.state.hasLoginFailed} />
      <SuccessMessage login={this.state.successfullLogin}/>*/}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">
              <h1>Error Credentials</h1>
            </div>
          )}
          {this.state.successfullLogin && (
            <div>
              <h1>You Have Logined SuccessFully Logined</h1>
            </div>
          )}

          <table className="tab"
            style={{
              border: "0",
              width: "480px",
              cellpadding: "0",
              cellspacing: "0",
              align: "center",
            
            }}
          >
            <tr>
              <td align="center">UserName :</td>
              <td>
                {" "}
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handlechange}
                />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td align="center">Password :</td>
              <td>
              {" "}
                <input
                  type="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handlechange}
                />
              </td>
            </tr>
            <tr>
              <td align="center">
                <button
                  className="btn btn-success"
                  onClick={this.passwordCheck}
                >
                  Submit
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
