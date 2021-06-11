import styled from "styled-components";

const SettingsStyle = styled.div`
    .settings{
        
        .change-password{
            margin: 20px;
            .password-form{
                max-width: 700px;
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
    }
`;

export {SettingsStyle};