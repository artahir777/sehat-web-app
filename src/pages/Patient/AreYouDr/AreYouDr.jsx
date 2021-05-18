import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import AreYouDrStyle from './AurYouDrStyle';
import user_sidebar from "../../../mockData/user_sidebar";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const AreYouDr = (props) => {
    
    const handleBackButton = () => {
        props.history.push("/user-dashboard");
    }
    
    return (
        <SidebarLayout values = {user_sidebar} >
            <AreYouDrStyle>
                <div className="doc-form">
                <Button className = "back-button" onClick = {handleBackButton} >
                    <ArrowLeftOutlined color = "inherit" /> Back to main </Button>
                </div>
            </AreYouDrStyle>
        </SidebarLayout>
    )
}

export default AreYouDr;