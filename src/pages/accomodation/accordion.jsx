import "./ac_faq.css";
// import circle from "./../../assets/accomodation/Card.svg";
// import faqs_arrow from "./../../assets/accomodation/faqs-arrow.svg";
import React, { useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [arrowRotations, setArrowRotations] = useState(
    Array(items.length).fill(false)
  );

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);

    setArrowRotations((prevRotations) => {
      const newRotations = [...prevRotations];
      newRotations[index] = !newRotations[index];
      return newRotations;
    });
  };
  return (
    <div className="home-faqs-acco-boss" lazy>
      {items.map((item, index) => (
        <div key={item.title} className="home-faqs-acco-subboss">
          <button
            className={`home-faqs-acco-btn ${arrowRotations[index] ? "up" : ""
              }`}
            id={item.id}
            onClick={() => handleClick(index)}
          >
            <div className="home-faqs-acco-ques-box">
              <div className="home-faqs-acco-ques">{item.ques}</div>
              <img src={circle} alt="circle" className="home-faqs-acco-icon-svg" />
              <img src={faqs_arrow} alt="arrow" className={`home-faqs-acco-icon-arrow ${arrowRotations[index] ? "up" : ""
                }`} />
            </div>
          </button>
          {index === activeIndex && (
            <div className="home-faqs-acco-content">{item.ans}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;