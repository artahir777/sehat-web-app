import React from 'react'
import SidebarLayout from '../../Layouts/SidebarLayout';
import FindDoctorsStyle from './FindDoctorsStyle';
import user_sidebar from "../../../mockData/user_sidebar";
import BackButton from "../../../components/BackButton/BackButton"
import Card from "../../../components/Card/Card"
import SectionHeading from "../../../components/SectionHeading/SectionHeading"
import medical_categories_data from '../../../mockData/medical_categories_data';
import MySlider from '../../../components/MySlider/MySlider';

const FindDoctors = (props) => {

    
    return (
        <SidebarLayout values = {user_sidebar} >
            <FindDoctorsStyle>
            <BackButton/>
                <div className="find-doctors">
                    <h2> Top Doctors </h2>
                    <MySlider  slidesToScroll = {3} slidesToShow = {3} >
                    {
                        [1,2,3,4,5,6,7,8,9,10].map( (item, index) => {
                            
                            return(
                                <>
                                <h4>{index+1}</h4>
                                <Card imgSize = "mid" 
                                image = {<img src = "/images/color-icons/person.png" />}
                                title = {<h3>Dr. John</h3>} rating = {4} />
                                </>
                            );
                        } )
                    }
                    </MySlider>
                    <h2>Search by Categories</h2>
                    <div className="categories">
                    {
                        medical_categories_data.map((item, index) => {
                            return (
                                <Card 
                                    image = { <img src = {item.imgPath} /> }
                                    imgSize = "small"
                                    title = { <h3> {item.title} </h3> }
                                    actions = { 
                                        <div className = "action-buttons" >
                                            
                                        </div>
                                    }
                                />
                            ) })
                        }
                    </div>
                </div>
            </FindDoctorsStyle>
        </SidebarLayout>
    )
}

export default FindDoctors;