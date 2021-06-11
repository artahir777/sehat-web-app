import styled from "styled-components";

const SidebarLayoutStyle = styled.div`
    .container{
        display: flex;
        flex-direction: column;
        .top-navbar{
                background-color: #eeeeee;
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;
                display: grid;
                grid-template-columns: 1fr 12fr;
                .sidebar{
                    margin: 20px auto;
                }
            }
        .content{
            margin-top: 100px;
        }
    }
`;

export default SidebarLayoutStyle;