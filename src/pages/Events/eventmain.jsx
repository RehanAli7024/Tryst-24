import "./eventmain.css";
import eventposter from "./eventposter.png";
import React, { useState } from "react";
import search_icon from "./search.svg";
import arrowRight from "./arrow_right.svg";
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <mask
                  id="mask0_2415_2889"
                  style={myStyle}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="25"
                >
                  <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2415_2889)">
                  <path
                    d="M11.9997 21.2498C11.7871 21.2498 11.609 21.178 11.4654 21.0342C11.3218 20.8905 11.25 20.7124 11.25 20.4999V16.4999C11.25 16.2874 11.3219 16.1092 11.4657 15.9655C11.6095 15.8218 11.7877 15.7499 12.0003 15.7499C12.2129 15.7499 12.391 15.8218 12.5346 15.9655C12.6782 16.1092 12.75 16.2874 12.75 16.4999V17.7499H20C20.2125 17.7499 20.3906 17.8218 20.5344 17.9656C20.6781 18.1094 20.75 18.2876 20.75 18.5002C20.75 18.7128 20.6781 18.8909 20.5344 19.0345C20.3906 19.178 20.2125 19.2498 20 19.2498H12.75V20.4999C12.75 20.7124 12.6781 20.8905 12.5343 21.0342C12.3904 21.178 12.2122 21.2498 11.9997 21.2498ZM3.99997 19.2498C3.78747 19.2498 3.60936 19.1779 3.46563 19.0341C3.32188 18.8903 3.25 18.7121 3.25 18.4995C3.25 18.2869 3.32188 18.1088 3.46563 17.9653C3.60936 17.8217 3.78747 17.7499 3.99997 17.7499H7.99998C8.21248 17.7499 8.39059 17.8218 8.53433 17.9656C8.67808 18.1094 8.74995 18.2876 8.74995 18.5002C8.74995 18.7128 8.67808 18.8909 8.53433 19.0345C8.39059 19.178 8.21248 19.2498 7.99998 19.2498H3.99997ZM7.99965 15.2498C7.78705 15.2498 7.60896 15.178 7.46537 15.0342C7.32179 14.8905 7.25 14.7124 7.25 14.4999V13.2498H3.99997C3.78747 13.2498 3.60936 13.1779 3.46563 13.0341C3.32188 12.8903 3.25 12.7121 3.25 12.4995C3.25 12.2869 3.32188 12.1088 3.46563 11.9653C3.60936 11.8217 3.78747 11.7499 3.99997 11.7499H7.25V10.4999C7.25 10.2874 7.3219 10.1092 7.4657 9.96548C7.60952 9.82175 7.78772 9.74988 8.0003 9.74988C8.2129 9.74988 8.39099 9.82175 8.53458 9.96548C8.67816 10.1092 8.74995 10.2874 8.74995 10.4999V14.4999C8.74995 14.7124 8.67805 14.8905 8.53425 15.0342C8.39043 15.178 8.21223 15.2498 7.99965 15.2498ZM12 13.2498C11.7875 13.2498 11.6094 13.1779 11.4656 13.0341C11.3219 12.8903 11.25 12.7121 11.25 12.4995C11.25 12.2869 11.3219 12.1088 11.4656 11.9653C11.6094 11.8217 11.7875 11.7499 12 11.7499H20C20.2125 11.7499 20.3906 11.8218 20.5344 11.9656C20.6781 12.1094 20.75 12.2876 20.75 12.5002C20.75 12.7128 20.6781 12.8909 20.5344 13.0345C20.3906 13.178 20.2125 13.2498 20 13.2498H12ZM15.9997 9.24983C15.7871 9.24983 15.609 9.17796 15.4654 9.03423C15.3218 8.89048 15.25 8.71235 15.25 8.49985V4.49985C15.25 4.28735 15.3219 4.10923 15.4657 3.96548C15.6095 3.82175 15.7877 3.74988 16.0003 3.74988C16.2129 3.74988 16.391 3.82175 16.5346 3.96548C16.6782 4.10923 16.75 4.28735 16.75 4.49985V5.74988H20C20.2125 5.74988 20.3906 5.82178 20.5344 5.96558C20.6781 6.1094 20.75 6.2876 20.75 6.50018C20.75 6.71278 20.6781 6.89087 20.5344 7.03445C20.3906 7.17804 20.2125 7.24983 20 7.24983H16.75V8.49985C16.75 8.71235 16.6781 8.89048 16.5343 9.03423C16.3904 9.17796 16.2122 9.24983 15.9997 9.24983ZM3.99997 7.24983C3.78747 7.24983 3.60936 7.17793 3.46563 7.03413C3.32188 6.89031 3.25 6.71211 3.25 6.49953C3.25 6.28693 3.32188 6.10884 3.46563 5.96525C3.60936 5.82167 3.78747 5.74988 3.99997 5.74988H12C12.2125 5.74988 12.3906 5.82178 12.5343 5.96558C12.6781 6.1094 12.75 6.2876 12.75 6.50018C12.75 6.71278 12.6781 6.89087 12.5343 7.03445C12.3906 7.17804 12.2125 7.24983 12 7.24983H3.99997Z"
                    fill="#FFFBFF"
                  />
                </g>
              </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_2415_2957"
                    style={myStyle}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2415_2957)">
                    <path
                      d="M12 13.0538L6.92689 18.1269C6.78844 18.2654 6.6144 18.3362 6.40479 18.3394C6.19519 18.3426 6.01795 18.2718 5.87309 18.1269C5.7282 17.982 5.65576 17.8064 5.65576 17.6C5.65576 17.3936 5.7282 17.218 5.87309 17.0731L10.9462 12L5.87309 6.92689C5.73462 6.78844 5.66379 6.6144 5.66059 6.40479C5.65737 6.19519 5.7282 6.01795 5.87309 5.87309C6.01795 5.7282 6.19359 5.65576 6.39999 5.65576C6.60639 5.65576 6.78202 5.7282 6.92689 5.87309L12 10.9462L17.0731 5.87309C17.2115 5.73462 17.3856 5.66379 17.5952 5.66059C17.8048 5.65737 17.982 5.7282 18.1269 5.87309C18.2718 6.01795 18.3442 6.19359 18.3442 6.39999C18.3442 6.60639 18.2718 6.78202 18.1269 6.92689L13.0538 12L18.1269 17.0731C18.2654 17.2115 18.3362 17.3856 18.3394 17.5952C18.3426 17.8048 18.2718 17.982 18.1269 18.1269C17.982 18.2718 17.8064 18.3442 17.6 18.3442C17.3936 18.3442 17.218 18.2718 17.0731 18.1269L12 13.0538Z"
                      fill="#00E0FF"
                    />
                  </g>
                </svg>
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
