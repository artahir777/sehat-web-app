import styled from "styled-components";

const SectionWithContentStyle = styled.div`
    .section{
        background-color: rgba(230, 230, 230, 0.8);
        margin: 50px 10px 0px ;
        padding: 10px 20px;
        display: flex;
        flex-direction: row;
        .text{
            width: 40%;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            .title{
                font-size: 20px;
            }
            .subtitle{
                font-size: 15px;
            }
        }

        .image{
            width: 50%;
            display: flex;
            flex-direction: column;
            margin: 20px;
            align-items: center;
            
            .img{
                max-width: 100%;
                margin: 20px 20px 0px;
            }
            img{
                margin: 10px;
            }

        }
    }
`;

export default SectionWithContentStyle;