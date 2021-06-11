import styled from "styled-components";

const SliderStyle = styled.div`
    max-width: 700px;
    padding: 20px;
    box-sizing: content-box;
    .slick-arrow{
        background-color: ${props => props.arrowColor};
    }
`;

export default SliderStyle;