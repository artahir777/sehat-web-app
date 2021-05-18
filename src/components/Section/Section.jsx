import { Divider } from 'antd';
import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading';
import SectionStyle from './SectionStyle';

const Section = (props) => {
    return (
        <SectionStyle>
            <div className = "section" >
                <SectionHeading header = {props.header} />
                {props.children}
            </div>
        </SectionStyle>
    )
}

export default Section;