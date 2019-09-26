import React, { Component } from "react";
import { Link } from "react-router-dom";
import backendapi from "../api/todo/backendapi.js";
import Background from "./laptop.jpg";
import "./welcome.css";

class WelcomeComponent extends Component {
  constructor() {
    super();
    this.retriveMessage = this.retriveMessage.bind(this);
    this.handleSuccessMessage = this.handleSuccessMessage.bind(this);
    this.handleErrorMessage = this.handleErrorMessage.bind(this);
    this.state = {
      welcomemessage: ""
    };
  }

  render() {
  
    const imgMyimageexample = require('../laptop.jpg');
const divStyle = {
  width: '100%',
  height: '600px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover'  
  
};

    return (
      <div  style={divStyle} className="set">
        <h1>Welcome To Todo Page</h1>
        <div className="container">
          <h1>Enjoy {this.props.match.params.name}</h1>
        </div>
        <div className="container">
          <button className="btn btn-success" onClick={this.retriveMessage}>
            Click here
          </button>
        </div>
        <div className="container">
          <h3>{this.state.welcomemessage}</h3>
        </div>
        
      </div>
    );
  }

  retriveMessage() {
    // backendapi
    //   .hellowordservice()
    //   .then(response => this.handleSuccessMessage(response));

    backendapi
      .hellowordPathservice(this.props.match.params.name)
      .then(response => this.handleSuccessMessage(response))
      .catch(error => this.handleErrorMessage(error));
  }

  handleSuccessMessage(response) {
    this.setState({
      welcomemessage: response.data.name
    });
  }

  handleErrorMessage(error) {
    console.log(error.response);
    this.setState({
      welcomemessage: error.response.data.message
    });
  }
}

export default WelcomeComponent;
