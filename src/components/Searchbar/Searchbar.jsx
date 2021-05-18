import { Input, Dropdown, Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';

import { LogoutOutlined, SearchOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import SearchbarStyle from './SearchbarStyle';
import { Link } from 'react-router-dom';

const { Search } = Input;

const Searchbar = (props) => {
    return (
      <SearchbarStyle >
        <div className="main">
            
            <div className="logo">
                <img src="/images/logo.png" alt="Logo"/>
            </div>
            
            <div className="searchbar">
                <Search placeholder="Search" allowClear enterButton = {<SearchOutlined/>} />
            </div>
            
            <div className="avatar">
                {props.children}
            </div>
        </div>
      </SearchbarStyle>
    )
}

export default Searchbar;