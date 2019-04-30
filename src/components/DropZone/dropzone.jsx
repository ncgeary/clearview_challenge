import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {newLogo} from '../../actions/newLogo';

import './dropzone.css'

class DropZone extends Component {
    //setting inital state for this component
    state={
        imgfile:[],
        url:[]
    }

    //creating the new logo
    newLogo(){
        var file = this.state.imgfile;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            return (
                this.setState({
                    //image src in base64 string
                    url: reader.result
                })
            )
        };
        // sending the current state (after the image has been uploaded) to the action
        this.props.newLogo(this.state.url)
    }

    render() {
        
        return (
            <div className="dropzoner">
                <h2>Upload New Logo</h2>

                <input 
                    type="file" 
                    onChange={event=> this.setState({imgfile: event.target.files[0]})} />

                <button onClick={() => this.newLogo()}>Upload</button>
            </div>
        )
    }
}

//bringing in action
function matchDispatchToProps(dispatch){
    return bindActionCreators({newLogo},dispatch);
}


export default connect(null, matchDispatchToProps)(DropZone);