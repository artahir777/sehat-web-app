import styled from "styled-components";

const AboutStyle = styled.div`
    background-image: url("/images/backgrounds/leaves-transparent.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .sehat{
        text-shadow: 2px #37b86a;
        font-weight: bold;
    }
    .cover{
        position: relative;
        height: 300px;
        background-image: url("/images/backgrounds/about.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(4px);
        -webkit-filter: blur(4px);
        
    }
    .heading-about{
            position: absolute;
            top: 100px;
            left: 40%;
            z-index: 2;
            color: white;
        }
    h1{
        margin: auto 50px;
        font-size: 36px;
    }
    .about{
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
        justify-content: center;
        p{
            padding: 0px 30px;
            font-size: 20px;
        }
    }
    .details{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        .features, .future-work{
            margin: 20px auto;
            width: 45%;
            ul{
                margin: auto 20px;
                list-style-type: none;
                li{
                    text-shadow: 1px 1px #dddddd;
                    color: #aaaaaa;
                    font-size: 16px;
                    margin: 10px;
                }
            }
        }
    }
    @media( max-width: 600px ){
        .heading-about{
            left: 20%;
        }
        .about{
            align-self: stretch;
            padding: 20px;
        }
        .details{
            display: flex;
            flex-direction: column;
            
            .features, .future-work{
                width: 100%;

            }
        }
    }
`;

export default AboutStyle;