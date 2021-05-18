import styled from "styled-components";

const NavbarStyle = styled.div`
    .Navbar{
    height: 80px;
    display: flex;
    justify-content: space-between;
    .logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        h1{
            font-size: 20px;
            margin: 0px 20px;
        }
        img{
            padding: 10px;
            width: 80px;
            height: auto;
        }
    }

    .Navbar-Items{
        margin: auto 20px;
        a:hover{
            color: #f1f1f1;
        }


        ul{
            height: 50px;
            li{
                box-sizing: border-box;
                height: 100%;
                list-style-type: none;
                display: inline-block;
                padding: 10px 20px;
            }
            li:hover{
                background-color: #667788;
            }
        }
        
        
    }

    }
`

export default NavbarStyle;