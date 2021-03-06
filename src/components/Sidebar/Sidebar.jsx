import React, { useState } from 'react'
import SidebarStyle from './SidebarStyle';

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Sidebar = (props) => {

    return (
        <SidebarStyle size = {props.size} >
            <div className = "sidebar" >
                
                <ul>
                    {
                        props.values.map((item, index) => {
                            return (
                                <Link>
                                        {
                                            <Tooltip placement = "right" title = {item.tooltip} >
                                                <li onClick={ () => props.history.push(item.url) } > 
                                                    <img src= {item.icon} alt=""/>
                                                    { item.title }
                                                </li>
                                            </Tooltip>
                                        }
                                </Link>
                            );
                        } )
                    }
                </ul>
            </div>
        </SidebarStyle>
    )
}

export default withRouter(Sidebar);