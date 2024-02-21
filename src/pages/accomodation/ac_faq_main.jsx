import React, { useState } from "react";
import Accordion from "./accordion";
import "./ac_faq.css";
const faqs = [
  {
    ques: "What does it mean to be Tryst Campus Ambassador?",
    ans: "The Tryst Campus Ambassador Program is a volunteer opportunity for students passionate about technology and innovation to help promote and enhance the Tryst Tech Fest experience. Ambassadors will play a crucial role in spreading excitement and engaging the college community with the festival.",
    index: 1,
  },
  {
    ques: "Am I eligible to be a Campus Ambassador?",
    ans: "Students currently enrolled in any college, who demonstrate a strong interest in technology and innovation, possess excellent communication and interpersonal skills and can commit to attending mandatory meetings and training sessions are eligible and ideal candidates.",
    index: 2,
  },
];
const FAQ_main = () => {
  return (
    <div className="home-faqs">
      <div className="home-faqs-question">
        {/* <Accordion itmes={faqs} /> */}
      </div>
    </div>
  );
};

export default FAQ_main;
