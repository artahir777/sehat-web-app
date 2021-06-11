import React from "react";
import CardStyle from "./CardStyle";

const Card = (props) => {
  return (
    <CardStyle imgSize = {props.imgSize} type = {props.type} >
      <div className="card">
        
        {props.image && <div className="image">{props.image}</div>}
        
        <div className="header">
          { props.title && <div className="title">{props.title}</div> }
          { props.subtitle && <div className="subtitle">{props.subtitle}</div> }
        </div>
        
        <div className="more-info">
          { props.rating && <div className="rating">{props.rating}</div> }
          { props.status && <div className="status">{props.status}</div> }
          { props.desc && <div className="description">{props.desc}</div> }
        </div>
        
        { props.actions && <div className="actions">{props.actions}</div> }
        
      </div>
    </CardStyle>
  );
};

export default Card;
