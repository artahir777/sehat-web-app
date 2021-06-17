import styled from "styled-components";

const NavbarStyle = styled.div`
    .side-menu{
        display: none;
    }
    .Navbar{
    height: 80px;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 2px 2px #eeeeee;
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
    .hamburger{
        padding: 20px 10px;
        font-size: 25px;
        color: #acacac;
        position: absolute;
        right: 20px;
        border: none;
        border-radius: 25%;
        display: none;
    }
    .hamburger:hover{
        background-color: #eeeeee;
        color: #3aadba;
        cursor: pointer;
        transition: 0.3s;
    }
    .Navbar-Items{
        .closebtn{
            display: none;
        }
        margin: auto 20px;
        a:hover{
            color: #f1f1f1;
        }


        ul{
            /* height: 50px; */
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
    @media(max-width: 768px){
        .Navbar{
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
            .hamburger{
                display: inline-block;
                padding: 5px;
                margin: 15px auto;
            }
            .Navbar-Items{
                .closebtn{
                display: ${props => props.menuOpen ? "block" : "none"};
                position: absolute;
                top: 0;
                right: 10px;
                font-size: 16px;
                margin-left: 50px;
                color: #333333;
                cursor: pointer;
            }
            display: ${props => props.menuOpen ? "block" : "none"};
            flex-direction: column;
            z-index: 3;
            margin: 0;
            align-items: center;
            justify-content: space-evenly;
            background-color: #f1f1f1;
            position: absolute;
            width: 100%;
            top: 80px;
            left: 0;
            padding: 8px;
            box-sizing: border-box;
            ul {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            }
        }
    }
`

export default NavbarStyle;