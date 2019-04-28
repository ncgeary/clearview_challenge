import React, { Component } from 'react';


class DropZone extends Component {

    state = {
        logo: null
    }

    fileChangedHandler = (event) => {
        this.setState({
            logo: event.target.files[0]
        })
        
    }

    fileUploadHandler = () =>{
        //where redux will change the state of logo to this address
        

    }



    render() {
        return (
            <div>
                <input type="file" onChange={this.fileChangedHandler} />
                <button onClick={this.fileUploadHandler}>Change Logo</button>

            </div>
            
        )
    }
}

export default DropZone;