import React,{useState} from "react";
import { Link } from "react-router-dom"; 
import "./faq.css";
// import FAQQuestion from "./FAQQuestion";
import plusIcon from "../svg/+.svg";
import xIcon from "../svg/x.svg";
const FAQ = () => {
    const data = [
        {
            id: "01",
            question: "How much time does it take?",
            pharagraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "02",
            question:
                "What is your class naming convention?",
            pharagraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "03",
            question: "How do you communicate?",
            pharagraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "04",
            question:
                "I have a bigger project. Can you handle it?",
            pharagraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "05",
            question:
                "What is your class naming convention?",
            pharagraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
    const [selected,setSelected] = useState(null)
    const toggle = (i)=>{
      if(selected === i){
        return setSelected(null)
      }
      setSelected(i)
    }
    return (
        <div className="FAQ">
            <div className="FAQHeading">
                <h1>Frequently asked questions</h1>
                <Link to="/contact">
                    <p>Contact us for more info</p>
                </Link>
            </div>
            <div className="FAQContent">
                {data.map((item, i) => {
                    return (
                        <>
                            <div className="FAQQuestion">
                                <h3>{item.id}</h3>
                                <div className="FAQQuestionContent" onClick={()=>toggle(i)}>
                                    <h3>
                                        {item.question}
                                        <img
                                            src={selected === i ? xIcon : plusIcon}
                                            alt="plusIcon"
                                        />
                                    </h3>
                                    <p className={selected === i ? 'active': ''}>{item.pharagraph}</p>
                                </div>
                            </div>
                            <hr></hr>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;

/* <FAQQuestion data={question1} />
        <hr />
        <FAQQuestion data={question2} />
        <hr />
        <FAQQuestion data={question3} />
        <hr />
        <FAQQuestion data={question4} />
        <hr />
        <FAQQuestion data={question5} /> */
