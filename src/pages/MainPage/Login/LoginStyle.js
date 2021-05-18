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

        
    }
    .tabs{
            background-color: rgba(46, 201, 194, 0.7);
            margin: auto;
            position: absolute;
            top: 100px;
            left: 30%;
            z-index: 2;
            width: 30%;
            padding: 50px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
`

export default LoginStyle;