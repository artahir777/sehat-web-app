import React from 'react'
import { Link } from 'react-router-dom';
import ButtonStyle from './ButtonStyle';

const IconButton = (props) => {
    return (
        <ButtonStyle colors = {props.colors} size = {props.size} shape = {props.shape} >
            <button onClick = {props.handleClick} className = "button" >
                { props.icon } {props.text}
            </button>
        </ButtonStyle>
    )
}

export default IconButton;