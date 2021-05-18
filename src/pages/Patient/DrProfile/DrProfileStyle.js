import styled from "styled-components";

const DrProfileStyle = styled.div`
    .dr-profile{
        .back-button{
            margin: 10px;
        }
        .info-header{
            /* box-shadow: 2px 5px 8px #888888; */
            border: 1px solid #dddddd;
            margin: 20px;
            padding: 20px;
            display: flex;
            justify-content: space-evenly;
            .info{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            img{
                padding: 10px 0px 0px;
                box-shadow: 2px 5px 5px #dddddd;
                border-radius: 50%;
                max-width: 250px;
                height: auto;
            }
            .status{
                color: greenyellow;
            }
            .options-buttons{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }
        .basic-info{
            margin: 30px;
            .info-collapse{
                background-color: #ffffff;
            }
        }
        .reviews{
            margin: 10px;
            .reviews-list{
                margin: 10px;
            }
        }
    }
`;

export default DrProfileStyle;