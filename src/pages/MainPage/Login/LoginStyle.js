import styled from "styled-components";

const LoginStyle = styled.div`
    .bg-image{
        background-image: url("/images/backgrounds/bg-hospital-03.jpg");
        min-height: 100vh;
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
            width: 40%;
            padding: 50px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
    @media(max-width: 600px){
        .bg-image{
            height: 1000px;
        }
        .tabs{
            top: 200px;
            left: 5%;
            width: 90%;
        }
    }
    
`

export default LoginStyle;