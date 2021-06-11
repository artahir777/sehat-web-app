import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import UserSettingsStyle from './UserSettingsStyle';
import profile_sidebar from "../../../mockData/profile_sidebar";
import BackButton from '../../../components/BackButton/BackButton';
import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import IconButton from '../../../components/IconButton/IconButton';
import { Input, Form, Button } from 'antd';

const UserSettings = (props) => {
    
    return (
        <SidebarLayout values = {profile_sidebar} >
            <UserSettingsStyle>
                <div className="settings">
                    <BackButton/>
                    <Form className = "password-form" >
                        <h3>Change Password</h3>
                        <Form.Item label = "Old Password" name = "oldPassword" >
                            <Input.Password name = "oldPassword" />
                        </Form.Item>
                        <Form.Item label = "New Password" name = "newPassword" >
                            <Input.Password name = "newPassword" />
                        </Form.Item>
                        <Form.Item label = "Confirm New Password" name = "confirmPassword" >
                            <Input.Password name = "confirmPassword" />
                        </Form.Item>

                        <div className="actions">
                            <IconButton colors = {{color: "#4f7ee3", bgColor: "#c7e0ff"}}
                            text = "Save" size = "large" icon = {<SaveOutlined/>} 
                             />
                            <Button> {<CloseOutlined/>} Cancel  </Button>
                        </div>
                        
                    </Form>
                </div>
            </UserSettingsStyle>
        </SidebarLayout>
    )
}

export default UserSettings;