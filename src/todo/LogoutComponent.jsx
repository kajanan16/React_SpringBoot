import React, { Component } from "react";

class LogoutComponent extends Component {
  render() {
    const imgMyimageexample = require('../world.png');
    const back = {
      width: '100%',
      height: '600px',
      backgroundImage: `url(${imgMyimageexample})`,
      backgroundSize: 'cover'  
      
    };
    return (
      <div style={back}>
        <h1>You are logged Out</h1>
        <div className="container">Thank You For Using Our Application</div>
      </div>
    );
  }
}
export default LogoutComponent;
