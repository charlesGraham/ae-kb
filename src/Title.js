import React from 'react';
import "./Title.css";

function Title(props) {
    return (
        <div className="header_title">
            <h1>{props.name}</h1>
        </div>
    )
}

export default Title
