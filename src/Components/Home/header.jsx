import React from "react";
import "../css/Home_css/header.css";
import logo from "../svg/Logo.svg";
const header = () => {
  return (
    <>
      <div className="headerTop">
        <img src={logo} alt="Logo" />
        <div>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
          <button>Contact us</button>
        </div>
      </div>
    </>
  );
};

export default header;
