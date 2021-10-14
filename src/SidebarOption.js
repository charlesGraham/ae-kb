import React from 'react';
import "./SidebarOption.css";

function SidebarOption(props) {
    return (
        <div className="body_sidebar">
            <p>{props.title}</p>
        </div>
    )
}

export default SidebarOption;
