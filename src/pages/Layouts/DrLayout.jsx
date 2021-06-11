import { DownOutlined, LogoutOutlined, ProfileOutlined, SettingOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Tooltip } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import DrLayoutStyle from './DrLayoutStyle'
import doc_sidebar_values from "../../mockData/doc_sidebar_values";
import { Link, useLocation } from 'react-router-dom'

const menu = (
    <Menu>
        <Menu.Item key = "1" >
            <ProfileOutlined/> Profile
        </Menu.Item>
        <Menu.Item key = "2" >
            <SettingOutlined/> Settings
        </Menu.Item>
        <Menu.Item key = "3" >
            <LogoutOutlined/> Logout
        </Menu.Item>
    </Menu>
)

const DrLayout = (props) => {
    
    const {pathname} = useLocation();
    
    return (
        <DrLayoutStyle>
            <div className="layout">
                <div className="top-nav">
                    <div className="logo">
                        <img src="/images/logo.png" alt="SEHAT Logo" />
                    </div>
                    <div className="options-menu">
                        <Dropdown overlay = {menu} placement = "bottomCenter" >
                            <div>
                            <Avatar icon = {<img src ="/images/color-icons/doctor.png" />} />
                            <span>Hello, Doctor! </span>
                            </div>
                        </Dropdown>
                    </div>
                </div>
                <div className="body">
                    <div className="sidebar">
                        <ul>
                        {
                            doc_sidebar_values.map( (item, index) => {
                                return (
                                    <Link to = {item.url} isActive = {pathname === item.url}   >
                                        <li>
                                            <Tooltip title = {item.tooltip} placement = "right" >
                                                <img src= {item.icon} alt="Menu Item" />
                                                <span> {item.title} </span>
                                            </Tooltip>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                        </ul>
                    </div>
                    <div className="content">
                        {props.children}
                    </div>
                </div>
            </div>
        </DrLayoutStyle>
    )
}

export default DrLayout
