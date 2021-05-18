import { Button, Collapse, Rate, Tag, Tooltip } from 'antd';
import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import DrProfileStyle from './DrProfileStyle';
import user_sidebar from "../../../mockData/user_sidebar"
import IconButton from '../../../components/IconButton/IconButton';
import { ArrowLeftOutlined, BookOutlined, CheckCircleTwoTone, CheckOutlined, HeartOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import DataTable from '../../../components/DataTable/DataTable';
import dr_edu_columns from '../../../mockData/dr_edu_columns';
import dr_exp_columns from '../../../mockData/dr_exp_columns';
import dr_edu_data from '../../../mockData/dr_edu_data';
import dr_exp_data from '../../../mockData/dr_exp_data';
import Review from '../../../components/Review/Review';
import Avatar from 'antd/lib/avatar/avatar';

const {Panel} = Collapse;

const DrProfile = (props) => {
    const handleBackButton = () => {
        props.history.goBack();
    }

    return (
        <SidebarLayout values = {user_sidebar} >
            <DrProfileStyle>
                <div className="dr-profile">
                    <Button className = "back-button" onClick = {handleBackButton} >
                         <ArrowLeftOutlined color = "inherit" /> Back to main </Button>
                    <div className="info-header">
                        <img src="/images/color-icons/doctor 2.png" alt="Dr. Profile Pic"/>
                        <div className="info">
                            <h3> Dr. John Doe <Tooltip title = "Verified" > <CheckCircleTwoTone/> </Tooltip> </h3>
                            <Rate allowHalf disabled value = {4.5}  /> 4.5
                            <p className = "status" > Online </p>
                            <Tag color = "green" > General Physician </Tag>
                            <p> <HomeOutlined /> 52-H, Johar Town </p>
                        </div>
                        <div className="options-buttons">
                            
                            <IconButton icon = {<BookOutlined/>} text = "Book Appointment" 
                            colors = {{ color: "#408eb8", bgColor: "#f0faff" }} size = "large" />
                            
                            <IconButton icon = {<PhoneOutlined/>} text = "Contact Dr." 
                            colors = {{ color: "#6ef545", bgColor: "#e9fce3" }} size = "large" />
                            
                            <IconButton icon = {<HeartOutlined/>} text = "Add to favorites" 
                            colors = {{ color: "#e5fa48", bgColor: "#f8fcd7" }} size = "large" />
                        
                        </div>

                    </div>
                    
                    <div className="basic-info">
                            <h1> Basic Info: </h1>
                            
                            <Collapse defaultActiveKey = {['1']} className = "info-collapse" bordered={false} >
                                <Panel header = {<h3> Education: </h3>} key = {1} > 
                                <DataTable columns = {dr_edu_columns} dataSource = {dr_edu_data} /> </Panel>
                                <Panel header = {<h3> Experience: </h3>} key = {2} >
                                    <DataTable columns = {dr_exp_columns} dataSource = {dr_exp_data} /> </Panel>
                            </Collapse>
                    </div>
                    <div className="reviews">
                        <h1> Reviews: </h1>
                        <div className="reviews-list">
                            <Review avatar = {<Avatar> AB </Avatar>} username = "John Doe" date = "2021/04/23"
                            rating = {4.5} title = "Good Experience!" comment = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas a modi amet molestias incidunt." />
                            <Review avatar = {<Avatar> AB </Avatar>} username = "John Doe" date = "2021/04/23"
                            rating = {4.5} title = "Good Experience!" comment = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorum nostrum voluptatibus pariatur facere maxime ducimus adipisci accusantium repellendus quisquam voluptas quibusdam, animi eum corrupti mollitia ex voluptatem. Odit, voluptatem!" />
                        </div>
                    </div>
                </div>
            </DrProfileStyle>
        </SidebarLayout>
    )
}

export default DrProfile;