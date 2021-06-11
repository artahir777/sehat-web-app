import styled from "styled-components";

const MyLayoutStyle = styled.div`
    .sidenav {
        height: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        padding-top: 30px;
        width: 300px;
    }
    .sidebar-item{
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 16px;
        color: #818181;
        display: block;
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
        padding: 2px 5px;
        position: absolute;
        top: 0;
        left: 10px;
        font-size: 30px;
    }
    .toggle-btn:hover{
        cursor: pointer;
        background-color: #eeeeee;
        transition: 0.3s;
    }
`;

export default MyLayoutStyle;