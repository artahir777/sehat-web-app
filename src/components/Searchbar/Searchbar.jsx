import React from 'react';

import { SearchOutlined } from '@ant-design/icons';
import SearchbarStyle from './SearchbarStyle';
import { Link } from 'react-router-dom';



const Searchbar = (props) => {
    return (
      <SearchbarStyle color = {props.color} textColor = {props.textColor} >
        <div className="main">            
            <div className="logo">
                <img src="/images/logo.png" alt="Logo"/>
            </div>
            
            <div className="searchbar">
                <div className="inputField">
                    <input type="text" />
                </div>
                <button className = "search-btn" > <SearchOutlined/> </button>
            </div>
            
            <div className="avatar">
                {props.children}
            </div>
        </div>
      </SearchbarStyle>
    )
}

export default Searchbar;