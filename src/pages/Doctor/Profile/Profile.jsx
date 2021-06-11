import { CloseOutlined, EditOutlined, EllipsisOutlined, UpCircleFilled } from '@ant-design/icons'
import { Button, Rate, Tabs, Tag } from 'antd'
import React, { useState } from 'react'
import DataTable from '../../../components/DataTable/DataTable'
import DrLayout from '../../Layouts/DrLayout'
import ProfileStyle from './ProfileStyle'

import dr_edu_data from "../../../mockData/dr_edu_data"
import dr_exp_data from "../../../mockData/dr_exp_data"
import Review from '../../../components/Review/Review'
import Avatar from 'antd/lib/avatar/avatar'

const {TabPane} = Tabs;

const qualCols = [
    {
        title: "Institute",
        key: "institute",
        dataIndex: "institute"
    },
    {
        title: "Degree Title",
        key: "degree",
        dataIndex: "degree"
    },
    {
        title: "Year",
        key: "year",
        dataIndex: "year"
    },
];

const expCols = [
    {
        title: "Workplace",
        key: "workplace",
        dataIndex: "workplace"
    },
    {
        title: "Job Title",
        key: "job_title",
        dataIndex: "job_title"
    },
    {
        title: "Years",
        key: "years",
        dataIndex: "years"
    },
]

const Profile = () => {

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const [schDay, setSchDay] = useState("1");
    const timeSlots = ["8:30am", "9:00am", "9:30am", "10:00am", "10:30am",
     "11:00am", "11:30am", "12:00pm", "12:30pm", "1:00pm"];
    const [timetable, setTimetable] = useState(timeSlots);
    
    const removeSch = (index) => {
        const temp = timetable.filter( t => t !== timetable[index]  )
        setTimetable( temp );
    }

    const addNew = () => {
        setTimetable([...timetable, "11px"]);
    }

    return (
        <DrLayout>
            <ProfileStyle>
                <div className="profile">
                    <div className="profile-header">
                            <div className="info">
                                <img src="/images/color-icons/doctor.png" alt="" />
                                <div className = "dr-info" >
                                    <h2>Dr. Ali</h2>
                                    <Tag color = "green" > General Physician </Tag>
                                    <div className="rate">
                                        4.5 <Rate className = "rate" allowHalf = {true} disabled value = {4.5} />
                                    </div>
                                    <div className="status">
                                        <span>Online </span>
                                    </div>
                                </div>
                            </div>
                            <div className="options">
                                <EllipsisOutlined rotate = {90} />
                            </div>
                    </div>
                    <div className="field-info">
                        <div className="experience">
                            <div className = "panel-header" ><h2>Experience</h2> <Button><EditOutlined/></Button> </div>
                            <DataTable dataSource = {dr_exp_data} columns = {expCols} />    
                        </div>
                        <div className="qualification">
                            <div className = "panel-header" ><h2>Qualification</h2> <Button><EditOutlined/></Button> </div>
                            <DataTable dataSource = {dr_edu_data} columns = {qualCols} />
                        </div>
                    </div>
                    <div className="schedule">
                        <h2>Schedules</h2>
                        <Tabs defaultActiveKey = "1" type = "card" onChange = { (key) => setSchDay(key) }  >
                            <TabPane tab = "Monday" key = "1" >
                            {
                                timetable.map( (slot, index) => {
                                    return (
                                        <Tag color = "purple" > {slot} <CloseOutlined onClick = {removeSch} /> </Tag>
                                    );
                                })
                            }
                            </TabPane>
                            <TabPane tab = "Tuesday" key = "2" >
                            {
                                timetable.map( (slot, index) => {
                                    return (
                                        <Tag color = "purple" > {slot} <CloseOutlined onClick = {removeSch} /> </Tag>
                                    );
                                })
                            }
                            </TabPane>
                            <TabPane tab = "Wednesday" key = "3" >
                            {
                                timetable.map( (slot, index) => {
                                    return (
                                        <Tag color = "purple" > {slot} <CloseOutlined onClick = {removeSch} /> </Tag>
                                    );
                                })
                            }
                            </TabPane>
                            <TabPane tab = "Thursday" key = "4" >
                            {
                                timetable.map( (slot, index) => {
                                    return (
                                        <Tag color = "purple" > {slot} <CloseOutlined onClick = {removeSch} /> </Tag>
                                    );
                                })
                            }
                            </TabPane>
                            <TabPane tab = "Friday" key = "5" >
                            {
                                timetable.map( (slot, index) => {
                                    return (
                                        <Tag color = "purple" > {slot} <CloseOutlined onClick = {removeSch} /> </Tag>
                                    );
                                })
                            }
                            </TabPane>
                            <TabPane tab = "Saturday" key = "6" >
                            {
                                timetable.map( (slot, index) => {
                                    return (
                                        <Tag color = "purple" > {slot} <CloseOutlined onClick = {removeSch} /> </Tag>
                                    );
                                })
                            }
                            </TabPane>
                            <TabPane tab = "Sunday" key = "7" >
                            {
                                timetable.map( (slot, index) => {
                                    return (
                                        <Tag color = "purple" > {slot} <CloseOutlined onClick = {removeSch} /> </Tag>
                                    );
                                })
                            }
                            </TabPane>
                        </Tabs>
                        
                    </div>
                    <div className="reviews">
                        <h2> User Reviews </h2>
                        <Review avatar = {<Avatar> AB </Avatar>} username = "John Doe" date = "2021/04/23"
                            rating = {4.5} title = "Good Experience!" comment = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas a modi amet molestias incidunt." />
                    </div>
                </div>
            </ProfileStyle>
        </DrLayout>
    )
}

export default Profile
