import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {newLogo} from '../../actions/newLogo';


class DropZone extends Component {

    
    fileChangedHandler = (event) => {
        // console.log(event.target.files[0])
        if (window.FileReader) {
            var file = event.target.files[0];
            var reader = new FileReader();
            if (file && file.type.match('image.*')) {
                reader.readAsDataURL(file);
                
            } else {
                console.log("nope")
            }
            reader.onloadend = (base64data)=> {
                return(
                     base64data = reader.result
                );

            };
        }
        
    }

    fileUploadHandler = () =>{
        //where redux will change the state of logo to this address
        this.props.newLogo();
        
    }

   

    render() {

        
        // const base64data = this.fileChangedHandler();
        
        return (
            <div>
                <form>

                    <input type="file" onChange={this.fileChangedHandler} />

                    <button onClick={this.fileUploadHandler.bind(this)}>Change Logo</button>

                    {/* <div>{base64data}</div> */}

                </form>
   
            </div>
            

        )
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        newLogo:newLogo,dispatch
    })
}


export default connect(matchDispatchToProps)(DropZone);