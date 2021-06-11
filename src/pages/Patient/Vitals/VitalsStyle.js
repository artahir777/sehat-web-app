import styled from "styled-components";

const VitalsStyle = styled.div`
    .vitals{
        .back-button, .edit-button{
            margin: 10px;
        }
        .vitals-grid{
            margin: auto;
            max-width: 90%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
    }
`;

export default VitalsStyle;