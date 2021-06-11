import React, { useState } from 'react'
import MyLayoutStyle from './MyLayoutStyle';
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const MyLayout = () => {

    const [toggleOpen, setToggleOpen] = useState(false);


    return (
        <MyLayoutStyle>
            {
                toggleOpen ?
                <div className = "sidenav">
                <span className = "closebtn" onClick = { () => {setToggleOpen(false)} } > <CloseOutlined/> </span>
                <span className = "sidebar-item" > About </span>
                <span className = "sidebar-item" > Services </span>
                <span className = "sidebar-item" > Clients </span>
                <span className = "sidebar-item" > Contact </span>
            </div>
            : <div className = "toggle-btn" onClick = { () => {setToggleOpen(true)} } > <MenuOutlined /> </div>
            }
        </MyLayoutStyle>
    )
}

export default MyLayout;