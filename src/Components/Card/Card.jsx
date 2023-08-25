import React from "react";
import "./card.css"

const Card = (props) => {
  return (
    <div className="Card" style={props.bg}>
      <img src={props.data.img} alt="img" />
      <h3>{props.data.title}</h3>
      <p>
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed
        faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
      </p>
    </div>
  );
};

export default Card;
