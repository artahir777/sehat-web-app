import styled from "styled-components";

const UserDashboardStyle = styled.div`
    .dashboard{
        /* display: flex;
        flex-direction: column;
        align-items: center; */
        .doctors-list, .categories, .vitals{
            width: 90%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            .action-buttons{
                display: flex;
                justify-content: space-evenly;
            }
        }

    }


`;

export default UserDashboardStyle;