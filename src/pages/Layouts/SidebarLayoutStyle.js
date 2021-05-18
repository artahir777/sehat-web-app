import styled from "styled-components";

const SidebarLayoutStyle = styled.div`
    .container{
        display: grid;
        grid-template-columns: 1fr 5fr;
        .content{
            display: flex;
            flex-direction: column;
        }
        .avatar{
            margin: 20px;
            flex-grow: 1;
            max-width: 200px;
        }
    }
`;

export default SidebarLayoutStyle;