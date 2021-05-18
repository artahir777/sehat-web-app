import { Input, Form } from 'antd';
import React from 'react'
import PasswordFormStyle from './PasswordFormStyle';

const PasswordForm = (props) => {
    return (
        <PasswordFormStyle>
            <Form className = "change-password" >
                <Form.Item
                    label = "Old Password"
                    name = "oldPassword"

                >
                    <Input/>
                </Form.Item>
            </Form>
        </PasswordFormStyle>
    )
}

export default PasswordForm;