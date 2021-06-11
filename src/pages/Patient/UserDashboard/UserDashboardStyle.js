import styled from "styled-components";

const UserDashboardStyle = styled.div`
    .dashboard{
        .chatbox{
            width: 300px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            bottom: 10px;
            right: 10px;
            background-color: #333333;
            color: #eeeeee;
            padding: 5px 15px;
        }
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 5fr 2fr;
        grid-gap: 20px;
        .main-content{
            display: grid;
            grid-template-areas: "top-doctors top-doctors"
                                    "categories vitals";
            grid-gap: 10px;
            .top-doctors{
                display: flex;
                flex-direction: column;
                align-items: center;
                grid-area: top-doctors;
                border: 1px solid #cccccc;
                margin: auto;
                padding: 10px;
            }
            .categories{
                margin: 20px;
                padding: 20px;
                grid-area: categories;
                border: 1px solid #cccccc;
                box-shadow: 3px 5px 3px 3px #dddddd;
                .category{
                    margin: 5px auto;
                    display: flex;
                    justify-content: space-between;
                    padding: 5px;
                    border-radius: 5%;
                    border: 1px solid #dddddd;
                    img{
                        width: 30px;
                    }
                }
                .category:hover{
                    color: #66b3ff;
                    border: 1px solid #66b3ff;
                    transition: 0.3s;
                }
            }
            .vitals{
                margin: 20px;
                padding: 20px;
                grid-area: vitals;
                border: 1px solid #cccccc;
                box-shadow: 3px 5px 3px 3px #dddddd;
                .grid{
                    margin: 50px auto 20px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 30px;
                    img{
                        max-width: 30px;
                    }
                    .vital-item{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        border: 1px solid #eeeeee;
                        align-items: center;
                    }
                }
            }
        }
        .side-content{
            
            padding: 30px;
            margin: 20px;
            display: flex;
            flex-direction: column;
            border: 1px solid #eeeeee;
            border-radius: 10%;
            
            .consult-btn{
                color: #5789d9;
                padding: 10px 20px;
                margin: 10px auto;
                border: 1px solid #cccccc;
                border-radius: 20%;
                box-shadow: 3px 1px #dddddd;
            }
            ul{
                margin: 20px 0px;
                list-style-type: none;
                li{
                    margin: 15px;
                    padding: 10px 15px;
                }
                li:hover{
                    color: #66b3ff;
                    transition: 0.3s;
                }
            }
        }

    }


`;

export default UserDashboardStyle;