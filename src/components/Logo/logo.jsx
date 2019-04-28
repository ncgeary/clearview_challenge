import React, { Component } from 'react'
import {connect} from 'react-redux';
import newLogo from '../../actions/newLogo';


 class Logo extends Component {
    
  componentWillMount(){
    this.props.newLogo();
  }
  


  render() {
      const currentLogo = this.props.logo

    return (
        <img
            src={currentLogo}
            alt="issue"/>
        
        
    )
  }
}

const mapStateToProps = state => ({
  logo: state.newLogo.logo
})

export default connect(mapStateToProps,{newLogo})(Logo);