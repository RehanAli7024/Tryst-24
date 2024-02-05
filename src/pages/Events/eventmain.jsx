import "./eventmain.css";
import eventposter from "./eventposter.png";
import React, { useState } from "react";
import search_icon from "./search.svg";
import arrowRight from "./arrow_right.svg";
import close from "./close.svg";
import tune from "./tune.svg";
import EventCard from "../../components/EventCard/EventCard";
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
            <div className="checkboxed_filter">
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
              <button className="sidebar_btn">
                <img src={arrowRight} alt="" />
                <div className="sidebar_text">By Type</div>
              </button>
              <div className="sidebar_options sidebar_options_hr" id="sidebar_options_type">
                <div className="sidebar_option"><input type="checkbox" id="sidebar_option_comp" className="sidebar_option_check" name="competitions" />Competitions</div>
                <div className="sidebar_option"><input type="checkbox" id="sidebar_option_gl" className="sidebar_option_check" name="guest_lectures" />Guest Lectures</div>
                <div className="sidebar_option"><input type="checkbox" id="sidebar_option_ws" className="sidebar_option_check" name="workshops" />Workshops</div>
              </div>
              <button className="sidebar_btn">
                <div className="arrow_sdbar">
                  <img src={arrowRight} alt="" />
                </div>
                <div className="sidebar_text">By Clubs/Society</div>
              </button>
              <div className="sidebar_options">
                <div className="sidebar_option"><input type="checkbox" id="sidebar_option_comp" className="sidebar_option_check" name="aces-acm" />ACES-ACM</div>
                <div className="sidebar_option"><input type="checkbox" id="sidebar_option_comp" className="sidebar_option_check" name="ches" />Chemical Engineering Society {"("}CHES{")"}</div>
                <div className="sidebar_option"><input type="checkbox" id="sidebar_option_comp" className="sidebar_option_check" name="mathsoc" />Mathematics Society {"("}MathSoc{")"}</div>
                <div className="sidebar_option"><input type="checkbox" id="sidebar_option_comp" className="sidebar_option_check" name="cef" />Civil Engineering Forum {"("}CEF{")"}</div>
                <div className="sidebar_option"><input type="checkbox" id="sidebar_option_comp" className="sidebar_option_check" name="tes" />Textile Engineering Society {"("}TES{")"}</div>
                <div className="sidebar_option"><input type="checkbox" id="sidebar_option_comp" className="sidebar_option_check" name="mes" />Material Engineering Society {"("}MES{")"}</div>
              </div>
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
            {/* <EventCard />
            <EventCard />
            <EventCard />
            <EventCard /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default EventMain;
