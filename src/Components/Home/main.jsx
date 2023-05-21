import React from "react";
//! Icons 
import illustration from "../svg/Illustration.svg";
import pointer from "../svg/pointer.svg";
import card1 from "../svg/Card 1.svg";
import card2 from "../svg/Card 2.svg";
import card3 from "../svg/Card 3.svg";
import peopleIcon from "../svg/People-icon.svg";
import verifiedIcon from "../svg/Verified-icon.svg";
import pensIcon from "../svg/Pens-icon.svg";
import supportIcon from "../svg/Supports-icon.svg";
import timerIcon from "../svg/timer-icon.svg";
import handsWritingIcon from "../svg/Hands-on-approach-icon.svg";
//!Css 
import "../css/main.css";
const main = () => {
  return (
    <>
      <div className="headerMain">
        <div>
          <h4>Building stellar websites for early startups</h4>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h5>
          <div>
            <button>View our work</button>
            <button>
              View Pricing <span>→</span>
            </button>
          </div>
        </div>
        <img src={illustration} alt="illustration" />
      </div>
      <div className="main-how-we-work">
        <div>
          <h4>How we work</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button>
            Get in touch with us <span>→</span>
          </button>
        </div>
        <div>
          <div>
            <div className="card">
              <div>
                <img src={pointer} alt="pointer" />
                <h6>01</h6>
              </div>
              <h4>Strategy</h4>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="card">
              <div>
                <img src={pointer} alt="pointer" />
                <h6>02</h6>
              </div>
              <h4>Wireframing</h4>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
          <div>
            <div className="card">
              <div>
                <img src={pointer} alt="pointer" />
                <h6>03</h6>
              </div>
              <h4>Design</h4>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="card">
              <div>
                <img src={pointer} alt="pointer" />
                <h6>04</h6>
              </div>
              <h4>Development</h4>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-view-our-projects">
        <div>
          <h4>View our projects</h4>
          <button>
            View More <span>→</span>
          </button>
        </div>
        <div>
          <div>
            <img src={card1} alt="card1" />
            <div>
              <h4>Workhub office Webflow Webflow Design</h4>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>
              <button>
                View project <span>→</span>
              </button>
            </div>
          </div>
          <div>
            <div className="main-view-our-projects-card">
              <img src={card2} alt="card2" />
              <div>
                <h4> Unisaas Website Design</h4>
                <button>
                  View portfolio <span>→</span>
                </button>
              </div>
            </div>
            <div
              className="main-view-our-projects-card"
              id="main-view-our-projects-second-card"
            >
              <img src={card3} alt="card3" />
              <div>
                <h4> Unisaas Website Design</h4>
                <button>
                  View portfolio <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-features">
        <h5>Features</h5>
        <h4>Design that solves problems, one product at a time</h4>
        <div>
          <div>
            <div className="main-features-card">
              <img src={peopleIcon} alt="Icon 1" />
              <h5>Uses Client First</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="main-features-card">
              <img src={verifiedIcon} alt="Icon 1" />
              <h5>Two Free Revision Round</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="main-features-card">
              <img src={pensIcon} alt="Icon 1" />
              <h5>Template Customization</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
          </div>
          <div>
            <div className="main-features-card">
              <img src={supportIcon} alt="Icon 1" />
              <h5>24/7 Support</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="main-features-card">
              <img src={timerIcon} alt="Icon 1" />
              <h5>Quick Delivery</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
            <div className="main-features-card">
              <img src={handsWritingIcon} alt="Icon 1" />
              <h5>Hands-on approach</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
