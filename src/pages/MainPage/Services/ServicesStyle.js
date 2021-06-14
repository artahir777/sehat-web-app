import styled from "styled-components";

const ServicesStyle = styled.div`
    .services-grid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        .card{
            height: 300px;
            justify-content: space-between;
        }
    }
`;

export default ServicesStyle;