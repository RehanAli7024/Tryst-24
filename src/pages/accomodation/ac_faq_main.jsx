import React, { useState } from "react";
import Accordion from "./accordion";
import "./ac_faq.css";
const faqs = [
  {
    ques: "What does it mean to be Tryst Campus Ambassador?",
    ans: "The Tryst Campus Ambassador Program is a volunteer opportunity for students passionate about technology and innovation to help promote and enhance the Tryst Tech Fest experience. Ambassadors will play a crucial role in spreading excitement and engaging the college community with the festival.",
    index: "01",
  },
  {
    ques: "What does it mean to be Tryst Campus Ambassador? lamba kheech sakta hai",
    ans: "The Tryst Campus Ambassador Program is a volunteer opportunity for students passionate about technology and innovation to help promote and enhance the Tryst Tech Fest experience. Ambassadors will play a crucial role in spreading excitement and engaging the college community with the festival.",
    index: "02",
  },
];
const FAQ_main = () => {
  return (
    <div id='faqs' className='col-12 red_bor'>
						{faqs.map((data) => {
							return <Accordion value={data.ques} ans={data.ans} index = {data.index}/>;
						})}
		</div>
  );
};

export default FAQ_main;
