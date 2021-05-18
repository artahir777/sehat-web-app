import styled from "styled-components";

const getImgSize = (imgSize) => {
    if (imgSize == "small")
        return "100px";
    if (imgSize == "mid")
        return "200px";
    if (imgSize == "large")
        return "300px";
    else
        return "250px";
}

const CardStyle = styled.div`
    .card{
        
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        margin: 10px;
        justify-content: space-evenly;
        text-align: center;
        border: 1px solid #dddddd;
        border-radius: 5px;
        padding: 10px;
        .image{
            img{
                width: ${ props => getImgSize(props.imgSize) };
                height: auto;
            }
        }
    }
`;

export default CardStyle;