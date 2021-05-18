import React from 'react'
import NavbarLayout from '../../Layouts/NavbarLayout';
import LoginStyle from './LoginStyle';
import { Tabs } from 'antd';
import LoginForm from '../../../components/LoginForm/LoginForm';
import SignUpForm from '../../../components/SignUpForm/SignUpForm';

const { TabPane } = Tabs;


const Login = () => {
    return (
        <NavbarLayout>
            <LoginStyle>
            <div className = "bg-image" ></div>
            <div className = "tabs" >
                <Tabs className = "form" defaultActiveKey="1" >
                    <TabPane tab="Login" key="1" >
                        <LoginForm/>
                    </TabPane>
                    <TabPane tab="Sign Up" key="2" >
                        <SignUpForm/>
                    </TabPane>
                </Tabs>
            </div>
        </LoginStyle>
        </NavbarLayout>
    )
}

export default Login;