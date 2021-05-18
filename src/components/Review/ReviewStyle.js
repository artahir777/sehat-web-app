import styled from "styled-components";

const ReviewStyle = styled.div`
    .review{
        padding: 10px;
        margin: 10px;
        box-shadow: 3px 3px 5px #dddddd;
        display: flex;
        align-items: center;
        .avatar{
            max-width: 100px;
            padding: auto;
        }
    .name{
        max-width: 160px;
        margin: auto 20px;
        .date{
            color: #aaaaaa;
            font-size: 10px;
        }
    }
    .contents{
        max-width: 500px;
        .top{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title-rating{
                .rating{
                    font-size: 13px;
                }
                .title{
                    font-size: 16px;
                }
                .options{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }
    }
    }
`;

export default ReviewStyle;