import "./ac_faq.css";
import add from "./add.svg";
import React, { useState } from "react";

function Accordion(props) {
  const [open, setOpen] = React.useState(false);
  console.log(props.ans);
  const myStyle = {
    maskType: "alpha",
  };
  return (
    <div className="col-12 yellow_bor main accordion">
      <div
        className="faq_row_main"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="faq_row">
          <div className="row_num">{props.index}</div>
          <div className="row_ques_ans">
            <div className="row_ques">
              {props.value}
              <div className="ques_plus">
                <img src={add} alt="" />
              </div>
            </div>
            <div
              className="row_ans"
              style={{ display: open ? "block" : "none" }}
            >
              {props.ans}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
