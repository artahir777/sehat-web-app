import { ArrowLeftOutlined } from '@ant-design/icons'
import React from 'react'
import { useHistory } from 'react-router'
import { BackButtonStyle } from './BackButtonStyle'

const BackButton = () => {
    const history = useHistory();
    const goBack = () => {
        return history.goBack();
    }
    return (
        <BackButtonStyle>
            <button onClick = {goBack} >
                <ArrowLeftOutlined/>
                Back
            </button>
            
        </BackButtonStyle>
    )
}

export default BackButton
