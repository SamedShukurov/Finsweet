import React from "react";

import "../HeroSection/heroSection.css";
import { Link } from "react-router-dom";
const HomeHeader = (props) => {
  return (  
    <div className="heroSection">
      <div className="heroSectionContent">
        <h1>{props.data.title}</h1>
        <p>
          {props.data.paragrafh}
        </p>
        <div>
            <Link to={props.data.btnTo}><button>{props.data.btn}</button></Link>
            <Link to="/pricing" style={props.dp} ><p>View Pricing <span>→</span></p></Link>
        </div>
      </div>
      <img src={props.data.img} alt="illustration" />
    </div>
  );
};

export default HomeHeader;
