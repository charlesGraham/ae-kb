import React from 'react';
import "./Nav.css";

function Nav() {
    return (
        <div className="header_nav">
            <ul>
                <li>Login</li>
                <li>Topics</li>
                <li>Request Article</li>
            </ul>
            <input type="text" placeholder="Search" />
            <button>Go</button>
        </div>
    )
}

export default Nav;
