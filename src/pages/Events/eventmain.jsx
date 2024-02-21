import "./eventmain.css";
import React, { useEffect, useState } from "react";
import search_icon from "./search.svg";
import arrowRight from "./arrow_right.svg";
import close from "./close.svg";
import tune from "./tune.svg";
import unticked from "../../assets/Events/checkbox.webp";
import ticked from "../../assets/Events/checkbox_ticked.webp";
import EventCard from "../../components/EventCard/EventCard";
import axios from "axios";
import { DOMAIN } from "../../domain";
import { Link, useNavigate } from "react-router-dom";

const Types = [
  { index: 1, name: "Competitions" },
  { index: 2, name: "Guest Lectures" },
  { index: 3, name: "Workshops" },
];

const Clubs = [
  { index: 1, name: "ACES-ACM" },
  { index: 2, name: "Chemical Engineering Society (CHES)" },
  { index: 3, name: "Mathematics Society (MathSoc)" },
  { index: 4, name: "Civil Engineering Forum (CEF)" },
  { index: 5, name: "Textile Engineering Society (TES)" },
  { index: 6, name: "Material Engineering Society (MES)" },
];

const EventMain = () => {
  const navigate = useNavigate();
  const [type, setType] = useState(true);
  const [club, setClub] = useState(true);
  const [eventarray, setEventarray] = useState([]);
  const [typeSelected, setTypeSelected] = useState([]);
  const [clubSelected, setClubSelected] = useState([]);
  const myStyle = {
    "mask-type": "alpha",
  };
  const [rotate1, setRotate1] = useState(false);
  const [rotate2, setRotate2] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    axios.get(`${DOMAIN}allevents/`)
      .then((response) => {
        setEventarray(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(eventarray.competitions);
  }, [eventarray]);

  const handleTypeChange = () => {
    setType(!type);
    if (type) {
      document.getElementById("sidebar_options_type").style.display = "none";
      setRotate1(true);
    } else {
      document.getElementById("sidebar_options_type").style.display = "block";
      setRotate1(false);
    }
  };
  const handleClubChange = () => {
    setClub(!club);
    if (club) {
      document.getElementById("sidebar_options_club").style.display = "none";
      setRotate2(true);
    } else {
      document.getElementById("sidebar_options_club").style.display = "block";
      setRotate2(false);
    }
  };

  const handleTypeSelect = (index) => {
    const indexExists = typeSelected.includes(index);
    setTypeSelected((prevState) =>
      indexExists
        ? prevState.filter((item) => item !== index)
        : [...prevState, index]
    );
  };

  const handleClubSelect = (index) => {
    const indexExists = clubSelected.includes(index);
    setClubSelected((prevState) =>
      indexExists
        ? prevState.filter((item) => item !== index)
        : [...prevState, index]
    );
  };

  const handleTypeDeselect = (index) => {
    setTypeSelected((prevState) => prevState.filter((item) => item !== index));
  };

  const handleClubDeselect = (index) => {
    setClubSelected((prevState) => prevState.filter((item) => item !== index));
  };

  const clearAll = () => {
    setTypeSelected([]);
    setClubSelected([]);
  };

  const [overlay, setOverlay] = useState(true);

  const handleOverlay = () => {
    if (window.innerWidth <= 768) {
      if (overlay) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      setOverlay(!overlay);
    }
  };

  return (
    <>
      <div className="event_body">
        {window.innerWidth <= 768 && overlay === false ? (
          <div className="event_sidebar_overlay">
            <div className="sidebar_body">
              <img
                src={close}
                alt=""
                onClick={handleOverlay}
                className="event_sidebar_overlay_close"
              />
              <button className="sidebar_btn" onClick={handleTypeChange}>
                <img
                  src={arrowRight}
                  alt=""
                  style={{
                    transform: rotate1 ? "rotate(-90deg)" : "rotate(0deg)",
                  }}
                />
                <div className="sidebar_text">By Type</div>
              </button>
              <div
                className="sidebar_options sidebar_options_hr"
                id="sidebar_options_type"
              >
                {Types.map((type) => (
                  <div
                    key={type.index}
                    className="sidebar_option"
                    onClick={() => handleTypeSelect(type.index)}
                  >
                    <img
                      src={
                        typeSelected.includes(type.index) ? ticked : unticked
                      }
                      alt=""
                    />
                    {type.name}
                  </div>
                ))}
              </div>
              <div className="separating_line_sidebar"></div>
              <button className="sidebar_btn" onClick={handleClubChange}>
                <div className="arrow_sdbar">
                  <img
                    src={arrowRight}
                    alt=""
                    style={{
                      transform: rotate2 ? "rotate(-90deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
                <div className="sidebar_text">By Clubs/Society</div>
              </button>
              <div className="sidebar_options" id="sidebar_options_club">
                {Clubs.map((club) => (
                  <div
                    key={club.index}
                    className="sidebar_option"
                    onClick={() => handleClubSelect(club.index)}
                  >
                    <img
                      src={
                        clubSelected.includes(club.index) ? ticked : unticked
                      }
                      alt=""
                    />
                    {club.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <> </>
        )}
        <div className="event_title">EVENTS</div>
        <div className="filter_search">
          <div className="filter_search_left">
            <div className="fil_con">
              <div className="filter_btn" onClick={handleOverlay}>
                <img src={tune} alt="" />
                Filters
                {" (" + (typeSelected.length + clubSelected.length) + ")"}
              </div>
            </div>
            {typeSelected.length + clubSelected.length > 0 ? (
              <button className="clear_option" onClick={clearAll}>
                Clear All
              </button>
            ) : (
              <></>
            )}
          </div>
          <div className="filter_search_right">
            <div className="search_box">
              <input
                type="text"
                className="input_field"
                placeholder="Event Name Here"
              />
              <img src={search_icon} alt="" className="searchbtn" />
            </div>
          </div>
        </div>
        <div className="filters">
          {typeSelected.map((index) => {
            const type = Types.find((item) => item.index === index);
            return (
              <div className="sel_fil_container" key={index}>
                <div className="checkboxed_filter">
                  {type.name}
                  <button onClick={() => handleTypeDeselect(index)}>
                    <img src={close} alt="" className="sel_fil_close_btn" />
                  </button>
                </div>
              </div>
            );
          })}
          {clubSelected.map((index) => {
            const club = Clubs.find((item) => item.index === index);
            return (
              <div className="sel_fil_container" key={index}>
                <div className="checkboxed_filter">
                  {club.name}
                  <button onClick={() => handleClubDeselect(index)}>
                    <img src={close} alt="" className="sel_fil_close_btn" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="event_container">
          <div className="event_sidebar">
            <div className="sidebar_body">
              <button className="sidebar_btn" onClick={handleTypeChange}>
                <img
                  src={arrowRight}
                  alt=""
                  style={{
                    transform: rotate1 ? "rotate(-90deg)" : "rotate(0deg)",
                  }}
                />
                <div className="sidebar_text">By Type</div>
              </button>
              <div
                className="sidebar_options sidebar_options_hr"
                id="sidebar_options_type"
              >
                {Types.map((type) => (
                  <div
                    key={type.index}
                    className="sidebar_option"
                    onClick={() => handleTypeSelect(type.index)}
                  >
                    <img
                      src={
                        typeSelected.includes(type.index) ? ticked : unticked
                      }
                      alt=""
                    />
                    {type.name}
                  </div>
                ))}
              </div>
              <div className="separating_line_sidebar"></div>
              <button className="sidebar_btn" onClick={handleClubChange}>
                <div className="arrow_sdbar">
                  <img
                    src={arrowRight}
                    alt=""
                    style={{
                      transform: rotate2 ? "rotate(-90deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
                <div className="sidebar_text">By Clubs/Society</div>
              </button>
              <div className="sidebar_options" id="sidebar_options_club">
                {Clubs.map((club) => (
                  <div
                    key={club.index}
                    className="sidebar_option"
                    onClick={() => handleClubSelect(club.index)}
                  >
                    <img
                      src={
                        clubSelected.includes(club.index) ? ticked : unticked
                      }
                      alt=""
                    />
                    {club.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="event_cards">
            {eventarray.competitions &&
              eventarray.competitions.map((event, index) => (
                <Link to={`/events/${event.title}`} key={index}>
                  <EventCard image={event.event_image} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default EventMain;
