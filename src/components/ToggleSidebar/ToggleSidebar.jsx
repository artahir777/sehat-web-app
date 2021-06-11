import React, { useState } from 'react'
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import user_sidebar from "../../mockData/user_sidebar";
import ToggleSidebarStyle from './ToggleSidebarStyle'
import { Tooltip } from 'antd';
import { Link, withRouter } from 'react-router-dom';


const MenuItems = (props) => {
    return (
        <div className = "sidebar-items" >
        {
            props.values.map((item, index) => {
                return (
                    
                            <Link to = {item.url} >
                                <Tooltip placement = "right" title = {item.tooltip} >
                                    <span className = "sidebar-item" > 
                                        <img src= {item.icon} alt=""/>
                                        { item.title }
                                    </span>
                                </Tooltip>
                            </Link>
                    
                );
            })
        }
        </div>
    )
}

const ToggleSidebar = (props) => {
    
    const [toggleOpen, setToggleOpen] = useState(false);

    return (
        <ToggleSidebarStyle>
        {
                toggleOpen ?
                <div className = "sidenav">
                
                <span className = "closebtn" onClick = { () => {setToggleOpen(false)} } > <CloseOutlined/> </span>
                
                <MenuItems values = {props.values} />
                
            </div>
            : <div className = "toggle-btn" onClick = { () => {setToggleOpen(true)} } > <MenuOutlined /> </div>
        }
        </ToggleSidebarStyle>
    )
}

export default withRouter(ToggleSidebar);
// export default ToggleSidebar;
