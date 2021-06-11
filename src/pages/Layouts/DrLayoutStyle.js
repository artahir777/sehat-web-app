import styled from "styled-components";

const DrLayoutStyle = styled.div`
    
    .layout{
        min-height: 100vh;
        .top-nav{
            max-height: 100px;
            padding: 10px 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            img{
                width: 80px;
                height: auto;
                margin: auto;
            }
        }
        .body{
            display: grid;
            grid-template-columns: 2fr 10fr;
            .sidebar{
                ul{
                    padding: 0px;
                    list-style-type: none;
                    
                    li{
                        padding: 20px;
                        img{
                            max-width: 30px;
                            height: auto;
                        }
                    }
                }
            }
            .content{
                margin: 0px 50px;
                margin-left: 10px;
                border: none;
                border-radius: 20px;
                background-color: #2a7091;
            }
        }
    }
`;

export default DrLayoutStyle;