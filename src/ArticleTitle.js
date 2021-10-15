import React from 'react';
import "./ArticleTitle.css";

function ArticleTitle(props) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

export default ArticleTitle;
