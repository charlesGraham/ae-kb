import React from 'react'
import SidebarOption from './SidebarOption';

function SideBar() {
    return (
        <div>
            <div className="body_sidebar">
                <h3>Articles</h3>
                <hr />
                <SidebarOption title={"Home"} />
                <SidebarOption title={"Mortgage"} />
                <SidebarOption title={"Retention Training"} />
                <SidebarOption title={"Upsell Training"} />
                <SidebarOption title={"Local Presence"} />
                <SidebarOption title={"SOPs"} />
            </div>
        </div>
    )
}

export default SideBar
