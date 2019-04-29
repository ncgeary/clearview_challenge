import React, { Component } from 'react';
import './sidebar.css';

class SideBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    
                    <li><a href="/">Content</a></li>
                    <li><a href="/">Results</a></li>
                    <li><a href="/">Help</a></li>
                    <hr />
                    <li><a href="/">Admin</a></li>
                    <li><a href="/">Queues</a></li>
                    <li><a href="/">Engagement</a></li>
                    <li><a href="/">Settings</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </nav>

        )
    }
}


export default SideBar;