import React from 'react';
import ArticleTitle from './ArticleTitle';
import "./Body.css";
import BodyContent from './BodyContent';
import SideBar from './SideBar';

function Body() {
    return (
        <div className="body_container">
            <SideBar />            

            <div className="body_content">
                <ArticleTitle title={"Article Title"} />
                <hr />
                <BodyContent />
            </div>
        </div>
    )
}

export default Body;
