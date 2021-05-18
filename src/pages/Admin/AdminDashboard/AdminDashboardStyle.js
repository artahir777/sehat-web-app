import styled from "styled-components";

const AdminDashboardStyle = styled.div`
    .dashboard{
        .options-grid{
            margin: 30px ;
            display: grid;
            grid-gap: 40px;
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;

export default AdminDashboardStyle;