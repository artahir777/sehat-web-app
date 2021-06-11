import React, { useState } from 'react';
import {Button, DatePicker, Form, Input} from "antd";

import SidebarLayout from '../../Layouts/SidebarLayout'
import user_sidebar from "../../../mockData/user_sidebar";
import DrFormStyle from './DrFormStyle';
import BackButton from '../../../components/BackButton/BackButton';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { CloseOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons';
import DataTable from '../../../components/DataTable/DataTable';

const {RangePicker} = DatePicker;

const qual_cols = [
    // {
    //     title: "ID",
    //     key: "id",
    //     dataIndex: "id"
    // },
    {
        title: "Institute",
        key: "institute",
        dataIndex: "institute"
    },
    {
        title: "Degree Title",
        key: "deg_title",
        dataIndex: "deg_title"
    },
    {
        title: "Year",
        key: "year",
        dataIndex: "year"
    },
]

const exp_cols = [
    // {
    //     title: "ID",
    //     key: "id",
    //     dataIndex: "id"
    // },
    {
        title: "Hospital/Institute Name",
        key: "ins_name",
        dataIndex: "ins_name"
    },
    {
        title: "Designation",
        key: "designation",
        dataIndex: "designation"
    },
    {
        title: "Years",
        key: "years",
        dataIndex: "years"
    },
]

const DrRegForm = () => {

    const [isCurrentJob, setIsCurrentJob] = useState(false);
    
    const [exp, setExp] = useState([]);
    const [ qual, setQual ] = useState({ institute: "", deg_title: "", year: "2021" });

    const [qualList, setQualList] = useState([]);

    

    const addQual = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setQual({...qual, [name]: val});
    }

    const submitQuals = () => {
        console.clear();
        setQualList({...qualList, qual});
        console.log(qualList);
    }


    return (
        <SidebarLayout values = {user_sidebar} >
            <DrFormStyle>
                <BackButton/>
                <div className="header">
                    <h2>Please Enter your Info</h2>
                    <div className="action-btns">
                        <Button type = "primary" > <SaveOutlined/> Save </Button>
                        <Button > <CloseOutlined/> Cancel </Button>
                    </div>
                </div>
                <div className = "dr-form" >
                    <div className="qualification">
                        <h2>Qualification</h2>
                        <Form className = "form" >
                            <Form.Item label = "Institute Name" >
                                <Input name = "institute" onChange = { addQual } value = {setQual.ins_name}
                                 allowClear />
                            </Form.Item>
                            <Form.Item label = "Degree Name" >
                                <Input name = "deg_title" onChange = { addQual } value = {setQual.deg_title}
                                 allowClear />
                            </Form.Item>
                            <Form.Item label = "Duration" >
                                <input type="date" name="joinDate" onChange = {(e)=> {console.log(e)}} />
                            </Form.Item>
                        </Form>
                        <Button htmlType = "submit" onClick ={submitQuals} > <PlusOutlined/> Add Degree </Button>

                        <DataTable  columns = {qual_cols}  />

                    </div>

                    <div className="experience">
                        <h2>Experience</h2>
                        <Form className = "form" >
                            <Form.Item label = "Institute/Hospital Name" >
                                <Input allowClear />
                            </Form.Item>
                            <Form.Item label = "Designation" >
                                <Input allowClear />
                            </Form.Item>
                            <Checkbox onChange = { (e) => {setIsCurrentJob(e.target.checked)} } > Currently Working here </Checkbox>
                            {
                                isCurrentJob ? 
                                <Form.Item label = "Start Year" >
                                    <DatePicker format = "YYYY/MM" />
                                </Form.Item>
                                : 
                                <Form.Item label = "Duration" >
                                    <RangePicker/>
                                </Form.Item>
                            }
                            <Button htmlType = "submit" > <PlusOutlined/> Add Degree </Button>
                        </Form>
                        <DataTable columns = {exp_cols} />
                    </div>
                </div>
            </DrFormStyle>
        </SidebarLayout>
    )
}

export default DrRegForm
