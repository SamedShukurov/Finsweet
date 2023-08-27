import React from "react";

import { Link } from "react-router-dom";
import "./homeBlog.css";
const HomeBlog = () => {
    let data = [
        {
            img: require("../svg/homeBlogSvg1.svg").default,
            time: "19 Jan 2022",
            heading:
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
            pharagraph:
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        },
        {
            img: require("../svg/homeBlogSvg2.svg").default,
            time: "19 Jan 2022",
            heading:
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
            pharagraph:
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        },
        {
            img: require("../svg/homeBlogSvg3.svg").default,
            time: "19 Jan 2022",
            heading:
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
            pharagraph:
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        },
    ];
    return (
        <div className="HomeBlog">
            <h2>Our blog</h2>
            <div className="HomeBlogCards">
                {data.map((item) => {
                    return(
                    <div className="HomeBlogCard">
                        <img src={item.img} alt="svg1" />
                        <h4>{item.time}</h4>
                        <h2>{item.heading}</h2>
                        <p>{item.pharagraph}
                        </p>
                        <Link to="/blog">
                            Read More <span>→</span>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default HomeBlog;
