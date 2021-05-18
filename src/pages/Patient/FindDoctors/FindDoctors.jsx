import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import FindDoctorsStyle from './FindDoctorsStyle';
import user_sidebar from "../../../mockData/user_sidebar";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const FindDoctors = (props) => {

    const handleBackButton = () => {
        props.history.push("/user-dashboard");
    }

    return (
        <SidebarLayout values = {user_sidebar} >
            <FindDoctorsStyle>
                <div className="find-doctors">
                <Button className = "back-button" onClick = {handleBackButton} >
                    <ArrowLeftOutlined color = "inherit" /> Back to main </Button>
                </div>
            </FindDoctorsStyle>
        </SidebarLayout>
    )
}

export default FindDoctors;