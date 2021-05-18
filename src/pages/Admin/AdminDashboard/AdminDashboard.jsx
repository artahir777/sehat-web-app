import React from 'react'
import AdminDashboardStyle from './AdminDashboardStyle';
import AdminLayout from '../../Layouts/AdminLayout';
import Card from '../../../components/Card/Card';
import settings_grid from "../../../mockData/settings_grid";
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <AdminLayout>
            <AdminDashboardStyle>
                <div className="dashboard">
                    <div className="options-grid">
                        {
                            settings_grid.map( (item, index) => {
                                return (
                                    <Link to = {item.url} >
                                        <Card 
                                            imgSize = "small"
                                            image = { <img src= {item.icon} /> }
                                            title = {item.title} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </AdminDashboardStyle>
        </AdminLayout>
    )
}

export default AdminDashboard;