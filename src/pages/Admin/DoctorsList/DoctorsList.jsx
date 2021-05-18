import { DeleteOutlined, LeftOutlined, MailOutlined, MedicineBoxOutlined,
     PhoneOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Rate, Tag, Select, Input } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DataTable from '../../../components/DataTable/DataTable';
import IconButton from '../../../components/IconButton/IconButton';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import doctorsList from '../../../mockData/doctorsList';
import AdminLayout from '../../Layouts/AdminLayout';
import DoctorsListStyle from './DoctorsListStyle';

const {Option} = Select;
const { Search } = Input;

const DoctorsList = () => {

    const columns = [
        {
            title: "ID",
            key: "id",
            dataIndex: "id",
            width: 80,
        },
        {
            title: "Dr. Name",
            key: "dr_name",
            dataIndex: "dr_name",
        },
        {
            title: "License No.",
            key: "license_no",
            dataIndex: "license_no",
        },
        {
            title: "Specialization",
            key: "specialization",
            dataIndex: "specialization",
            render: (specialization) => (
                <>
                    {
                        specialization.map( (sp, index) => {
                            return (
                                <Link>
                                    <Tag style ={{margin: "5px"}} color=  "green" key={sp} >
                                        {sp.toUpperCase()}
                                    </Tag>
                                </Link>
                            );
                        } )
                    }
                </>
            )
        },
        {
            title: "Address",
            key: "address",
            dataIndex: "address",
        },
        {
            title: "Ratings",
            key: "rating",
            dataIndex: "rating",
            render: (rating) => (
                <>
                    {
                        <div> 
                            <Rate style={{fontSize: "10px"}} disabled allowHalf = {true} value = {rating} />
                            {rating}
                        </div>
                    }
                </>
            )
        },
        {
            title: "Contact Info",
            key: "contact",
            dataIndex: "contact",
            render: (contact) => (
                <>
                {
                    <div>
                        <p> <PhoneOutlined/> {contact.phoneNo} </p>
                        <p> <MailOutlined/> {contact.mail} </p>
                    </div>
                }
                </>
            )
        },
        {
            title: "Date Joined",
            key: "date_joined",
            dataIndex: "date_joined",
        },
        {
            title: "Actions",
            key: "actions",
            dataIndex: "actions",
            render: (text, record) => (
                <>
                    {
                        <div className = "action-buttons" >
                            <Button style = {{margin: "5px"}} > <MedicineBoxOutlined/> View Dr. Profile </Button>
                            
                            <Button style = {{margin: "5px"}} 
                            onClick = { (e) => { handleOnDelete(record.id, e); } } >
                                 <DeleteOutlined/> Delete Account </Button>
                            
                            <Button style = {{margin: "5px"}} > <MailOutlined/> Contact Dr. </Button>
                        </div>
                    }
                </>
            )
        },
    ];

    const [data, setData] = useState(doctorsList);

    const handleOnDelete = ( key, e ) => {
        const docs = [...doctorsList];
        docs.splice(key, 1);
        setData(docs);
    }

    return (
        <AdminLayout>
            <DoctorsListStyle>
                <div className="doctors-list">
                    <SectionHeading header = "Doctors List" />
                        <div className="list">
                            <div className="options-bar">
                                <IconButton text = "Refresh" icon = {<SyncOutlined/>}
                                colors = {{color: "#5ed1a5" , bgColor: "#d1ffed"}} 
                                size = "small" shape = "round" />
                                
                                <Search className = "searchbox" placeholder="Search doctors..." enterButton />

                            </div>
                            <DataTable dataSource = {data} columns = {columns} scroll = {{ y: 450 }} />
                        </div>
                </div>
            </DoctorsListStyle>
        </AdminLayout>
    )
}

export default DoctorsList;