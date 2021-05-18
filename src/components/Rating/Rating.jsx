import React from 'react';
import { Rate } from 'antd';
import { useState } from 'react';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = (props) => {
    
  const [value, setValue] = useState(5);

  const handleChange = value => {
      setValue({ value });
    };
    return (
        <span>
            <Rate tooltips={desc} value={value} />
            {/* {value ? <span className="ant-rate-text"> {desc[value - 1]} </span> : ''} */}
      </span>
    )
}

export default Rating;