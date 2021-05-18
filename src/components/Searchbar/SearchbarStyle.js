import styled from "styled-components";

const SearchbarStyle = styled.div`
    .main{
        background-color: rgba(88, 73, 191, 0.7);
        max-height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .logo{
            img{
                max-width: 80px;
                margin: auto;
            }

        }

        .searchbar{
            flex-grow: 2;
            max-width: 700px;
        }
    }
`;

export default SearchbarStyle;