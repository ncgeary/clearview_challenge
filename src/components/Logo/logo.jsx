import React, { Component } from 'react'
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';



 class Logo extends Component {
   coolLogo(){
     return Object.keys(this.props.newLogo).map(()=>{
       return(
        //  <div key={logoURL.id}>{logoURL.url}</div>
         console.log(this.props.newLogo),
         <img
           key={this.props.newLogo.id}
           src={this.props.newLogo.url}
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
    newLogo: state.newLogo
  };
}

export default connect(mapStateToProps)(Logo);