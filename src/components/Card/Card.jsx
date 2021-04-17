import React from "react";
import CardStyle from "./CardStyle";

const Card = (props) => {
  return (
    <CardStyle>
      <div className="card">
        {props.image && <div className="image">{props.image}</div>}
        { props.title && <div className="title">{props.title}</div> }
        { props.subtitle && <div className="title">{props.subtitle}</div> }
        { props.actions && <div className="title">{props.actions}</div> }
        
      </div>
    </CardStyle>
  );
};

export default Card;
