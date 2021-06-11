import styled from "styled-components";

const setSize = (size) => {
    if (size === "small" )
        return "3px";
    else if (size === "medium")
        return "5px 7px";
    else if (size === "large")
        return "8px 10px";
    else
        return "5px 7px";
}

const ButtonStyle = styled.div`

    .button{
        display: inline-block;
        margin: 5px;
        padding: ${ props => setSize(props.size) };
        color: ${props => props.colors.color };
        background-color: ${props => props.colors.bgColor };
        border: 1px solid ${ props => props.bgColor };
        border-radius: ${ props => props.shape === "round" ? "3px" : "none" };
    }
    .button:hover{
        color: ${ props => props.colors.bgColor };
        background-color: ${ props => props.colors.color };
        border: 1px solid ${ props => props.bgColor };
        cursor: pointer;
        transition: 0.3s;
    }

`;

export default ButtonStyle;