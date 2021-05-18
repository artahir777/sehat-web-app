import styled from "styled-components";

const PersonalInfoStyle = styled.div`
    .personal-info{
        .back-button{
            margin: 10px;
            align-self: left;
        }
        .info-table{
            border: 1px solid #dddddd;
            margin: 20px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            .header{
                font-size: 20px;
                display: flex;
                justify-content: space-around;
            }
            .field{
                display: flex;
                justify-content: space-around;
                align-items: center;
                h3{
                    font-size: 16px;
                }
            }
        }
    }
`;

export default PersonalInfoStyle;