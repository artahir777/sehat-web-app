import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import ConsultStyle from './ConsultStyle';
import BackButton from "../../../components/BackButton/BackButton"
import sidebar from "../../../mockData/user_sidebar"
import medical_categories_data from '../../../mockData/medical_categories_data';
import Card from '../../../components/Card/Card';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
const ConsultNow = () => {
    return (
        <SidebarLayout values = {sidebar} >
            <ConsultStyle>
                <BackButton/>
                <div className = "categories-list" >
                    <h2> Find a Specialist! </h2>
                    <div className = "list" >
                    {
                        medical_categories_data.map( ( item, index ) => {
                            return(
                                <div className = "category" >
                                    <div className = "info" >
                                        <img src= {item.imgPath} alt="" />
                                        <h4> {item.title} </h4>
                                        <p> (123) </p>
                                    </div>
                                    <div className="actions">
                                        <RightCircleOutlined/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </ConsultStyle>
        </SidebarLayout>
    )
}

export default ConsultNow;