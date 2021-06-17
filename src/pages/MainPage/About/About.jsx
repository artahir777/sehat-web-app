import React from 'react'
import AboutStyle from './AboutStyle'
import NavbarLayout from "../../Layouts/NavbarLayout";
import { CheckOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Slide, Fade } from 'react-reveal';
const About = () => {
    return (
        <NavbarLayout>
            <AboutStyle>
                <div className="cover">
                </div>
                <h1 className = "heading-about" >About Us</h1>
                <Fade bottom >
                    <div className="about">
                        <h1>What is SEHAT?</h1>
                        <p>
                        <span className = "sehat" >SEHAT (Smart &amp; Economical Healthcare using Advanced
                         Technology) </span>is developed for the inexpensive consultancy about your health monitoring
                        &amp; treatment of diseases while at home from the well known, 
                        reliable, reputed and experienced medical doctors.
                        </p>
                    </div>
                </Fade>
                <div className="details">
                    <Slide left >
                        <div className="features">
                            <h1>Highlights</h1>
                            <ul>
                                <li> <CheckOutlined/> No chance of fake or incompetent doctor 
                                due to the strict policy</li>
                                <li> <CheckOutlined/> 24/7 round the clock service</li>
                                <li> <CheckOutlined/> Face to face chatting</li>
                                <li> <CheckOutlined/> Medical history of the patient is maintained and 
                                    available to any selected doctor</li>
                                <li> <CheckOutlined/> Payment via Jazz Cash after the consultancy</li>
                            </ul>
                        </div>
                    </Slide>
                    
                    <Slide right >
                        <div className="future-work">
                            <h1>Coming Soon</h1>
                            <ul>
                                <li> <ArrowRightOutlined/> Payment via easy paisa</li>
                                <li> <ArrowRightOutlined/> Availability of well known degree holder Nutritionist, 
                                    Physiotherapist, Psychologist, Hakeem, and Homeopathic specialist</li>
                                <li> <ArrowRightOutlined/> Verified collection of health tips</li>
                                <li> <ArrowRightOutlined/> Guidance for the suitable medical specialist</li>
                                <li> <ArrowRightOutlined/> Auto alert when your required doctor is available</li>
                                <li> <ArrowRightOutlined/> Asynchronous treatment: Submit your health
                                problem via text or voice or upload lab reports
                                    to your doctor to get the transcript of doctor when available.</li>
                            </ul>
                        </div>
                    </Slide>
                </div>
            </AboutStyle>
        </NavbarLayout>
    )
}

export default About
