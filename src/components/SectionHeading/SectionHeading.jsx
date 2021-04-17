import React from "react"
import SectionHeadingStyle from "./SectionHeadingStyle";

function SectionHeading (props)
{
    return (
        <SectionHeadingStyle>
            <div className = "horizontal-rule"  >
                <img className = "leaf" src="/images/leaf for hr.png" alt="Leaf Icon"/>
                    {/* <hr/> */}
                <h2 className = "heading" > {props.header} </h2>
                    {/* <hr/> */}
                <img className = "leaf" src="/images/leaf for hr.png" alt="Leaf Icon"/>
        </div>
        </SectionHeadingStyle>
    );
}

export default SectionHeading;