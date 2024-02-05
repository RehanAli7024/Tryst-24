import "./eventmain.css";
import eventposter from "./eventposter.png";
import React, { useState } from "react";
import search_icon from "./search.svg";
import arrowRight from "./arrow_right.svg";
import close from "./close.svg";
import tune from "./tune.svg";
import unticked from "../../assets/Events/checkbox.webp";
import ticked from "../../assets/Events/checkbox_ticked.webp";
// import EventCard from "../../components/EventCard/EventCard";

const Types = [
  { index: 1, name: "Competitions", },
  { index: 2, name: "Guest Lectures", },
  { index: 3, name: "Workshops", }
];

const Clubs = [
  { index: 1, name: "ACES-ACM", },
  { index: 2, name: "Chemical Engineering Society (CHES)", },
  { index: 3, name: "Mathematics Society (MathSoc)", },
  { index: 4, name: "Civil Engineering Forum (CEF)", },
  { index: 5, name: "Textile Engineering Society (TES)", },
  { index: 6, name: "Material Engineering Society (MES)", }
];

const EventMain = () => {
  const [type, setType] = useState(true);
  const [club, setClub] = useState(true);

  const [typeSelected, setTypeSelected] = useState([]);
  const [clubSelected, setClubSelected] = useState([]);
  const myStyle = {
    "mask-type": "alpha",
  };
  const [rotate1, setRotate1] = useState(false);
  const [rotate2, setRotate2] = useState(false);

  const handleTypeChange = () => {
    setType(!type);
    if (type) {
      document.getElementById("sidebar_options_type").style.display = "none";
      setRotate1(true);
    } else {
      document.getElementById("sidebar_options_type").style.display = "block";
      setRotate1(false);
    }
  }
  const handleClubChange = () => {
    setClub(!club);
    if (club) {
      document.getElementById("sidebar_options_club").style.display = "none";
      setRotate2(true);
    } else {
      document.getElementById("sidebar_options_club").style.display = "block";
      setRotate2(false);
    }
  }

  const handleTypeSelect = (index) => {
    const indexExists = typeSelected.includes(index);
    setTypeSelected(prevState => indexExists
      ? prevState.filter(item => item !== index)
      : [...prevState, index]
    );
  };

  const handleClubSelect = (index) => {
    const indexExists = clubSelected.includes(index);
    setClubSelected(prevState => indexExists
      ? prevState.filter(item => item !== index)
      : [...prevState, index]
    );
  };



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
              <button className="sidebar_btn" onClick={handleTypeChange}>
                <img src={arrowRight} alt="" style={{ transform: rotate1 ? 'rotate(-90deg)' : 'rotate(0deg)' }} />
                <div className="sidebar_text">By Type</div>
              </button>
              <div className="sidebar_options sidebar_options_hr" id="sidebar_options_type">

                {Types.map((type) => (
                  <div key={type.index} className="sidebar_option" onClick={() => handleTypeSelect(type.index)}>
                    <img src={typeSelected.includes(type.index) ? ticked : unticked} alt="" />
                    {type.name}
                  </div>
                ))}

              </div>
              <button className="sidebar_btn" onClick={handleClubChange}>
                <div className="arrow_sdbar">
                  <img src={arrowRight} alt="" style={{ transform: rotate2 ? 'rotate(-90deg)' : 'rotate(0deg)' }} />
                </div>
                <div className="sidebar_text">By Clubs/Society</div>
              </button>
              <div className="sidebar_options" id="sidebar_options_club">

                {Clubs.map((club) => (
                  <div key={club.index} className="sidebar_option" onClick={() => handleClubSelect(club.index)}>
                    <img src={clubSelected.includes(club.index) ? ticked : unticked} alt="" />
                    {club.name}
                  </div>
                ))}

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