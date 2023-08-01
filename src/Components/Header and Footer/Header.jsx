import React, { useEffect } from "react";
import "./header.css";
import logo from "../svg/Logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    const PagesPathName = [
      "/",
      "/about",
      "/features",
      "/pricing",
      "/faq",
      "/blog"
    ];
    const navItem = document.querySelectorAll(".nav > li span");
    // console.log(location.pathname);
    if (PagesPathName.entries(location.pathname)) {
      if(PagesPathName.indexOf(location.pathname) === -1){
        navItem.forEach((i) => {
          i.style.color = "#BBBBCB";
        });
      }
      else{
        // console.log(PagesPathName.indexOf(location.pathname));
        let index = PagesPathName.indexOf(location.pathname);
        navItem.forEach((i) => {
          i.style.color = "#BBBBCB";
        });
        navItem[index].style.color = "white";
      }
    }
  }, [location.pathname]);

  return (
    <div className="header">
      <img src={logo} alt="img" />
      <div className="headerContent">
        <ul className="nav">
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>About us</span>
            </Link>
          </li>
          <li>
            <Link to="/features">
              <span>Features</span>
            </Link>
          </li>
          <li>
            <Link to="/pricing">
              <span>Pricing</span>
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <span>FAQ</span>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <span>Blog</span>
            </Link>
          </li>
        </ul>
        <Link to="/contact">
          <button>Contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
