import React from "react";
import miniCard from "../svg/mini-number-card.svg";
import "./homeWork.css";
import { Link } from "react-router-dom";

const HomeWork = () => {
    let data = [
        {
            id: "01",
            title: "Strategy",
            describe:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ",
        },
        {
            id: "02",
            title: "Wireframing",
            describe:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ",
        },
        {
            id: "03",
            title: "Design",
            describe:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ",
        },
        {
            id: "04",
            title: "Development",
            describe:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ",
        },
    ];
    return (
        <div className="homeWork">
            <div className="homeWorkContent">
                <h3>How we work</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor.
                </p>
                <p>
                    <Link>
                        <span>
                            Get in touch with us{" "}
                            <span>→</span>
                        </span>
                    </Link>
                </p>
            </div>
            <div className="homeWorkCards">
                {data.map((item) => {
                    return (
                        <div className="homeWorkCard">
                            <div>
                                <img
                                    src={miniCard}
                                    alt="miniCard"
                                />
                                <span>{item.id}</span>
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.describe}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeWork;
