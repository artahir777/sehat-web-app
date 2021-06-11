import React, { useState } from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import UserProfileStyle from './UserProfileStyle';
import profile_sidebar from "../../../mockData/profile_sidebar";
import { Button } from 'antd';
import { CloseOutlined, EditOutlined, FileTextOutlined, RightCircleOutlined, SettingOutlined } from '@ant-design/icons';
import BackButton from '../../../components/BackButton/BackButton';
import user_info from '../../../mockData/user_info';
import EditInfoForm from '../../../components/EditInfoForm/EditInfoForm';
import IconButton from '../../../components/IconButton/IconButton';

const Appointment = () => {
    return (
        <div className = "appointment" >
            <div className = "details" >
                <div>
                    <h4>Dr. Name:</h4>
                    <span>Dr. John</span>
                </div>
                <div>
                    <h4>Appointment Type:</h4>
                    <span>Online</span>
                </div>
                <div>
                    <h4>Date &amp; Time:</h4>
                    <span>01-06-2021 at 3:30pm</span>
                </div>
            </div>
            <div className="actions">
                <IconButton text = "Cancel" icon = {<CloseOutlined/>}
                colors = {{color: "#ff6e54", bgColor: "white" }} size = "small" shape = "round" />
                <IconButton text = "Details" icon = {<FileTextOutlined />}
                colors = {{ color: "#57a2f2", bgColor: "white" }} size = "small" shape = "round" />
            </div>
        </div>
    )
}

const Prescription = () => {
    return (
        <div className = "prescription" >
            <div className = "description" >
                <div>
                    <h4> Dr. Name: </h4> <span> John Doe </span>
                </div>
                <div>
                    <h4>Date: </h4> <span>21/03/2021</span>
                </div>
            </div>
            <div className = "details" >
                <h4>Details:</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className = "actions" >
                <a href=""> Details </a>
                <a href=""> Delete </a>
            </div>
        </div> )
}

const UserProfile = (props) => {

    const [modalVisibility, setModalVisibility] = useState(false);
    const [patientInfo, setPatientInfo] = useState( {   name: user_info[0].value, 
        dob: user_info[1].value, 
        gender: user_info[3].value,
        blood: user_info[4].value } );

    const handleEditButton = () => {
        setModalVisibility(true);
    }

    const closeModal = () =>
    {
        setModalVisibility(false);
    }


    return (
        <SidebarLayout values = {profile_sidebar} home = "/user-dashboard" >
            <UserProfileStyle>
                <BackButton/>
                <div className="profile">
                    <div className="main-content">
                        
                        <div className="profile-header">
                            <div className = "info" >
                            <img src="/images/color-icons/person.png" alt="Profile Pic" />
                                <div className = "name" >
                                    <h2> John Doe </h2>
                                    <p> <span>Male, </span> <span> 34 Y/o </span> </p>
                                </div>
                            </div>
                            <div className = "action-buttons" >
                                <Button> <EditOutlined/> </Button>
                                <Button> <SettingOutlined/> </Button>
                            </div>
                        </div>
                        
                        <div className="appointments">
                            <h3>Upcoming Appointments</h3>
                            <Appointment/>
                            <Appointment/>
                            <Appointment/>
                            <IconButton icon = {<RightCircleOutlined/>} text = "View All"
                            colors = {{color: "#59d465" , bgColor: "white"}}
                             size = "small" shape = "round" />
                        </div>

                        <div className="prescriptions">
                            <h3>Prescriptions</h3>
                            <Prescription/>
                            <Prescription/>
                            <Prescription/>
                            <IconButton icon = {<RightCircleOutlined/>} text = "View All"
                            colors = {{color: "#59d465" , bgColor: "white"}}
                             size = "small" shape = "round" />
                        </div>
                    </div>
                    <div className="personal-info">
                        <div className = "heading" >
                            <h2> Personal Info </h2>
                            <Button> <EditOutlined/> </Button>
                        </div>
                        <div className="info-fields">
                        {
                            user_info.map( (item, index) => {
                                return (
                                    <div className="field">
                                        <h3> {item.label}: </h3>
                                        <p> {item.value} </p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                <EditInfoForm
                    patientInfo = {patientInfo}
                    visibility = {modalVisibility}
                    patientInfo = {patientInfo}
                    setPatientInfo = {setPatientInfo}
                    onCancel = {closeModal} />
            </UserProfileStyle>
        </SidebarLayout>
    )
}

export default UserProfile;