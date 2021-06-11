import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout'
import user_sidebar from "../../../mockData/user_sidebar";
import VitalsStyle from './VitalsStyle';
import { ArrowLeftOutlined, EditOutlined, } from '@ant-design/icons';
import { Button } from 'antd';
import Card from '../../../components/Card/Card';
import vitals_info from "../../../mockData/vitals_info";
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

const Vitals = (props) => {
    
    const handleBackButton = () => {
        props.history.goBack();
    }
    
    return (
        <SidebarLayout values = {user_sidebar} >
            <VitalsStyle>
                <div className="vitals">
                    <Button className = "back-button" onClick = {handleBackButton} >
                        <ArrowLeftOutlined color = "inherit" /> Back to main </Button>
                    <SectionHeading header = "Vitals" />
                    <Button className = "edit-button" >  <EditOutlined/> Edit </Button>
                    <div className="vitals-grid">
                        {
                            vitals_info.map(( item, index ) => {
                                return(
                                    <Card className = ""
                                        imgSize = "small"
                                        image = {< img src = {item.imgPath} alt = "vitals icon" className = "mid" />}
                                        title = { <h3> {item.title}: </h3> }
                                        subtitle = { <p> {item.value} </p> }
                                    />
                                )
                            })
                        }
                    </div>
                
                </div>
            </VitalsStyle>
        </SidebarLayout>
    )
}

export default Vitals
