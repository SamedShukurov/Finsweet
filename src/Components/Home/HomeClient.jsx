import React from "react";
import "./homeClient.css";
import profile from "../svg/HomeProfileImg.svg"
const HomeClient = () => {
  return (
    <div className="HomeClient">
      <div className="HomeClientHeading">
        <h1>What our clients say about us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
      </div>
      <div className="HomeClientComments">
        <p>
          "The best agency we’ve worked with so far. They understand our product
          and are able to add new features with a great focus."
        </p>
        <div className="HomeClientContent">
          <div className="HomeClientProfile">
            <img src={profile} alt="profile" />
            <div>
              <h5>Jenny Wilson</h5>
              <h6>Vice President</h6>
            </div>
          </div>
          <div className="HomeClientButtons">
            <button><div></div></button>
            <button><div></div></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeClient;
