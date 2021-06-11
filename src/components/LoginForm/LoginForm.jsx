import { Form, Input, Button, Checkbox, Radio } from 'antd';
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import LoginFormStyle from './LoginFormStyle';

const LoginForm = (props) => {
    
    const [radioVal, setRadioVal] = useState("Patient");

    const setLoginAs = (e) => {
        setRadioVal(e.target.value);
    }

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
                <Form.Item label = "Sign in as" name = "role" >
                    <Radio.Group onChange = {setLoginAs} value = {radioVal} >
                        <Radio value = "Doctor" >Doctor</Radio>
                        <Radio value = "Patient" >Patient</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item >
                    <Link to = { (radioVal === "Doctor" ? "/dr/home" : "/user-dashboard" )  } >
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