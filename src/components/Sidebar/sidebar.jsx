import React, { Component } from 'react';
import './sidebar.css';

class SideBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    
                    <li><a href="/"><i className="far fa-newspaper"></i>Content</a></li>
                    <li><a href="/"><i className="far fa-calendar-check"></i>Calendar</a></li>
                    <li><a href="/"><i className="fas fa-poll"></i>Results</a></li>
                    <li><a href="/"><i className="far fa-question-circle"></i>Help</a></li>
                    <hr />
                    <li><a href="/" className="extrapadding">Admin</a></li>
                    <li><a href="/" className="extrapadding">Queues</a></li>
                    <li><a href="/"><i className="far fa-thumbs-up"></i>Engagement</a></li>
                    <li><a href="/"><i className="fas fa-cog"></i>Settings</a></li>
                    <li><a href="/" className="extrapadding">Users</a></li>
                </ul>
            </nav>

        )
    }
}


export default SideBar;