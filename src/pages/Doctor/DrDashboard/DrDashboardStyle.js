import styled from "styled-components";

const DrDashboardStyle = styled.div`
    
    .appointment, .prescription{
        margin: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        border: none;
        border-radius: 5px;
        .section{
            display: flex;
            justify-content: space-between;
            .info{
                display: flex;
                column-gap: 5px;
            }
            
        }
    }
    .appointment .actions{
        display: flex;
    }
    .prescription .actions{
        align-self: flex-end;
        display: flex;
    }
    .appointment:hover, .prescription:hover{
        box-shadow: 3px 3px 3px 3px #eeeeee;
        transition: 0.3s;
    }
    .dashboard{
        margin: 10px;
        display: grid;
        grid-template-areas: "profile-section appointments"
                             "profile-section prescriptions"
        ;
        grid-gap: 20px 10px;
        .profile-section{
            background-color: white;
            margin: 10px;
            padding: 10px;
            border: none;
            border-radius: 15px;
            grid-area: profile-section;
            .profile-header{
                padding: 10px;
                background-color: #9cd1f0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                img{
                    max-width: 200px;
                    height: auto;
                }
                .info{
                    display: flex;
                    flex-direction: column;
                    .rate{
                        font-size: 12px;
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
            .qualification{
                
            }
            .experience{

            }
        }
        .appointments{
            background-color: white;
            grid-area: appointments;
            margin: 10px;
            padding: 10px;
            border: none;
            border-radius: 15px;
        }
        .prescriptions{
            grid-area: prescriptions;
            background-color: white;
            margin: 10px;
            padding: 10px;
            border: none;
            border-radius: 15px;
        }
    }
`;

export default DrDashboardStyle;