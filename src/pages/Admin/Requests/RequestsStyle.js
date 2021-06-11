import styled from "styled-components";

const RequestsStyle = styled.div`
    .message{
        display: flex;
        flex-direction: column;
        .details{
            display: flex;
            flex-direction: row;
            .username{
                margin: 0px 20px;
                display: flex;
                flex-direction: column;
                .name{
                    margin-bottom: 0px; 
                }
                .date{
                    margin-top: 0px;
                    font-size: 12px;
                }
            }
        }
        .content{
            .message{
                width: 100%;
            }
        }
    }
    .requests{
        .request-tabs{
        }
    }
`;

export default RequestsStyle;