import React, { useState } from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import AppointmentsStyle from './AppointmentsStyle';
import profile_sidebar from "../../../mockData/profile_sidebar";
import { Button, Tabs, } from 'antd';
import { ArrowLeftOutlined, DeleteOutlined, MedicineBoxOutlined, ProfileOutlined } from '@ant-design/icons';
import DataTable from '../../../components/DataTable/DataTable';
import appointments_list from "../../../mockData/appointments_list";
import Modal from 'antd/lib/modal/Modal';
const { TabPane } = Tabs;

const Appointments = (props) => {

    const columns = [
        {
            title: "ID",
            key: "id",
            dataIndex: "id",
        },
        {
            title: "Dr. Name",
            key: "drName",
            dataIndex: "drName",
        },
        {
            title: "Date and Time",
            key: "date",
            dataIndex: "date",
        },
        {
            title: "Type",
            key: "type",
            dataIndex: "type",
        },
        {
            title: "Actions",
            key: "actions",
            dataIndex: "actions",
            render: (t, record) => (
                <>
                    {
                        <div className = "action-buttons" >
                            <Button style = {{margin: "10px"}} > <MedicineBoxOutlined/> View Dr. Profile </Button>
                            <Button style = {{margin: "10px"}} > <DeleteOutlined/> Delete </Button>
                            <Button style = {{margin: "10px"}} >
                                 <ProfileOutlined /> View </Button>
                        </div>
                    }
                </>
            )
        },
    ]

    const [isModalVisible, setIsModalVisible] = useState(false);
        const showModal = () => {
            setIsModalVisible(true);
        };

        const handleOk = () => {
            setIsModalVisible(false);
        };

        const handleCancel = () => {
            setIsModalVisible(false);
        };

    const handleBackButton = () => {
        props.history.push("/user-profile");
    }

    return (
        <SidebarLayout values = {profile_sidebar} >
            <AppointmentsStyle>
                <div className="appointments">
                    <Button className = "back-button" onClick = {handleBackButton} >
                        <ArrowLeftOutlined color = "inherit" /> Back to main </Button>
                    <div className="appointments-tabs">
                        <h3> Appointments </h3>
                        <Tabs>
                            <TabPane className = "tab" tab = "Upcoming" key = "1" >
                                <DataTable 
                                    columns = {columns}
                                    dataSource = {appointments_list}
                                    />
                            </TabPane>
                            <TabPane className = "tab" tab = "Pending" key = "2" >
                                <DataTable 
                                    columns = {columns}
                                    data = {appointments_list}
                                    />
                            </TabPane>
                            <TabPane className = "tab" tab = "Past" key = "3" >
                                <DataTable 
                                columns = {columns}
                                data = {appointments_list}
                                />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <Modal title="Appointment Details" 
                visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                    some content
                </Modal>
            </AppointmentsStyle>
        </SidebarLayout>
    )
}

export default Appointments;