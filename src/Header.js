import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="container">
            <div className="header_contents">
                <div className="header_title">
                    <h1>AgentElite, Inc</h1>
                </div>

                <div className="header_nav">
                    <ul>
                        <li>Login</li>
                        <li>Topics</li>
                        <li>Request Article</li>
                    </ul>
                    <input type="text" placeholder="Search" />
                    <button>Go</button>
                </div>
            </div>
        </div>
    )
}

export default Header;
