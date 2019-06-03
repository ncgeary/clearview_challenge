import React, { Component } from 'react'
import './logo.css';


 class Logo extends Component {
   
  render() {
    return (
      <img
        className="logotag"
        src={require('./img/logo.png')}
        alt="issue" />
     
    )
  }
}

export default (Logo);