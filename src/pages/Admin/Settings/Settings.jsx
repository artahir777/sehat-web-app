import { CloseOutlined, LeftOutlined, SaveOutlined } from '@ant-design/icons'
import {Button, Form, Input} from 'antd'
import React, { useState } from 'react'
import IconButton from '../../../components/IconButton/IconButton'
import SectionHeading from '../../../components/SectionHeading/SectionHeading'
import AdminLayout from '../../Layouts/AdminLayout'
import { SettingsStyle } from './SettingsStyle'

const Settings = (props) => {


    const [passwords, setPasswords] = useState( {oldPassword: "hello", newPassword: "", confirmPassword: ""} )

    const handleFormData = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setPasswords( { ...passwords, [name]: val } );
        console.log(passwords);
    }

    const handleChangePassword = () => {
        if ( passwords.newPassword === "" || passwords.confirmPassword === "" )
            alert("Don't leave fields empty!");
        else if ( passwords.newPassword === passwords.confirmPassword )
            console.log("changed");
        
    }

    return (
        <AdminLayout>
            <SettingsStyle>
                <div className = "settings" >
                    <IconButton colors = {{color: "#35a7db", bgColor: "#e8f9ff" } } size = "med" 
                    handleClick = { props.history.goBack } icon = {<LeftOutlined/>} text = "Back" shape = "round"/>
                    <SectionHeading className = "heading" header = "Settings" />
                    <div className="change-password">
                        <h3> Change Password </h3>
                        <Form className = "password-form" >
                            <Form.Item label = "Old Password" name = "oldPassword" >
                                <Input.Password name = "oldPassword" />
                            </Form.Item>
                            <Form.Item label = "New Password" name = "newPassword" >
                                <Input.Password name = "newPassword" onChange = {handleFormData} />
                            </Form.Item>
                            <Form.Item label = "Confirm New Password" name = "confirmPassword" >
                                <Input.Password name = "confirmPassword" onChange = {handleFormData} />
                            </Form.Item>

                            <div className="actions">
                                <IconButton colors = {{color: "#4f7ee3", bgColor: "#c7e0ff"}}
                                text = "Save" size = "large" icon = {<SaveOutlined/>} 
                                handleClick = {handleChangePassword} />
                                <Button> {<CloseOutlined/>} Cancel  </Button>
                            </div>
                            
                        </Form>
                    </div>
                </div>
            </SettingsStyle>
        </AdminLayout>
    )
}

export default Settings
