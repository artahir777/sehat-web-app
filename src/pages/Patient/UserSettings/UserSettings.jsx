import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import UserSettingsStyle from './UserSettingsStyle';
import profile_sidebar from "../../../mockData/profile_sidebar";
import { Button, Collapse } from 'antd';
import PasswordForm from '../../../components/PasswordForm/PasswordForm';
import { ArrowLeftOutlined } from '@ant-design/icons';

const {Panel} = Collapse;

const UserSettings = (props) => {
    
    const handleBackButton = () => {
        props.history.push("/user-profile");
    }

    return (
        <SidebarLayout values = {profile_sidebar} >
            <UserSettingsStyle>
                <div className="settings">
                <Button className = "back-button" onClick = {handleBackButton} >
                    <ArrowLeftOutlined color = "inherit" /> Back to main </Button>
                    <div className="accordions">
                        <Collapse>
                            <Panel header = "Change Password" key = "1" >
                                <div>
                                    <PasswordForm/>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </UserSettingsStyle>
        </SidebarLayout>
    )
}

export default UserSettings;