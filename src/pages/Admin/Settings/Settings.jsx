import { CloseOutlined, LeftOutlined, SaveOutlined } from '@ant-design/icons'
import {Button, Form, Input} from 'antd'
import React from 'react'
import IconButton from '../../../components/IconButton/IconButton'
import SectionHeading from '../../../components/SectionHeading/SectionHeading'
import AdminLayout from '../../Layouts/AdminLayout'
import { SettingsStyle } from './SettingsStyle'

const Settings = (props) => {
    return (
        <AdminLayout>
            <SettingsStyle>
                <div className = "settings" >
                    <IconButton colors = {{color: "#35a7db", bgColor: "#e8f9ff" } } size = "med" 
                    handleClick = { props.history.goBack } icon = {<LeftOutlined/>} text = "Back" shape = "round"/>
                    <SectionHeading header = "Settings" />
                    <div className="change-password">
                        <h3> Change Password </h3>
                        <Form className = "password-form" >
                            <Form.Item label = "Old Password" name = "oldPassword" >
                                <Input name = "oldPassword" />
                            </Form.Item>
                            <Form.Item label = "New Password" name = "newPassword" >
                                <Input name = "newPassword" />
                            </Form.Item>
                            <Form.Item label = "Confirm New Password" name = "confirmPassword" >
                                <Input name = "confirmPassword" onChange = {} />
                            </Form.Item>

                            <div className="actions">
                                <IconButton colors = {{color: "#4f7ee3", bgColor: "#c7e0ff"}}
                                text = "Save" size = "large" icon = {<SaveOutlined/>}  />
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
