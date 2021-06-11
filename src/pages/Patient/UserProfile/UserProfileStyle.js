import styled from "styled-components";

const UserProfileStyle = styled.div`
    .profile{
        margin: auto 30px;
        display: grid;
        grid-template-columns: 5fr 2fr;
        grid-gap: 20px;
        .main-content{
            margin-bottom: 20px;
            display: grid;
            grid-gap: 20px;
            grid-template-areas: "profile-header profile-header"
                                 "appointments prescriptions";
            .profile-header{
                grid-area: profile-header;
                display: flex;
                justify-content: space-between;
                padding: 30px;
                border: 2px solid #eeeeee;
                border-radius: 15px;
                .info{
                    display: flex;
                    column-gap: 20px;
                    align-items: center;
                }
                img{
                    max-width: 200px;
                    max-height: auto;
                    border: 5px solid #111111;
                    border-radius: 50%;
                }
                .action-buttons{
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                }
            }
            .appointments{
                grid-area: appointments;
                display: flex;
                flex-direction: column;
                row-gap: 10px;
                border: 1px solid #cccccc;
                border-radius: 15px;
                padding: 20px;
                .appointment{
                    border: 1px solid #eeeeee;
                    border-radius: 15px;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    .details{
                        display: flex;
                        justify-content: space-between;
                    }
                    .actions{
                        display: flex;
                        align-self: flex-end;
                    }
                }
                .appointment:hover{
                    box-shadow: 3px 3px 3px 3px #eeeeee;
                    transition: 0.2s;
                }
            }
            .prescriptions{
                padding: 20px;
                grid-area: prescriptions;
                display: flex;
                flex-direction: column;
                row-gap: 10px;
                border: 1px solid #cccccc;
                border-radius: 15px;
                .prescription{
                    border: 1px solid #eeeeee;
                    border-radius: 15px;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    .description{
                        display: flex;
                        justify-content: space-between;
                    }
                    .details{
                        margin: 10px;
                        display: flex;
                        justify-content: space-between;
                    }
                    .actions{
                        align-self: flex-end;
                        a{
                            margin: 10px;
                            padding: 10px;
                            
                        }
                        a:hover{
                            color: #2f7bde;
                            background-color: #bad8ff;
                            transition: 0.3s;
                            border-radius: 15%;
                        }
                    }
                }
                .prescription:hover{
                    box-shadow: 3px 3px 3px 3px #eeeeee;
                    transition: 0.2s;
                }
            }
        }
        .personal-info{
            margin: 20px;
            display: flex;
            flex-direction: column;
            .heading{
                margin: 20px auto;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                column-gap: 30px;
            }
            .info-fields{
                display: flex;
                flex-direction: column;
                .field{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
`;

export default UserProfileStyle;