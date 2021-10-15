import React from 'react';
import ArticleTitle from './ArticleTitle';
import "./Body.css";
import ArticleContent from './ArticleContent';
import SideBar from './SideBar';

function Body() {
    return (
        <div className="body_container">
            <div className="sidebar_container">
            <SideBar />            
            </div>

            <div className="content_container">
                <div className="body_content">
                    <ArticleTitle title={"Article Title"} />

                    <ArticleContent />
                </div>
            </div>
        </div>
        
    )
}

export default Body;
