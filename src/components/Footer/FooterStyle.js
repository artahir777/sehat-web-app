import styled from "styled-components";

const FooterStyle = styled.div`
    .footer{
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        .footer-top{
            padding: 100px 30px;
            display: flex;
            background-color: #111111;
            color: #eeeeee;
            justify-content: space-evenly;
            h2{
                color: #eeeeee;
                display: inline-block;
                border-bottom: 1px solid #eeeeee;
            }
            .about{
                width: 35%;
            }
            .quick-links .contact-info {
                width: 30%;
            }
            ul{
                list-style-type: none;
                li{
                    margin: 15px 5px;
                }
            }
        }
        .footer-bottom{
            max-height: 200px;
            background-color: #333333;
            color: #dddddd;
            vertical-align: middle;
            .copyright{
                margin: 20px;
                margin-left: 100px;
                display: inline-block;
            }
            .logo{
                display: inline-block;
                margin-left: 50px;
            }
        }
    }
    @media (max-width: 600px)
    {
        .footer{
            .footer-top{
                display: block;
                /* flex-direction: column; */
                .about, .quick-links, .contact-info{
                    width: 100%;
                    display: block;
                }
            }
            .footer-bottom{
                display: flex;
                flex-direction: column;
                .copyright{
                    align-self: stretch;
                    margin: 10px;
                }
                .logo{
                    align-self: flex-end;
                    margin: 0px 20px;
                }
            }
        }
    }
`;

export default FooterStyle;