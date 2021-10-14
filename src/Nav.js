import React from 'react';
import "./Nav.css";
import NavOption from './NavOption';

function Nav() {
    return (
        <div className="header_nav">
            <div className="header_navOptions">
                <NavOption option={"Login"} />
                <NavOption option={"Topics"} />
                <NavOption option={"Request Article"} />
            </div>
            
            <input type="text" placeholder="Search" />
            <button>Go</button>
        </div>
    )
}

export default Nav;
