import React from "react"
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import NavbarLayout from "../../Layouts/NavbarLayout";
import HomeStyle from "./HomeStyle";
import SectionWithContent from "../../../components/SectionWithContent/SectionWithContent";
import IconButton from "../../../components/IconButton/IconButton";
import { AppstoreOutlined, PlusOutlined } from "@ant-design/icons";



const Home = () => {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus quaerat blanditiis architecto perferendis aliquam numquam beatae sed culpa? Similique dolor laborum officiis impedit necessitatibus dolore ducimus, mollitia ex deleniti!"
    return (
        <NavbarLayout>
            <HomeStyle>
            <div className = "wrapper">
            <div className="cover">
                    <div className="content">
                        <h1>All your medical needs meet here!</h1>
                        <div className="buttons">
                            <IconButton colors = {{color: "#fcfcfc", bgColor: "#e5e55d"}} size = "large"
                            icon = {<AppstoreOutlined />} text = "Explore" />

                            <IconButton colors = {{color: "#d4e4f4", bgColor: "#5391f5"}} size = "large"
                            icon = {<PlusOutlined />} text = "Sign Up free" />
                        </div>
                    </div>
                </div>
                <SectionWithContent 
                    heading = "Download Now on your Phone"
                    text = {lorem}
                    image = "/images/phone.jpg"
                    buttons = {
                        <div>
                            <img src = "/images/appstore.png" alt = "appstore button" />
                            <img src = "/images/playstore.png" alt = "playstore button" />
                        </div>
                    }
                />

                <SectionHeading header = "Why SEHAT?" />
                <SectionWithContent
                    heading = "All your medical needs meet here!"
                    text = {lorem}
                    image = "/images/why-sehat.jpg"
                />
                
            </div>
        </HomeStyle>
        </NavbarLayout>
    );
}

export default Home;