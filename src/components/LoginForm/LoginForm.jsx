import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import LoginFormStyle from './LoginFormStyle';

const LoginForm = (props) => {
    return (
        <LoginFormStyle>
            <Form>
                <Form.Item
            label="Username"
            name="username"

            rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item >
                    <Link to = "/user-dashboard" >
                        <Button type="primary" htmlType="submit" >
                            Login
                        </Button>
                    </Link>
                </Form.Item>
                <Link to = "/admin-dashboard" > <p> Admin Login Here! </p> </Link>
            </Form>
        </LoginFormStyle>
    );
}

export default LoginForm;