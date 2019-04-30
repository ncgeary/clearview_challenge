import React, { Component } from 'react'
import {connect} from 'react-redux';
import './logo.css';
// import PropTypes from 'prop-types';



 class Logo extends Component {
   coolLogo(){
       return(
         <img
           key={this.props.newLogo.id}
           src={this.props.newLogo.url}
            alt="issue"/>
       )
     }

  render() {
    
    const logotag = this.coolLogo();

    return (
        <div>
          <h3>Preview:{logotag}</h3>
        </div>
     
    )
  }
}
function mapStateToProps(state){
  return{
    newLogo: state.newLogo
  };
}

export default connect(mapStateToProps)(Logo);