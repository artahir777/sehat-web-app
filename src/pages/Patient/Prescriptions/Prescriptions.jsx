import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Collapse } from 'antd';
import React from 'react'
import IconButton from '../../../components/IconButton/IconButton';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import profile_sidebar from '../../../mockData/profile_sidebar';
import SidebarLayout from '../../Layouts/SidebarLayout';
import PrescriptionsStyle from './PrescriptionsStyle';

const Prescriptions = (props) => {
    
    const handleBackButton = () => {
        props.history.push("/user-profile");
    }
    
    return (
        <SidebarLayout values = {profile_sidebar} >
            <PrescriptionsStyle>
                <div className="prescriptions">
                    
                    <Button className = "back-button" onClick = {handleBackButton} >
                    <ArrowLeftOutlined color = "inherit" /> Back to main </Button>
                    <div className="prescriptions-list">
                        
                    </div>

                </div>
            </PrescriptionsStyle>
        </SidebarLayout>
    )
}

export default Prescriptions;