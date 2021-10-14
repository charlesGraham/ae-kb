import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header_container">
            <div className="header_title">
                <h1>AgentElite</h1>
                <h3>Knowledgebase</h3>
            </div>
           

            { /* Nav */ }
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
                <li>item 5</li>
            </ul>
        </div>
    )
}

export default Header;
