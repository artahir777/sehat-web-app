import React from 'react'
import SectionWithContentStyle from './SectionWithContentStyle';

const SectionWithContent = (props) => {
    return (
        <SectionWithContentStyle  >
            <div className="section" id = {props.id} >
                <div className="text">
                    <h3 className = "title" > {props.heading} </h3>
                    <p className = "subtitle" > {props.text} </p>
                </div>
                <div className="image">
                    <img className = "img" src= {props.image} alt=""/>
                    {props.buttons}
                </div>
            </div>
        </SectionWithContentStyle>
    )
}

export default SectionWithContent;