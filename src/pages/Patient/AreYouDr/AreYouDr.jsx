import React, { useState } from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import AreYouDrStyle from './AreYouDrStyle';
import user_sidebar from "../../../mockData/user_sidebar";
import BackButton from "../../../components/BackButton/BackButton";
import {Button, Form, Input} from "antd";
import Modal from 'antd/lib/modal/Modal';
import IconButton from '../../../components/IconButton/IconButton';
import { ArrowRightOutlined } from '@ant-design/icons';

const AreYouDr = (props) => {
    
    const [licNo, setLicNo] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const handleCheckBtn = () => {
        setIsSubmitted(true);
    }

    const getLicNo = (ev) => {
        setLicNo(ev.target.value);
    }

    const closeModal = () => {
        setIsSubmitted(false);
    }

    const handleOkBtn = () => {
        setIsPending(true);
        closeModal();
    }

    return (
        <SidebarLayout values = {user_sidebar} >
            <AreYouDrStyle>
                <div className="doc-form">
                    <BackButton/>
                    <h2 className = "heading" > Doctor's Registration Form </h2>
                    <Modal title = "Message" okText = "OK" cancelText = "Cancel"
                        visible = {isSubmitted} onOk = { handleOkBtn } onCancel = { closeModal } >
                        <h3>Your request is submitted. Please wait for verification</h3>
                    </Modal>
                    <div>
                    {
                        !isPending ? 
                        <Form className = "form" >
                        <Form.Item
                        label = "Enter your License no. "
                        >
                            <Input type = "number" onChange = { (e) => {getLicNo(e)} } />
                        </Form.Item>
                        <Button onClick = { handleCheckBtn } >Verify</Button>
                        </Form>
                        : <div className = "verified-msg" >
                            <h4>Verified. Click Next to Continue!</h4>
                            <IconButton text = "Next" colors = {{color: "#5aa6ed", bgColor: "white"}}
                             size = "med" shape = "round" icon = {<ArrowRightOutlined/>}
                             handleClick = {() => { props.history.push("/dr-reg-form") }} />
                        </div>
                    }
                    </div>
                </div>
            </AreYouDrStyle>
        </SidebarLayout>
    )
}

export default AreYouDr;