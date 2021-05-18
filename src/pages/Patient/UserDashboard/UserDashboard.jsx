import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import UserDashboardStyle from './UserDashboardStyle';
import user_sidebar from "../../../mockData/user_sidebar";
import Card from '../../../components/Card/Card';
import { Button, Divider } from 'antd';
import Section from '../../../components/Section/Section';
import medical_categories_data from "../../../mockData/medical_categories_data";
import vitals_grid from "../../../mockData/vitals_grid";

const UserDashboard = (props) => {

    const handleViewProfileBtn = () => {
        props.history.push("/dr-profile");
    }

    return (
        <UserDashboardStyle>
            <SidebarLayout values = {user_sidebar} >
                <div className="dashboard">
                    <Section header = "Top Doctors" >
                        <div className = "doctors-list" >
                        {
                            [1, 2, 3, 4].map((item, index) => {
                                return (
                                    <Card
                                    imgSize = "mid"
                                        image = { <img src = "/images/bw-icons/doctor.png" /> }
                                        title = { <h3> Dr. Jim </h3> }
                                        actions = { 
                                            <div className = "action-buttons" >
                                                <Button> Consult </Button>
                                                <Button onClick = {handleViewProfileBtn} > View Profile </Button>
                                            </div>
                                        }
                                    />
                                ) })
                            }
                        </div>
                        <Button> Load More... </Button>    
                    </Section>
                        <Divider/>
                    <Section header = "Categories" >
                        <div className = "categories" >
                        {
                            medical_categories_data.map((item, index) => {
                                return (
                                    <Card 
                                        image = { <img src = {item.imgPath} /> }
                                        imgSize = "small"
                                        title = { <h3> {item.title} </h3> }
                                        actions = { 
                                            <div className = "action-buttons" >
                                                <Button> Find More </Button>
                                            </div>
                                        }
                                    />
                                ) })
                            }
                        </div>
                        <Button> View All </Button>
                    </Section>
                    <Divider/>
                    <Section header = "Vitals and Stats" >
                        <div className="vitals">
                        {
                            vitals_grid.map((item, index) => {
                                return (
                                    <Card 
                                        imgSize = "mid"
                                        image = { <img src = {item.imgPath} /> }
                                        title = { <h3> {item.title} </h3> }
                                        // actions = { 
                                        //     <div className = "action-buttons" >
                                        //         <Button> Find More </Button>
                                        //     </div>
                                        // }
                                    />
                                ) })
                        }
                        </div>
                        <Button> More Details... </Button>
                    </Section>
                    <Divider/>
                </div>
            </SidebarLayout>
        </UserDashboardStyle>
    )
}

export default UserDashboard;