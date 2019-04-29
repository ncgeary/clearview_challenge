import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {newLogo} from '../../actions/newLogo';


class DropZone extends Component {

    

    fileChangedHandler = (event) => {
        this.setState({ logo:event.target.files[0] });
    }

    fileUploadHandler = (event) =>{
        //where redux will change the state of logo to this address
        const logo = this.state.logo
        this.props.newLogo(logo)
    }



    render() {
        return (
            <form onSubmit={this.fileUploadHandler}>

                <input type="file" onChange={this.fileChangedHandler}  />
                <button onClick={this.fileUploadHandler}>Change Logo</button>

            </form>
            
        )
    }
}

DropZone.propTypes = {
    newLogo: PropTypes.func.isRequired,
}


export default connect(null, { newLogo })(DropZone);