import styled from "styled-components";

const PrescriptionsStyle = styled.div`
    .prescription{
        display: flex;
        justify-content: space-between;
        .left{
            display: flex;
            column-gap: 10px;
        }
    }
    .prescription-details{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        .medicine{
            padding: 0px 20px;
            display: flex;
            justify-content: space-between;
        }
    }
    .prescriptions{
        h2{
            margin: auto;
            text-align: center;
        }
        min-height: 100vh;
       .prescriptions-list{
           padding: 20px 50px;
           .collapse{
            background-color: white;
            .panel{
                margin: 10px auto;
                border: 1px solid #eeeeee;
                border-radius: 5px;
            }
           }
       } 
        
    }
`;

export default PrescriptionsStyle;