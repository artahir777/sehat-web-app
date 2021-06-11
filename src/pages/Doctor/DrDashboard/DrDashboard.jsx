import { EllipsisOutlined, FileOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Rate, Tag } from 'antd';
import React from 'react'
import IconButton from '../../../components/IconButton/IconButton';
import DrLayout from '../../Layouts/DrLayout';
import DrDashboardStyle from './DrDashboardStyle';

const Appointment = () => {
    return (
        <div className="appointment">
            <div className = "section" >
                <div className = "info">
                    <h4>Date &amp; Time:</h4> <p>20-08-2020 at 10:30am</p>
                </div>
                <div className = "info">
                    <h4>Patient Name:</h4> <p>Mr. Amir Ali</p>
                </div>
            </div>
            <div className = "section" >
                <div className="info">
                    <h4>Appointment Type:</h4> <p>Online</p>
                </div>
                <div className="actions">
                    <IconButton text = "Details" icon = {<FileOutlined/>}
                    colors = {{color: "#31c0eb", bgColor: "white"}} size = "small" shape = "round" />
                    <IconButton text = "More Options" size = "small" shape = "round"
                    colors = {{color: "#31c0eb", bgColor: "white"}} />
                </div>
            </div>
        </div>
    )
}

const Prescription = () => {
    return (
        <div className = "prescription" >
            <div className = "section" >
                <div className = "info">
                    <h4>Date &amp; Time:</h4> <p>20-08-2020 at 10:30am</p>
                </div>
                <div className = "info">
                    <h4>Patient Name:</h4> <p>Mr. Amir Ali</p>
                </div>
            </div>
            <div className="actions">
                <IconButton text = "Details" icon = {<FileOutlined/>}
                colors = {{color: "#31c0eb", bgColor: "white"}} size = "small" shape = "round" />
                <IconButton text = "More Options" size = "small" shape = "round"
                colors = {{color: "#31c0eb", bgColor: "white"}} />
            </div>
        </div>
    );
}

const DrDashboard = () => {
    return (
        <DrLayout>
            <DrDashboardStyle>
                <div className="dashboard">
                    <div className="profile-section">
                        <div className="profile-header">
                            <div className="profile-pic">
                                <img src="/images/color-icons/person.png" alt="Profile Pic" />
                            </div>
                            <div className="info">
                                <h3>Dr. Ahmad</h3>
                                <Tag color = "green">General Physician</Tag>
                                <div className="rate">
                                    4.5 <Rate className = "rate" value = {4.5} allowHalf = {true} disabled />
                                </div>
                            </div>
                            <div className="options">
                                <EllipsisOutlined rotate = {90} />
                            </div>
                        </div>
                        <div className="qualification">
                            <h3>Qualification</h3>
                        </div>
                        <div className="experience">
                        <h3>Experience</h3>
                        
                        </div>
                    </div>
                    
                    <div className="appointments">
                        <h3>Appointments</h3>
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
            </DrDashboardStyle>
        </DrLayout>
    )
}

export default DrDashboard;