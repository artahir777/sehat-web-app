import React from 'react'
import AdminLayout from '../../Layouts/AdminLayout'
import SidebarLayout from '../../Layouts/SidebarLayout'
import profile_sidebar from "../../../mockData/profile_sidebar";
import SupportStyle from './SupportStyle';
import BackButton from '../../../components/BackButton/BackButton';
import { Collapse, Form, Input } from "antd";
import { MailOutlined } from '@ant-design/icons';

const {Panel} = Collapse;

const Support = () => {
    return (
        <SidebarLayout values = {profile_sidebar} >
            <SupportStyle>
                <div className = "support" >
                    <BackButton/>
                    <div className = "accordions" >
                        <Collapse accordion >
                            <Panel header = {<div> <h3> <MailOutlined/> Contact Us </h3> </div>} key = "1" >
                                This is panel 1
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </SupportStyle>
        </SidebarLayout>
    )
}

export default Support
