import styled from "styled-components";

const ConsultStyle = styled.div`
    .categories-list{
        margin: 20px 20px 50px;
        .list{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 10px 30px;
            .category{
                .info{
                    display: flex;
                    align-items: center;
                    column-gap: 3px;
                }
                padding: 10px 20px;
                border: 1px solid #eeeeee;
                display: flex;
                justify-content: space-between;
                align-items: center;
                img{
                    max-width: 50px;
                    max-height: auto;
                }
                .actions{
                    font-size: 20px;
                }
            }
            .category:hover{
                box-shadow: 3px 3px 3px 3px #dddddd;
                color: #58aafc;
                transition: 0.3s;
                h4{
                    color: #58aafc;
                transition: 0.3s;
                }
            }
        }
    }
`;

export default ConsultStyle;