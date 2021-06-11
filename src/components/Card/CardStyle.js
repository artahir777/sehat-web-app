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
        flex-direction: ${props => props.type === "horizontal" ? "row" : "column"};
        margin: 10px;
        justify-content: space-evenly;
        text-align: center;
        border: 1px solid #dddddd;
        padding: 10px;
        .image{
            img{
                width: ${ props => getImgSize(props.imgSize) };
                height: auto;
            }
        }
        .header .more-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }
        .actions {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
    }
    .card:hover{
        border: none;
        box-shadow: #eeeeee 3px 3px 5px 5px;
        transition: 0.3s;
    }
`;

export default CardStyle;