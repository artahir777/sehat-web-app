import styled from "styled-components";

const SidebarStyle = styled.div`
        max-width: ${props => props.size === "small" ? "70px" : "300px" };
        margin: 0px;
        padding: 0px;
    .sidebar{
        color: #dddddd;
        height: 100vh;
        margin: 0px;
        background-color: rgba(50, 50, 50, 0.7);
        li:hover{
            background-color:rgba(30, 30, 30, 0.5);
        }
        ul{
        padding: 10px;
        list-style-type: none;
        li{
            padding: 10px;
            img{
                width: ${props => props.size === "small" ? "15px" : "25px" };
                height: auto;
                margin: ${props => props.size === "small" ? "5px" : "15px 10px" };
            }
        }
        
        
    }
    
    }
`;

export default SidebarStyle;