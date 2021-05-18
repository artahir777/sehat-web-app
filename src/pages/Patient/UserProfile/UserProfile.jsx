import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import UserProfileStyle from './UserProfileStyle';
import profile_sidebar from "../../../mockData/profile_sidebar";
import { Button } from 'antd';
import { ArrowLeftOutlined, EditTwoTone, SettingOutlined } from '@ant-design/icons';

const UserProfile = (props) => {

    const handleBackButton = () => {
        props.history.push("/user-dashboard");
    }

    return (
        <SidebarLayout values = {profile_sidebar} home = "/user-dashboard" >
            <UserProfileStyle>
                <div className="profile">
                    <Button className = "back-button" onClick = {handleBackButton} >
                         <ArrowLeftOutlined color = "inherit" /> Back to main </Button>
                    <div className="profile-details">
                        <div className="profile-pic">
                            <img src="/images/color-icons/person.png" alt=""/>
                        </div>
                        <h3 className = "name" > John Doe </h3>
                        <div className="action-buttons">
                            <Button> <EditTwoTone/> Edit My Info </Button>
                            <Button> <SettingOutlined/> Profile Settings </Button>        
                        </div>    
                        
                    </div>
                </div>
            </UserProfileStyle>
        </SidebarLayout>
    )
}

export default UserProfile;