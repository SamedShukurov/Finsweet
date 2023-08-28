import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../svg/Logo.svg";

const Footer = () => {
    let imgs = [
        {
            alt: "facebook",
            img: require("../svg/facebook.svg").default,
            href:"https://www.facebook.com/"
        },
        {
            alt: "twitter",
            img: require("../svg/twitter.svg").default,
            href:"https://twitter.com/"
        },
        {
            alt: "instagram",
            img: require("../svg/instagram.svg").default,
            href:"https://www.instagram.com/"
        },
        {
            alt: "linkedin",
            img: require("../svg/linkedin.svg").default,
            href:"https://www.linkedin.com/"
        },
    ];
    return (
        <div className="Footer">
            <div className="FooterHero">
                <div className="FooterHero-contact">
                    <img src={logo} alt="logo" />
                    <p>
                        We are always open to discuss your
                        project and improve your online
                        presence.
                    </p>
                    <ul className="contacts">
                        <li>
                            <h4>Email me at</h4>
                            <Link>contact@website.com</Link>
                        </li>
                        <li>
                            <h4>Call us</h4>
                            <Link>0927 6277 28525</Link>
                        </li>
                    </ul>
                </div>
                <div className="FooterHero-socialMedia">
                    <h1>Lets Talk!</h1>
                    <p>
                        We are always open to discuss your
                        project, improve your online
                        presence and help with your UX/UI
                        design challenges.
                    </p>
                    <div className="socialIcons">{
                        imgs.map(item=>{
                            return<Link to={item.href} target="_blank">
                            <img src={item.img} alt={item.alt}/>
                            </Link>
                        })
                    }</div>
                </div>
            </div>
            <div className="FooterContent">
                <h2>Copyright &copy; 2023, Finsweet.com</h2>
                <ul className="nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/features">Features</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
