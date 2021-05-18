import { DislikeOutlined, EllipsisOutlined, LikeOutlined } from '@ant-design/icons';
import { Rate, Tooltip } from 'antd';
import React from 'react'
import ReviewStyle from './ReviewStyle';

const Review = (props) => {

    const { avatar, username, date, rating, title, comment } = props;

    return (
        <ReviewStyle>
            <div className="review">
                <div className="avatar"> {avatar} </div>
                <div className="name">
                    <h3> {username} </h3>
                    <p className = "date" > {date} </p>
                </div>
                <div className="contents">
                    <div className="top">
                        <div className="title-rating">
                            <Rate className = "rating" allowHalf value = {rating} /> {rating}
                            <h4 className = "title" > {title} </h4>
                        </div>
                        <div className="options">
                            <Tooltip title = "Likes" > <LikeOutlined/> </Tooltip>
                            <Tooltip title = "Dislikes" > <DislikeOutlined/> </Tooltip>
                            <Tooltip title = "Options" > <EllipsisOutlined /> </Tooltip>
                        </div>
                    </div>
                    <div className="description">
                        <p> {comment} </p>
                    </div>
                </div>
            </div>
        </ReviewStyle>
    )
}

export default Review;