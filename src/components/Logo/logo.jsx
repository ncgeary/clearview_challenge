import React, { Component } from 'react'
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';



 class Logo extends Component {



  render() {
    const currentLogo = 'https://s3.amazonaws.com/images.clearviewsocial/CVSLogo.FullColor.RGB+(2).png'

    return (
        <img
            src={currentLogo}
            alt="issue"/>
        
        
    )
  }
}

export default Logo;