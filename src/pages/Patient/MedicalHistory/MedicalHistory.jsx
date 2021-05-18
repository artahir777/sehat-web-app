import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import profile_sidebar from "../../../mockData/profile_sidebar";
import MedicalHistoryStyle from './MedicalHistoryStyle';

const MedicalHistory = () => {
    return (
        <SidebarLayout values = {profile_sidebar} >
            <MedicalHistoryStyle>
                <div className="medical-history">
                    
                </div>
            </MedicalHistoryStyle>
        </SidebarLayout>
    )
}

export default MedicalHistory;