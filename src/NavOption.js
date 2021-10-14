import React from 'react';
import "./NavOption.css";

function NavOption(props) {
    return (
        <div>
            <h3 className="header_navLink">{props.option}</h3>
        </div>
    )
}

export default NavOption;
