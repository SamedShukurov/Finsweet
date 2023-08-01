import React from "react";
import miniCard from "../svg/mini-number-card.svg"
import "./homeWork.css";
import { Link } from "react-router-dom";

const HomeWork = () => {
  return (
    <div className="homeWork">
      <div className="homeWorkContent">
        <h3>How we work</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <p><Link><span>Get in touch with us <span>→</span></span></Link></p>
      </div>
      <div className="homeWorkCards">
        <div className="homeWorkCard">
          <div>
            <img src={miniCard} alt="miniCard" />
            <span>01</span>
          </div>
          <h4>Strategy</h4>
          <p>
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            .
          </p>
        </div>
        <div className="homeWorkCard">
          <div>
            <img src={miniCard} alt="miniCard" />
            <span>02</span>
          </div>
          <h4>Wireframing</h4>
          <p>
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            .
          </p>
        </div>
        <div className="homeWorkCard">
          <div>
            <img src={miniCard} alt="miniCard" />
            <span>03</span>
          </div>
          <h4>Design</h4>
          <p>
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            .
          </p>
        </div>
        <div className="homeWorkCard">
          <div>
            <img src={miniCard} alt="miniCard" />
            <span>04</span>
          </div>
          <h4>Development</h4>
          <p>
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
