import styled from "styled-components";

const DoctorsListStyle = styled.div`
    
    .doctors-list{
        .list{
            .options-bar{
                background-color: #597cff;
                padding: 30px;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                .searchbox{
                    max-width: 300px;
                }
            }
        }
    }
    .action-buttons{
                display:flex;
                flex-direction: column;
                align-items: center;
            }
`;

export default DoctorsListStyle;