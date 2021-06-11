import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react'
import { Link } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';
import ToggleSidebar from '../../components/ToggleSidebar/ToggleSidebar';
import SidebarLayoutStyle from './SidebarLayoutStyle';

const menu = (
    <Menu >
      <Menu.Item key="1" >
        <Link to = "/user-profile" > Profile <UserOutlined /> </Link>
      </Menu.Item>
      
      <Menu.Item key="2" >
        <Link to = "/user-settings" > Settings <SettingOutlined /> </Link>
      </Menu.Item>

      <Menu.Item key="3" >
        <Link to = "/sign-in" > Logout <LogoutOutlined /> </Link>
      </Menu.Item>
    </Menu>
  );

const SidebarLayout = (props) => {
    return (
        <SidebarLayoutStyle>
            <div className = "container" > 
              <div className = "top-navbar" >
                  
                  <ToggleSidebar className = "sidebar" values = {props.values} />
                  
                  <Searchbar profilePic = "/images/color-icons/person.png" username = "John Doe" >
                    <Dropdown overlay={menu} >
                      <div>
                        <Avatar icon = {<img src = "/images/color-icons/person.png" />} />
                        <span> Hello, John! </span>
                      </div>
                    </Dropdown>
                  </Searchbar>
                </div>
                <div className="content">
                    
                    {props.children}
                </div>
            </div>
        </SidebarLayoutStyle>
    )
}

export default SidebarLayout;