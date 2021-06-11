import styled from "styled-components";

const MedicalHistoryStyle = styled.div`
    .medical-history{
        min-height: 100vh;
        .header{
            display: flex;
            justify-content: center;
            column-gap: 30px;
            margin-bottom: 30px;
        }
        .list{
            max-width: 90%;
            margin: auto;
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            .list-item{
                border: 1px solid #eeeeee;
                padding: 5px;
                display: flex;
                justify-content: space-between;
                .block{
                    display: flex;
                    flex-direction: column;
                    .info{
                        display: flex;
                        align-content: center;
                        column-gap: 5px;
                    }
                }
            }
            .list-item:hover{
                box-shadow: 3px 3px 3px 3px #eeeeee;
                transition: 0.3s;
            }
        }
    }
`;

export default MedicalHistoryStyle;