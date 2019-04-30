import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {newLogo} from '../../actions/newLogo';

class DropZone extends Component {

    state={
        imgfile:[],
        url:[]
    }

    newLogo(){
        var file = this.state.imgfile;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            return (
                this.setState({
                    url: reader.result
                })
            )
        };
        this.props.newLogo(this.state.url)
    }

    previewLogo() {
        return (
            <img
                src={this.state.url}
                alt="" />
        )
    }

    render() {
        
        const previewLogo = this.previewLogo();

        return (
            <div>
                <h3>Preview:{previewLogo}</h3>
                
                <input 
                    type="file" 
                    onChange={event=> this.setState({imgfile: event.target.files[0]})} />

                <button onClick={() => this.newLogo()}>Change Logo</button>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({newLogo},dispatch);
}


export default connect(null, matchDispatchToProps)(DropZone);