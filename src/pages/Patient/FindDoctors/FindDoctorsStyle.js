import styled from "styled-components";

const FindDoctorsStyle = styled.div`
    .find-doctors{
        h2{
            margin-top: 20px;
            text-align: center;
        }
        
        .top-doctors{
            margin: auto;
            display: flex;
            flex-direction: row;
        }
        .categories{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
    }
`;

export default FindDoctorsStyle;