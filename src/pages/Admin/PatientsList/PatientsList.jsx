import { CalendarOutlined, CloseOutlined, ContactsOutlined, DeleteOutlined, HistoryOutlined,
         MailOutlined, MessageOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react'
import DataTable from '../../../components/DataTable/DataTable';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import patients_list from '../../../mockData/patients_list';
import AdminLayout from '../../Layouts/AdminLayout';
import PatientsListStyle from './PatientsListStyle';

const columns = [
    {
        title: "ID",
        key: "id",
        dataIndex: "id",
        width: 80,
    },
    {
        title: "Patient Name",
        key: "patient_name",
        dataIndex: "patient_name",
    },
    {
        title: "Date of Birth",
        key: "dob",
        dataIndex: "dob",
        width: 150,
        render: (dob) => (
            <>
                {
                    <div className = "date-of-birth" >
                        <p> <CalendarOutlined/> {dob.birthday} </p>
                        <p> <HistoryOutlined/> {dob.age} years </p>
                    </div>
                }
            </>
        )
    },
    {
        title: "Gender",
        key: "gender",
        dataIndex: "gender",
        width: 80,
    },
    {
        title: "Contact Info",
        key: "contact",
        dataIndex: "contact",
        width: 250,
        render: (contact) => (
            <>
            {
                <div>
                    <p> <PhoneOutlined/> {contact.phoneNo} </p>
                    <p> <MailOutlined/> {contact.mail} </p>
                </div>
            }
            </>
        )
    },
    {
        title: "Marital Status",
        key: "marital_status",
        dataIndex: "marital_status",
        width: 120,
    },
    {
        title: "Date Joined",
        key: "date_joined",
        dataIndex: "date_joined",
        width: 150,
    },
    {
        title: "Actions",
        key: "actions",
        dataIndex: "actions",
        render: () => (
            <>
                {
                    <div className = "action-buttons" >
                        <Button style = {{margin: "5px"}} >
                             <ContactsOutlined/> View Profile </Button>
                        <Button style = {{margin: "5px"}}  >
                             <DeleteOutlined/> Delete Account </Button>
                        <Button style = {{margin: "5px"}}  >
                             <MessageOutlined/> Contact </Button>
                    </div>
                }
            </>
        )
    },

];

const PatientsList = () => {
    
    const [data, setData] = useState(patients_list);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [record, setRecord] = useState({ key: null, event: {} });
    const [showContactModal, setShowContactModal] = useState(false);
    const [message, setMessage] = useState("");

    const toggleShowContactModal = (key, e) => {
        setShowContactModal(true);
    };

    const handleSendMsgBtn = () => {
        console.log(message);
        setShowContactModal(false);
    };

    const handleMsg = (e) => {
        setMessage(e.target.value);
    };
    
    const deleteRecord = () => {
        const docs = [...patients_list];
        docs.splice(record.key-1, 1);
        setData(docs);
        setConfirmDelete(false);
      };
    
      const showModal = (k, e) => {
        setConfirmDelete(true);
        setRecord({ ...record, key: k, event: e });
      };

    return (
        <AdminLayout>
            <PatientsListStyle>
                <div className="patients-list">
                    <SectionHeading header = "Patients List" />
                    <div className="list">
                        
                        <DataTable dataSource = {data} columns = {columns} scroll = {{y: 450}} />
                    </div>
                </div>

                {/* This modal will be shown when the admin tries to delete a record */}
                <Modal
                title="Confirm"
                visible={confirmDelete}
                okText={
                    <div>
                    <SendOutlined /> Delete
                    </div>
                }
                cancelText={
                    <div>
                    <CloseOutlined /> Cancel
                    </div>
                }
                onOk={deleteRecord}
                onCancel={() => {
                    setConfirmDelete(false);
                }}
                >
                <h4> Are you Sure you want to delete this record? </h4>
                <p>Deleting the record will delete the user's profile permanently!</p>
                </Modal>

                {/* This modal will be shown when we want to contact the dr. */}
                <Modal
                title="Contact the Dr."
                visible={showContactModal}
                onOk={handleSendMsgBtn}
                onCancel={() => {
                    setShowContactModal(false);
                }}
                okText={
                    <div>
                    <SendOutlined /> Send
                    </div>
                }
                cancelText={
                    <div>
                    <CloseOutlined /> Cancel
                    </div>
                }
                >
                <Form>
                    <Form.Item label="Write your message here..." name="sendMessage">
                    <Input.TextArea name="message" onChange={handleMsg} />
                    </Form.Item>
                </Form>
                </Modal>

            </PatientsListStyle>
        </AdminLayout>
    )
}

export default PatientsList;