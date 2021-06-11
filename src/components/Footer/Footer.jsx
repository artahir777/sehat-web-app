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
                        <p>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Sint, dignissimos illum? Fugiat assumenda totam eaque.</p>
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
