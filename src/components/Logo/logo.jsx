import React, { Component } from 'react'
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';



 class Logo extends Component {
   coolLogo(){
     return this.props.mainLogo.map((logoURL)=>{
       return(
        //  <div key={logoURL.id}>{logoURL.url}</div>
         <img
           key={logoURL.id}
           src={logoURL.url}
            alt="issue"/>
       )
      
     })
   }


  render() {
    
    const logotag = this.coolLogo();

    return (
        <div>
          {logotag}
        </div>
     
    )
  }
}
function mapStateToProps(state){
  return{
    mainLogo: state.mainLogo
  };
}

export default connect(mapStateToProps)(Logo);