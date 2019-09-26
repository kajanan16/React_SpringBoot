import React, { Component } from "react";

class ErrorComponent extends Component {
  
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
        <h1>Error Occured Please! Contact Us</h1>
      </div>
    );
  }
}

export default ErrorComponent;
