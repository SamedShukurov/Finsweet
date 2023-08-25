// import React, { useEffect } from "react";
// import plusIcon from "../svg/+.svg";
// const FAQQuestion = (props) => {
//     // The click function that initialize in first  render
//     function clicked() {
//         // const FAQQuestion = document.querySelectorAll(".FAQQuestion");
//         const FAQQuestionContent =
//             document.querySelectorAll(
//                 ".FAQQuestionContent"
//             );
//         // const pharagraph = document.querySelectorAll(".FAQQuestionContent >p")
//         // alert("Clicked");

//         FAQQuestionContent.forEach((q) => {
//             q.addEventListener("click", (e) => {
//                 const h3 = e.target
//                 console.log(h3);
//             });
//         });
//         console.log(props.data.index);
//     }
//     useEffect(() => {
//         // in first render
//         clicked();
//     });
//     return (
//         <div className="FAQQuestion">
//             <h3>{props.data.id}</h3>
//             <div className="FAQQuestionContent">
//                 <h3>
//                     {props.data.question}
//                     <img src={plusIcon} alt="plusIcon" />
//                 </h3>
//                 <p>{props.data.pharagraph}</p>
//             </div>
//         </div>
//     );
// };

// export default FAQQuestion;
