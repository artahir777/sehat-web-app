import styled from "styled-components";

const SearchbarStyle = styled.div`
    .main{
        max-height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: ${props => props.color ? props.color : "none"};
        .logo{
            align-self: flex-start;
            img{
                max-width: 60px;
                margin: auto;
            }

        }

        .searchbar{
            display: flex;
            flex-grow: 2;
            max-width: 700px;
            input{
                width: 500px;
                border: none;
                border-bottom: 1px solid #cccccc;
                background-color: inherit;
                margin-right: 10px;
                color: ${props => props.textColor};
            }
            input:focus{
                outline: none;
            }
            .search-btn{
                color: white;
                background-color: #4e88fc;
                border: none;
                border-radius: 25%;
                cursor: pointer;
            }
        }
        .avatar{
            margin-right: 50px;
        }
    }
`;

export default SearchbarStyle;