import styled from "styled-components";

const UserProfileStyle = styled.div`
    .profile{
        .back-button{
        margin: 10px;
        align-self: left;
    }
    .profile-details{
        border: 1px solid #dddddd;
        margin: 50px 10px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .profile-pic{
            img{
                max-width: 250px;
            }
        }
        .name{
            font-size: 24px;
        }
        .action-buttons{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
    }
`;

export default UserProfileStyle;