import React, { Component } from 'react'
import './logo.css';




 class Logo extends Component {
   
  render() {
    return (
      <img
        className="logotag"
        src={'https://s3.amazonaws.com/images.clearviewsocial/CVSLogo.FullColor.RGB+(2).png'}
        alt="issue" />
     
    )
  }
}

export default (Logo);