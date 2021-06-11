import styled from "styled-components";

const UserSettingsStyle = styled.div`
    .settings{
        .back-button{
            margin: 10px;
        }
            .password-form{
                h3{
                    margin-bottom: 20px;
                }
                max-width: 700px;
                margin: auto;
                padding: 20px;
                display: flex;
                flex-direction: column;
                .actions{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
            }
        }
`;

export default UserSettingsStyle;