import React from 'react'
import SliderStyle from './SliderStyle'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = (props) => {

    
    const settings = {
        autoplay: props.autoplay,
        autoplaySpeed: 3000,
        speed: props.speed,
        dots: props.dots,
        infinite: props.isInfinite,
        slidesToShow: props.slidesToShow,
        slidesToScroll: props.slidesToScroll,
      };
    return (
        <SliderStyle arrowColor = {props.arrowColor} >
            <Slider {...settings} >
                {props.children}
            </Slider>
        </SliderStyle>
    )
}

export default MySlider;