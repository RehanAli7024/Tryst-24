import "./eventmain.css";
import eventposter from "./eventposter.png";
import React, { useState } from "react";
import search_icon from "./search.svg";
import arrowRight from "./arrow_right.svg";
import close from "./close.svg";
import tune from "./tune.svg";
const EventMain = () => {
  const myStyle = {
    "mask-type": "alpha",
  };
  const [rotate, setRotate] = useState(false);

  return (
    <>
      <div className="event_body">
        <div className="event_title">EVENTS</div>
        <div className="filter_search">
          <div className="fil_con">
            <div className="filter_btn">
              <img src={tune} alt="" />
              Filters
            </div>
          </div>
          <button className="clear_option">Clear All</button>
          <div className="search_box">
            <input
              type="text"
              className="input_field"
              placeholder="Event Name Here"
            />
            <img src={search_icon} alt="" className="searchbtn" />
          </div>
        </div>
        <div className="filters">
          <div className="sel_fil_container">
            <div className="selected_filter">
              Competitions
              <button>
                <img src={close} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="event_container">
          <div className="event_sidebar">
            <div className="sidebar_body">
              <button className="sidebar_button">
                <div className="arrow_sdbar">
                  <img src={arrowRight} alt="" />
                </div>
                <div className="sidebar_text">By Type</div>
              </button>
            </div>
          </div>
          <div className="events">
            <div className="event_card">
              <img src={eventposter} alt="" />
            </div>
            <div className="event_card">
              <img src={eventposter} alt="" />
            </div>
            <div className="event_card">
              <img src={eventposter} alt="" />
            </div>
            <div className="event_card">
              <img src={eventposter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventMain;
