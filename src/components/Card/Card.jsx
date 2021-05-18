import React from "react";
import CardStyle from "./CardStyle";

const Card = (props) => {
  return (
    <CardStyle imgSize = {props.imgSize} >
      <div className="card">
        {props.image && <div className="image">{props.image}</div>}
        { props.title && <div className="title">{props.title}</div> }
        { props.rating && <div className="rating">{props.rating}</div> }
        { props.status && <div className="status">{props.status}</div> }
        { props.subtitle && <div className="title">{props.subtitle}</div> }
        { props.desc && <div className="description">{props.desc}</div> }
        { props.actions && <div className="actions">{props.actions}</div> }
        
      </div>
    </CardStyle>
  );
};

export default Card;
