import React from "react"
import {Fade, Slide} from "react-reveal"
import NavbarLayout from "../../Layouts/NavbarLayout";
import HomeStyle from "./HomeStyle";
import IconButton from "../../../components/IconButton/IconButton";
import { AppstoreOutlined, DownloadOutlined, EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

import {HashLink as Link} from "react-router-hash-link";
import Card from "../../../components/Card/Card";
import services from "../../../mockData/services";
import { useHistory } from "react-router-dom";

const Section = (props) => {
    return (
        <div className= {`section ${props.class}`} id = {props.Id} >
            <div className="top">
                <Slide left >
                    <div className="text">
                        <h2>{props.heading}</h2>
                        <p>{props.text}</p>
                    </div>
                </Slide>
                <Slide right >
                    <div className="image">
                        {props.image}
                    </div>
                </Slide>
            </div>
            { props.scrollBtn && <div className="scroll-btn" >
                <Link smooth to = {props.scrollTo} > {props.scrollBtn} </Link>
            </div> }
        </div>
    )
}

const Home = () => {
    const history = useHistory();
    return (
        <NavbarLayout>
            <HomeStyle>
            <div className = "wrapper">
                <div className="cover">
                    <div className="content">
                        <h1>All your medical needs meet here!</h1>
                        <div className="buttons">
                            <Link smooth to = "/sign-in#form" >
                            <IconButton colors = {{color: "#d4e4f4", bgColor: "#5391f5"}} size = "large"
                            icon = {<PlusOutlined />} text = "Sign Up free" />
                            </Link>
                            <Link smooth to = "#about-SEHAT" >
                            <IconButton colors = {{color: "#fcfcfc", bgColor: "#e5e55d"}} size = "large"
                            icon = {<AppstoreOutlined />} text = "Explore" />
                            </Link>
                        </div>
                    </div>
                </div>
                
                <Section Id = "about-SEHAT" heading = "What is SEHAT" 
                text = {<div> <span className = "sehat" > SEHAT (Smart &amp; Economical Healthcare using Advanced Technology) </span>
                    is a complete solution to all your medical needs. 
                    Find a doctor online and Consult now! </div>}
                    image = {<img src="/images/logo.png" alt="SEHAT Logo" />}
                    scrollBtn = {<div>
                        <span>Download Now!</span><DownloadOutlined/>
                    </div>}
                    scrollTo = "#download-now" />

                <Section Id = "download-now" class = "download" heading = "Download Now!"
                text = "Download Now on your Smartphone. Its free, reliable, secure &amp; full of features"
                image = {<div className = "images" >
                    <img src = "/images/why-sehat.jpg" alt = "Features" />
                    <div className = "download-btns" >
                         <img src = "/images/appstore.png" />
                         <img src = "/images/playstore.png" /> </div>
                </div>}  />
                
                <div className="services">
                    <h2>Features and Services!</h2>
                    <div className="services-grid">
                            {
                                services.map( (item, index) => {
                                    return (
                                        <Card className = "card"
                                        imgSize = "small"
                                        image = {<img src = {item.imgUrl} />}
                                        title = { <h3> {item.title} </h3> }
                                        actions = { <a> Learn More </a> }
                                        />
                                    );
                            } )}
                    </div>
                </div>
                <div className="about">
                    <Fade bottom>
                    <h2>About Us!</h2>
                    <p>Find Out More About Us, Our Mission, Goals and Objectives! </p>
                    <Button onClick = {() => history.push("/about")} > Find More! <EllipsisOutlined/> </Button>
                    </Fade>
                </div>
            </div>
        </HomeStyle>
        </NavbarLayout>
    );
}

export default Home;