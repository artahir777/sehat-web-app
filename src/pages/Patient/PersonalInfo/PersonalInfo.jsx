import React, { useState } from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import PersonalInfoStyle from './PersonalInfoStyle';
import profile_sidebar from "../../../mockData/profile_sidebar";
import { Button, } from 'antd';
import { ArrowLeftOutlined, EditTwoTone } from '@ant-design/icons';
import user_info from '../../../mockData/user_info';
import EditInfoForm from '../../../components/EditInfoForm/EditInfoForm';

const InfoField = (props) => {
    return (
        <div className="field">
            <h3> {props.label}: </h3>
            <p> {props.value} </p>
        </div>
    );
}


const PersonalInfo = (props) => {

    const [modalVisibility, setModalVisibility] = useState(false);

    const [patientInfo, setPatientInfo] = useState( {   name: user_info[0].value, 
                                                        dob: user_info[1].value, 
                                                        gender: user_info[3].value,
                                                        blood: user_info[4].value } );
    
    
    
    const handleBackButton = () => {
        props.history.push("/user-profile");
    }

    const handleEditButton = () => {
        setModalVisibility(true);
    }

    const closeModal = () =>
    {
        setModalVisibility(false);
    }

    return (
        <SidebarLayout values = {profile_sidebar} >
            <PersonalInfoStyle>
                
                <EditInfoForm
                    patientInfo = {patientInfo}
                    visibility = {modalVisibility}
                    patientInfo = {patientInfo}
                    setPatientInfo = {setPatientInfo}
                    onCancel = {closeModal} />
                
                <div className="personal-info">
                    <Button className = "back-button"
                    onClick = {handleBackButton} 
                     >
                        <ArrowLeftOutlined color = "inherit" /> Back to main </Button>
                    <div className="info-table">
                        <div className="header">
                            <h3> Personal Info </h3>
                            <Button onClick = {handleEditButton} > <EditTwoTone/> </Button>
                        </div>
                        <div className="info-section">
                            {
                                user_info.map( ( item, index ) => {
                                    return(
                                        <InfoField label = {item.label} value = {item.value} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </PersonalInfoStyle>
        </SidebarLayout>
    )
}

export default PersonalInfo;