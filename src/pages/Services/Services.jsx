import React from 'react'
import Card from '../../components/Card/Card';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import NavbarLayout from '../Layouts/NavbarLayout';
import ServicesStyle from './ServicesStyle';

const Services = () => {
    return (
        <NavbarLayout>
            <ServicesStyle>
                <div className="services">
                    <SectionHeading header = "Our Services" />
                    <div className="services-grid">
                        {[1, 2].map( (item, index) => {
                            return (
                                <Card
                                type = "horizontal"
                                image = {<img src = "/images/services/doctor-logo.png" />}
                                title = { <h3> Find a Doctor </h3> }
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