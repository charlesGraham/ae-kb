import React from 'react';
import "./Header.css";
import Nav from './Nav';
import Title from './Title';

function Header() {
    return (
        <div className="container">
            <div className="header_contents">
                <Title name={"AgentElite"} />

                <Nav />
            </div>
        </div>
    )
}

export default Header;
