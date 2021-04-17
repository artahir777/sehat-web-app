import styled from "styled-components";

const LoginStyle = styled.div`
    .bg-image{
        background-image: url("/images/backgrounds/bg-hospital-03.jpg");
        height: 700px;
        filter: blur(4px);
        -webkit-filter: blur(4px);
        
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        .ant-tabs{
            margin: auto;
            position: absolute;
            top: 40%;
            left: 30%;
            z-index: 2;
            width: 30%;
            padding: 10% 20px;
        }
    }
    
`

export default LoginStyle;