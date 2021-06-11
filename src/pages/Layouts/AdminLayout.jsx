import { LeftOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Affix, Dropdown, Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import IconButton from '../../components/IconButton/IconButton';
import Searchbar from '../../components/Searchbar/Searchbar';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Sidebar from '../../components/Sidebar/Sidebar';
import admin_sidebar_min from '../../mockData/admin_sidebar_min';
import AdminLayoutStyle from './AdminLayoutStyle';

const menu = (
    <Menu >
      <Menu.Item key="1" >
        <Link to = "/admin-dashboard/settings" > Settings <SettingOutlined /> </Link>
      </Menu.Item>

      <Menu.Item key="2" >
        <Link to = "/sign-in" > Logout <LogoutOutlined /> </Link>
      </Menu.Item>
    </Menu>
  );

const AdminLayout = (props) => {

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <AdminLayoutStyle>
            <Affix offsetTop = {0} >
                <Searchbar color = "#6f5de3" textColor = "white" >
                    <Dropdown overlay = {menu} className = "profile" >
                        <Avatar icon = {<img src = "/images/color-icons/settings 4.png" />} />
                    </Dropdown>
                </Searchbar>
            </Affix>
            <div className="content">
                <Affix offsetTop = {80} >
                    <Sidebar values = {admin_sidebar_min} size = "small" />
                </Affix>
                <div className="content-right">
                    {props.children}
                </div>
            </div>
        </AdminLayoutStyle>
    )
}

export default AdminLayout;