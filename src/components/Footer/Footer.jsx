import { AccountBookOutlined, BookOutlined, EnvironmentFilled, FileOutlined, HomeOutlined, MailOutlined, PhoneOutlined, QuestionOutlined, TagOutlined } from '@ant-design/icons'
import React from 'react'
import FooterStyle from './FooterStyle'

const Footer = () => {
    return (
        <FooterStyle>
            <div className="footer">
                <div className="footer-top">
                    <div className="about">
                        <h2>About Us</h2>
                        <p>SEHAT (Smart & Economical Healthcare using Advanced Technology) is 
                            developed for the inexpensive consultancy about your health monitoring & 
                            treatment of diseases while at home from the well known, reliable, 
                            reputed and experienced medical doctors.</p>
                    </div>
                    <div className="quick-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li> <HomeOutlined/> Home </li>
                            <li> <QuestionOutlined/> FAQs</li>
                            <li> <BookOutlined/> Privacy Policy</li>
                            <li> <AccountBookOutlined/> Terms and Conditions</li>
                        </ul>
                    </div>
                    <div className="contact-info">
                        <h2>Contact Info</h2>
                        <ul>
                            <li> <EnvironmentFilled/> Address: COMSATS University Islamabad, Lahore Campus. </li>
                            <li> <MailOutlined/> Our Email: artahir777@gmail.com </li>
                            <li> <PhoneOutlined/> Phone: 0334-9938727 </li>
                            <li> <FileOutlined/> Fax: 111-001-007 </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className = "copyright" >COPYRIGHT &copy; 2020. Reproduction of this website's content
                        without express written permission from this site is strictly prohibited.</p>
                    <div className = "logo" >
                        <p  >Powered By: Abdul Rehman TahiR</p>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer;
