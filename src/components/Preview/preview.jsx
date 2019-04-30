import React, { Component } from 'react'
import { connect } from 'react-redux';
import './preview.css';
// import PropTypes from 'prop-types';



class Preview extends Component {
    logoPreview() {
        return (
            <img
                key={this.props.newLogo.id}
                src={this.props.newLogo.url}
                alt="" />
        )
    }

    render() {

        const preview = this.logoPreview();

        return (
            <div className="preview"> 
                
                <div className="previewDark">
                    <h3>Preview on a Dark Backgound</h3>
                    {preview}
                </div>
                
                <div className="previewLight">
                    <h3>Preview on a Light Backgound</h3>
                    {preview}
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        newLogo: state.newLogo
    };
}

export default connect(mapStateToProps)(Preview);