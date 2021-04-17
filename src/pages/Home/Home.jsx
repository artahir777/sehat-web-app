import React from "react"
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import NavbarLayout from "../Layouts/NavbarLayout";
import HomeStyle from "./HomeStyle";
import SectionWithContent from "../../components/SectionWithContent/SectionWithContent";



const Home = () => {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus quaerat blanditiis architecto perferendis aliquam numquam beatae sed culpa? Similique dolor laborum officiis impedit necessitatibus dolore ducimus, mollitia ex deleniti!"
    return (
        <NavbarLayout>
            <HomeStyle>
            <div className = "wrapper">
            
                <SectionHeading header = "Download Now!" />
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