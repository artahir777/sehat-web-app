import React from 'react'
import Card from '../../../components/Card/Card';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import NavbarLayout from '../../Layouts/NavbarLayout';
import ServicesStyle from './ServicesStyle';
import services from "../../../mockData/services";

const Services = () => {
    return (
        <NavbarLayout>
            <ServicesStyle>
                <div className="services">
                    <SectionHeading header = "Our Services" />
                    <div className="services-grid">
                        {
                            services.map( (item, index) => {
                                return (
                                    <Card
                                    imgSize = "small"
                                    image = {<img src = {item.imgUrl} />}
                                    title = { <h3> {item.title} </h3> }
                                    actions = { <a> Learn More </a> }
                                    />
                                );
                        } )}
                    </div>
                </div>
            </ServicesStyle>
        </NavbarLayout>
    )
}

export default Services;