import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import profile_sidebar from "../../../mockData/profile_sidebar";
import MedicalHistoryStyle from './MedicalHistoryStyle';
import IconButton from '../../../components/IconButton/IconButton';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import BackButton from '../../../components/BackButton/BackButton';

const Item = (props) => {
    return (
        <div className = "list-item" >
            <div className="block">
                <div className="info">
                    <h4>Date:</h4> <p>22/05/21</p>
                </div>
                <div className = "info" >
                    <h4>Disease:</h4> <p>Fever</p>
                </div>
            </div>
            <div className="block">
                <div className="info">
                    <h4>Checked By:</h4> <p>Dr. Jim</p>
                </div>
                <div className = "info" >
                    <h4>Treatment:</h4> <p>Medicine</p>
                </div>
            </div>
            <div className="actions">
                <IconButton colors = {{color: "#58b5fc", bgColor: "white"}}  size = "medium" 
                shape = "round" icon = {<EditOutlined/>} />
                <IconButton colors = {{color: "#fc7958", bgColor: "white"}}  size = "medium" 
                shape = "round" icon = {<DeleteOutlined/>} />
            </div>
        </div>
    );
}

const MedicalHistory = () => {
    return (
        <SidebarLayout values = {profile_sidebar} >
            <MedicalHistoryStyle>
                <div className="medical-history">
                    <BackButton/>
                    <div className="header">
                        <h2> Medical History </h2>
                        <IconButton className = "add-btn" colors = {{ color: "#58fc7c", bgColor: "white" }} icon = {<PlusOutlined/>}
                        size = "large" shape = "round" text = "Add New Record" />
                    </div>
                    <div className="list">
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                </div>
            </MedicalHistoryStyle>
        </SidebarLayout>
    )
}

export default MedicalHistory;