import React from 'react'
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import AdminLayout from '../../Layouts/AdminLayout';
import RequestsStyle from './RequestsStyle';

const Requests = () => {
    return (
        <AdminLayout>
            <RequestsStyle>
                <div className="requests">
                    <SectionHeading header= "Requests and Approvals" />
                </div>
            </RequestsStyle>
        </AdminLayout>
    )
}

export default Requests;