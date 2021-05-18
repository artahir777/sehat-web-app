import styled from "styled-components";



const HomeStyle = styled.div`
    .wrapper{

    /* background-image: url("/images/backgrounds/bg-hospital-03.jpg"),
    url("/images/backgrounds/bg-hospital-01.jpg");
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */

    .cover{
        background-image: url("/images/backgrounds/cover 3.jpg");
        height: 90vh;
        background-size: cover;
        text-align: center;
        color: white;
        .content{
            h1{
                font-size: 36px;
            }
            display: flex;
            flex-direction: column;
            margin: auto;
            align-items: center;
            padding: 200px;
            .buttons{
                display: flex;
                flex-direction: row;
            }
        }
    }

    }
`

export default HomeStyle;