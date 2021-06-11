import { Button, Collapse, Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react'
import BackButton from '../../../components/BackButton/BackButton';
import IconButton from '../../../components/IconButton/IconButton';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import profile_sidebar from '../../../mockData/profile_sidebar';
import SidebarLayout from '../../Layouts/SidebarLayout';
import PrescriptionsStyle from './PrescriptionsStyle';
import prescriptions_list from "../../../mockData/prescriptions_list";

const {Panel} = Collapse;

const Prescription = (props) => {
    const {imgPath, drName, date, time, illness} = props;
    return (
        <div className = "prescription" >
            <div className="left">
                <div className="avatar">
                    <Avatar icon = { <img src = {imgPath} /> } />
                </div>
                <div>
                    <h4>{drName}</h4>
                    <p>{date} at {time}</p>
                </div>
            </div>
            <div className="right">
            {
                illness.map( ( il, index ) => {
                    return (
                        <Tag color = "orange" >
                            {il}
                        </Tag>
                    )
                })
            }
            </div>
        </div>
    );
}

const Details = (props) => {
    const {medicines} = props;
    return (
        <div className="prescription-details">
            <div className="description">
                <h3>Description:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium exercitationem</p>
            </div>
            <div className="medicine-list">
                <h3>Prescribed Medicine:</h3>
                {
                    medicines.map( ( med, index ) => {
                        return (
                            <div className = "medicine" >
                                <p>{med.name}</p>
                                <p>{med.details}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

const Prescriptions = (props) => {
    
    return (
        <SidebarLayout values = {profile_sidebar} >
            <PrescriptionsStyle>
                <div className="prescriptions">
                    <BackButton/>
                    <h2>Prescriptions</h2>
                    <div className="prescriptions-list">
                        <Collapse bordered = {false} className = "collapse" >
                        {
                            prescriptions_list.map( (pres, index) => {
                                return (
                                    <Panel className = "panel" header = { <Prescription imgPath = {pres.imgPath}
                                     drName = {pres.drName} date = {pres.date}
                                     time = {pres.time} illness = {pres.illness} />} key = {String(index+1)} >
                                        <Details medicines = {pres.medicines} />
                                    </Panel>
                                )
                            })
                        }
                        </Collapse>
                    </div>

                </div>
            </PrescriptionsStyle>
        </SidebarLayout>
    )
}

export default Prescriptions;