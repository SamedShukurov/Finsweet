import React from "react";
import "./homeView.css";
import Card1 from "../svg/Card 1.svg";
import Card2 from "../svg/Card 2.svg";
import Card3 from "../svg/Card 3.svg";
import { Link } from "react-router-dom";
const HomeView = () => {
  return (
    <div className="HomeView">
      <div className="HomeViewTitle">
        <h2>View our projects</h2>
        <p>
          View More <span>→</span>
        </p>
      </div>
      <div className="HomeViewContent">
        <div>
          <img src={Card1} alt="Card1" />
          <div>
            <h3>Workhub office Webflow Webflow Design</h3>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam
            </p>
            <Link>
              <p>
                View project <span>→</span>
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="HomeViewContentMini">
            <img src={Card2} alt="Card2" />
            <div>
              <h3>Unisaas Website Design</h3>
              <Link>
                <p>
                  View project <span>→</span>
                </p>
              </Link>
            </div>
          </div>
          <div className="HomeViewContentMini">
            <img src={Card3} alt="Card3" />
            <div>
              <h3>Physics Website Design</h3>
              <Link>
                <p>
                  View project <span>→</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
