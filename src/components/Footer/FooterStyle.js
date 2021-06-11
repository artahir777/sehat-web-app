import styled from "styled-components";

const FooterStyle = styled.div`
    .footer{
        margin-top: 20px;
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
                max-width: 35%;
            }
            .quick-links .contact-info {
                max-width: 30%;
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
`;

export default FooterStyle;