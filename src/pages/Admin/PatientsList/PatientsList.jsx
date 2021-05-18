import { CalendarOutlined, ContactsOutlined, DeleteOutlined, HistoryOutlined,
         MailOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
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
                        <Button style = {{margin: "5px"}} > <ContactsOutlined/> View Profile </Button>
                        <Button style = {{margin: "5px"}} > <DeleteOutlined/> Delete Account </Button>
                        <Button style = {{margin: "5px"}} > <MessageOutlined/> Contact </Button>
                    </div>
                }
            </>
        )
    },

];

const PatientsList = () => {
    return (
        <AdminLayout>
            <PatientsListStyle>
                <div className="patients-list">
                    <SectionHeading header = "Patients List" />
                    <div className="list">
                        
                        <DataTable dataSource = {patients_list} columns = {columns} scroll = {{y: 450}} />
                    </div>
                </div>
            </PatientsListStyle>
        </AdminLayout>
    )
}

export default PatientsList;