import styled from "styled-components";

const DrFormStyle = styled.div`
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        .action-btns{
            align-self: flex-end;
            margin-right: 20px;
            display: flex;
            column-gap: 20px;
        }
    }
    .dr-form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        .qualification, .experience{
            padding: 20px 50px;
            .form{
                margin-bottom: 40px;
            }
        }

    }
`;

export default DrFormStyle;