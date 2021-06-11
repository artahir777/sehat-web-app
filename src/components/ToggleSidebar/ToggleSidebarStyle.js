import styled from "styled-components";

const ToggleSidebarStyle = styled.div`
    .sidenav {
        height: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #333333;
        overflow-x: hidden;
        padding-top: 30px;
        width: 300px;

    }
    .sidebar-item{
        display: block;
        margin: 0px 5px;
        padding: 12px;
        text-decoration: none;
        font-size: 16px;
        color: #818181;
        img{
            width: 25px;
            height: auto;
            margin: 10px;
        }
    }
    .sidebar-item:hover{
        background-color: #dddddd;
        color: #111111;
    }
    .closebtn{
        position: absolute;
        top: 0;
        right: 10px;
        font-size: 16px;
        margin-left: 50px;
        color: white;
        cursor: pointer;
    }
    .toggle-btn{
        display: inline-block;
        padding: 1px 5px;
        font-size: 30px;
        margin: 0px 15px 20px;
    }
    .toggle-btn:hover{
        cursor: pointer;
        background-color: #cccccc;
        transition: 0.3s;
    }
`;

export default ToggleSidebarStyle;