import styled from "styled-components";
const ProfileStyle = styled.div`
    .profile{
        padding: 20px;
        grid-gap: 10px 20px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        .profile-header{
            grid-area: profile-header;
            padding: 10px;
            margin: 10px;
            border: none;
            border-radius: 20px;
            background-color: white;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            img{
                max-width: 300px;
                height: auto;
                border: 3px solid #eeeeee;
                border-radius: 50%;
                /* box-shadow: 3px 3px 3px 3px #eeeeee; */
            }
            .info{
                display: flex;
                align-items: center;
                column-gap: 10px;
                .dr-info{
                    h2{
                        font-size: 26px;
                    }
                    .rate{
                        font-size: 16px;
                        color: #f0d959;
                    }
                    .status{
                        font-size: 16px;
                        color: #60eb7c;
                    }
                }
            }
            .options{
                    font-size: 20px;
                    align-self: flex-start;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                }
                .options:hover{
                    background-color: #eeeeee;
                    transition: 0.3s;
                }
        }
        .field-info{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .reviews, .qualification, .experience, .schedule{
            background-color: white;
            padding: 10px;
            margin: 10px;
            border: none;
            border-radius: 15px;
            min-height: 500px;
        }
            .panel-header{
                margin: 20px 0px;
                display: flex;
                justify-content: space-between;
            }
    }
`;

export default ProfileStyle;