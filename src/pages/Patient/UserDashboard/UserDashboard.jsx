import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import UserDashboardStyle from './UserDashboardStyle';
import user_sidebar from "../../../mockData/user_sidebar";
import Card from '../../../components/Card/Card';
import { Button, Divider, Tag } from 'antd';
import Section from '../../../components/Section/Section';
import medical_categories_data from "../../../mockData/medical_categories_data";
import vitals_grid from "../../../mockData/vitals_grid";
import MySlider from '../../../components/MySlider/MySlider';
import IconButton from '../../../components/IconButton/IconButton';
import { ClockCircleOutlined, CloseOutlined, FileTextOutlined, MedicineBoxOutlined, MessageOutlined, MinusOutlined, PlusOutlined, RightCircleOutlined, SendOutlined } from '@ant-design/icons';



const UserDashboard = (props) => {

    const handleViewProfileBtn = () => {
        props.history.push("/dr-profile");
    }

    return (
        <SidebarLayout values = {user_sidebar} >
            <UserDashboardStyle>
                <div className="dashboard">
                    {/* <div className="chatbox">
                        <span> <SendOutlined/> Chats </span>
                        <CloseOutlined/>
                    </div> */}
                    <div className="main-content">
                        <div className="top-doctors">
                            <h2 className = "heading" >Top Doctors</h2>
                            <MySlider className = "slider" dots = {true} isInfinite = {true} slidesToShow = {1} slidesToScroll = {1}
                            arrowColor = "#5789d9" speed = {500} autoplay = {true} >
                                {
                                [1, 2, 3, 4].map((item, index) => {
                                    return (
                                        <Card
                                        imgSize = "mid"
                                            image = { <img src = "/images/bw-icons/doctor.png" /> }
                                            title = { <h3> Dr. Jim </h3> }
                                            subtitle = { <Tag style={{ margin: "5px" }} color="green" >
                                                General Physician</Tag> }
                                            type = "horizontal"
                                            actions = { 
                                                <div >
                                                    <Button> Consult </Button>
                                                    <Button onClick = {handleViewProfileBtn} > View Profile </Button>
                                                </div>
                                            }
                                        />
                                    ) })
                                }
                            </MySlider>
                        </div>
                        <div className="categories">
                            <h2>Medical Categories</h2>
                            {
                                medical_categories_data.map( ( item, index ) => {
                                    return (
                                        <div className = "category" > 
                                            <img src = {item.imgPath} alt="category icon" />
                                            <span> {item.title} </span>
                                            <span> <RightCircleOutlined/> </span>
                                        </div>
                                    )
                                })
                            }
                            <IconButton colors = {{color: "#59d465" , bgColor: "white"}} size = "small"
                            text = "More" icon = {<RightCircleOutlined/>} />
                        </div>
                        <div className="vitals">
                            <h2>Vitals</h2>
                            <div className="grid">
                                {
                                    vitals_grid.map( (item, index) => {
                                        return (
                                            <div className = "vital-item" >
                                                <img src= {item.imgPath} alt="" />
                                                <p> {item.title} </p>
                                                <span> N/A </span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <IconButton colors = {{color: "#59d465" , bgColor: "white"}} size = "small"
                            text = "Details" icon = {<RightCircleOutlined/>} />
                        </div>
                    </div>
                    <div className="side-content">
                        <div className="consult-btn">
                            <h3> Consult Now! <PlusOutlined/> </h3>
                        </div>
                        <ul>
                            <li> <SendOutlined/> Chats</li>
                            <li> <MedicineBoxOutlined/> Prescriptions </li>
                            <li> <ClockCircleOutlined/> Medical History </li>
                            <li>  </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </UserDashboardStyle>
        </SidebarLayout>
    )
}

export default UserDashboard;