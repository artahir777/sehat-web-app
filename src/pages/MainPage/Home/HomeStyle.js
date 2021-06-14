import styled from "styled-components";

const HomeStyle = styled.div`
    .sehat{
        color: #37b86a;
        text-shadow: 2px #37b86a;
        font-weight: bold;
    }
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
    .download{
        background-image: url("/images/white-leaves-bg.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .images{
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .download-btns{
                display: flex;
                column-gap: 10px;
                img{
                    cursor: pointer;
                    margin: 10px;
                    width: 150px;
                    height: auto;
                }
            }
        }
    }
    .section{
        height: 100vh;
        margin: 20px auto;
        padding: 50px 30px 0px;
        display: flex;
        flex-direction: column;
        .top{
            display: flex;
        justify-content: space-evenly;
        align-items: center;
        .text{
            max-width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            justify-content: space-around;
            .section-heading{
                font-size: 24px;
            }
            p{
                padding: 10px 40px;
                font-size: 20px;
            }
        }
        img{
            max-width: 300px;
            height: auto;
            margin: auto;

        }
        }
        .scroll-btn{
            margin: auto;
            cursor: pointer;
            padding: 5px;
            box-shadow: 2px 2px 2px 2px #eeeeee;
        }
    }
    .services{
        background-image: url("/images/backgrounds/cover.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 30px 0px;
        h2{
            font-size: 24px;
            text-align: center;
        }
        .services-grid{
            max-width: 90%;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 20px;
            .card{
                background-color: white;
                height: 300px;
                justify-content: space-between;
            }
        }
    }
    .about{
        height: 100vh;
        background-image: url("/images/backgrounds/white-grad.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: flex-end;
        justify-content: center;
    }
    }
    
`

export default HomeStyle;