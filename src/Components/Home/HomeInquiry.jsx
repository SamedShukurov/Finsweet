import React from "react";
import "./homeInquiry.css";
import inquirySvg from "../svg/inquiry.svg"

import { Link } from "react-router-dom"
const HomeInquiry = () => {
    return (
        <div className="HomeInquiry">
            <div className="HomeInquiryFilter"></div>
            <img src={inquirySvg} alt="inquiry" className="inquirySvg" />
            <div className="InquiryTitle">
                <h1>
                    Building stellar websites for early
                    startups
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua ut enim.
                </p>
            </div>
            <div className="sendInquiry">
                <h3>Send inquiry</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                </p>
                <form>
                    <label><input type="text" placeholder="YourName" spellCheck="false" /></label>
                    <label><input type="email" placeholder="Email" /></label>
                    <label><input type="url" placeholder="Paste your Figma design URL"/></label>
                </form>
                <button className="btnInquiry">Send an Inquiry</button>
                <Link to="/contact">Get in touch with us <span>→</span></Link>
            </div>
        </div>
    );
};

export default HomeInquiry;
