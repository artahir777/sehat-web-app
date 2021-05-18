import React, { useState } from 'react'
import { DatePicker, Input, Select, Form } from "antd";
import Modal from 'antd/lib/modal/Modal';

const { Option } = Select

const EditInfoForm = (props) => {
    const {visibility, patientInfo, setPatientInfo, onCancel } = props;

    const [pName, setName] = useState("");
    const [pDob, setDob] = useState(new Date());
    const [pGender, setGender] = useState("");
    const [pBloodgroup, setBloodgroup] = useState("");

    const nameChanged = (event) => {
        if (event.target.value)
            setName(event.target.value);
    }

    const dobChanged = (event) => {
        if (event)
            setDob(event._d);
    }

    const genderChanged = (event) => {
        setGender(event);
    }

    const bloodGroupChanged = (event) => {
        setBloodgroup(event);
    }

    const saveModal = () => {
        setPatientInfo( {name: pName, dob: pDob, gender: pGender, blood: pBloodgroup} );
        onCancel();
    }

    return (
        <Modal title="Edit Info" visible={visibility}
                    okText = "Save" cancelText = "Cancel"
                    onOk = {saveModal} onCancel = {onCancel} >
                    <Form
                        name="editInfo"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                  required: false,
                                },
                              ]}
                        >
                            <Input onChange = {nameChanged} />
                        </Form.Item>

                        <Form.Item
                            label="Date of Birth"
                            name="dob"
                        >
                            <DatePicker onChange = {dobChanged} format = "YYYY/MM/DD" />
                        </Form.Item>
                        
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[
                                {
                                  required: false,
                                },
                              ]}
                        >
                            <Select defaultValue = "Select Gender" onChange = {genderChanged} >
                                <Option value = "Male" > Male </Option>
                                <Option value = "Female" > Female </Option>
                                <Option value = "Other" > Other </Option>
                            </Select>
                        </Form.Item>
                        
                        <Form.Item
                            label="Blood Group"
                            name="blood"
                            rules={[
                                {
                                  required: false,
                                },
                              ]}
                              onChange = {bloodGroupChanged}
                        >
                            <Select defaultValue = "Blood Group" >
                                <Option value = "A +ive" >
                                    A +ive
                                </Option>
                                <Option value = "A -ive" >
                                    A -ive
                                </Option>
                                <Option value = "AB +ive" >
                                    AB +ive
                                </Option>
                                <Option value = "AB -ive" >
                                    AB -ive
                                </Option>
                                <Option value = "B +ive" >
                                    B +ive
                                </Option>
                                <Option value = "B -ive" >
                                    B -ive
                                </Option>
                                <Option value = "O +ive" >
                                    O +ive
                                </Option>
                                <Option value = "O -ive" >
                                    O -ive
                                </Option>
                            </Select>
                            
                        </Form.Item>
                    </Form>
                </Modal>
    )
}

export default EditInfoForm;