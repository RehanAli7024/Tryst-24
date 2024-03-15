import "./eventpage.css";
import React, { useEffect, useState } from "react";
import poster from "./poster.webp";
import { transform } from "framer-motion";
import description from "./description.svg";
import arrow_forward from "./arrow_forward.svg";
import arrow_downward from "./arrow_downward.svg";
import EventCard from "../../components/EventCard/EventCard";
import axios from "axios";
import { DOMAIN } from "../../domain";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const EventPage = ({ event }) => {
  console.log(event);
  const myStyle = {};
  const [isVisible, setIsVisible] = useState(false);
  const token = localStorage.getItem("access_token");
  const eventId = event.event_id;
  const eventType = "competition";
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({
    event_id: eventId,
    event_type: eventType,
    form: [],
  });
  const [registered, setRegistered] = useState(false);
  const [displaytext, setDisplaytext] = useState("Register");
  function convertTimeToAMPM(time24) {
    var splitTime = time24.split(":");
    var hours = parseInt(splitTime[0]);
    var minutes = parseInt(splitTime[1]);
    var period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var time12 = hours + ":" + minutes + " " + period;

    return time12;
  }

  const [isEventTime, setIsEventTime] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      if (currentTime.getHours() >= 18) {
        setIsEventTime(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      setDisplaytext("Login to Register");
      setRegistered(true);
      return;
    }
    const token = localStorage.getItem("access_token");
    axios
      .get(
        `${DOMAIN}check_registration/?event_id=${eventId}&event_type=${eventType}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setRegistered(false);
      })
      .catch((err) => {
        setRegistered(true);
        setDisplaytext("Already Registered");
        console.log(err);
      });
  }, []);
  const toggleDiv = () => {
    console.log(localStorage.getItem("access_token"));
    if (localStorage.getItem("access_token") === null) {
      alert("Please login to register for the event");
      return;
    }
    axios
      .get(`${DOMAIN}register/?event_id=${eventId}&event_type=${eventType}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setFormFields(res.data.formFields);
        const fields = {};
        res.data.formFields.forEach((field) => {
          fields[field.title] = "";
        });
        setFormData({ ...formData, form: fields });
        if (res.data.has_form === true) {
          window.location.href = res.data.registration_link;
        }
        setIsVisible(!isVisible);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
    axios
      .post(`${DOMAIN}register/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Registered Successfully");
        navigate("/events");
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  return (
    <>
      <div className="event_body ">
        <div className="event_title ">
          <h1 className="">EVENTS</h1>
        </div>
        <div className="event_container grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 event_poster">
            <div className="ev_poster">
              <EventCard image={event.event_image} />
            </div>
            <a
              className="fil_con"
              id="ev_page_fil_con"
              href={event.rulebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="filter_btn">
                <img src={description} alt="" />
                Rulebook
              </div>
            </a>
          </div>
          <div className="col-span-2 md:col-span-1 event_description px-5 md:px-0">
            <div className="event_title_1">{event.title}</div>
            <div className="event_para_1">{event.description}</div>
            <div className="event_details">
              <div className="event_date">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <mask
                    id="mask0_2329_982"
                    style={myStyle}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                  >
                    <rect width="32" height="32" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2329_982)">
                    <path
                      d="M6.66667 29.3333C5.93333 29.3333 5.30533 29.0724 4.78267 28.5506C4.26089 28.028 4 27.4 4 26.6666V7.99996C4 7.26663 4.26089 6.63907 4.78267 6.11729C5.30533 5.59463 5.93333 5.33329 6.66667 5.33329H8V2.66663H10.6667V5.33329H21.3333V2.66663H24V5.33329H25.3333C26.0667 5.33329 26.6947 5.59463 27.2173 6.11729C27.7391 6.63907 28 7.26663 28 7.99996V26.6666C28 27.4 27.7391 28.028 27.2173 28.5506C26.6947 29.0724 26.0667 29.3333 25.3333 29.3333H6.66667ZM6.66667 26.6666H25.3333V13.3333H6.66667V26.6666ZM6.66667 10.6666H25.3333V7.99996H6.66667V10.6666ZM16 18.6666C15.6222 18.6666 15.3058 18.5386 15.0507 18.2826C14.7947 18.0275 14.6667 17.7111 14.6667 17.3333C14.6667 16.9555 14.7947 16.6386 15.0507 16.3826C15.3058 16.1275 15.6222 16 16 16C16.3778 16 16.6947 16.1275 16.9507 16.3826C17.2058 16.6386 17.3333 16.9555 17.3333 17.3333C17.3333 17.7111 17.2058 18.0275 16.9507 18.2826C16.6947 18.5386 16.3778 18.6666 16 18.6666ZM10.6667 18.6666C10.2889 18.6666 9.972 18.5386 9.716 18.2826C9.46089 18.0275 9.33333 17.7111 9.33333 17.3333C9.33333 16.9555 9.46089 16.6386 9.716 16.3826C9.972 16.1275 10.2889 16 10.6667 16C11.0444 16 11.3613 16.1275 11.6173 16.3826C11.8724 16.6386 12 16.9555 12 17.3333C12 17.7111 11.8724 18.0275 11.6173 18.2826C11.3613 18.5386 11.0444 18.6666 10.6667 18.6666ZM21.3333 18.6666C20.9556 18.6666 20.6391 18.5386 20.384 18.2826C20.128 18.0275 20 17.7111 20 17.3333C20 16.9555 20.128 16.6386 20.384 16.3826C20.6391 16.1275 20.9556 16 21.3333 16C21.7111 16 22.0276 16.1275 22.2827 16.3826C22.5387 16.6386 22.6667 16.9555 22.6667 17.3333C22.6667 17.7111 22.5387 18.0275 22.2827 18.2826C22.0276 18.5386 21.7111 18.6666 21.3333 18.6666ZM16 24C15.6222 24 15.3058 23.872 15.0507 23.616C14.7947 23.3608 14.6667 23.0444 14.6667 22.6666C14.6667 22.2888 14.7947 21.9724 15.0507 21.7173C15.3058 21.4613 15.6222 21.3333 16 21.3333C16.3778 21.3333 16.6947 21.4613 16.9507 21.7173C17.2058 21.9724 17.3333 22.2888 17.3333 22.6666C17.3333 23.0444 17.2058 23.3608 16.9507 23.616C16.6947 23.872 16.3778 24 16 24ZM10.6667 24C10.2889 24 9.972 23.872 9.716 23.616C9.46089 23.3608 9.33333 23.0444 9.33333 22.6666C9.33333 22.2888 9.46089 21.9724 9.716 21.7173C9.972 21.4613 10.2889 21.3333 10.6667 21.3333C11.0444 21.3333 11.3613 21.4613 11.6173 21.7173C11.8724 21.9724 12 22.2888 12 22.6666C12 23.0444 11.8724 23.3608 11.6173 23.616C11.3613 23.872 11.0444 24 10.6667 24ZM21.3333 24C20.9556 24 20.6391 23.872 20.384 23.616C20.128 23.3608 20 23.0444 20 22.6666C20 22.2888 20.128 21.9724 20.384 21.7173C20.6391 21.4613 20.9556 21.3333 21.3333 21.3333C21.7111 21.3333 22.0276 21.4613 22.2827 21.7173C22.5387 21.9724 22.6667 22.2888 22.6667 22.6666C22.6667 23.0444 22.5387 23.3608 22.2827 23.616C22.0276 23.872 21.7111 24 21.3333 24Z"
                      fill="#E086D3"
                    />
                  </g>
                </svg>
                <p>{event.event_date}</p>
              </div>
              <div className="event_time">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <mask
                    id="mask0_2329_987"
                    style={myStyle}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                  >
                    <rect width="32" height="32" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2329_987)">
                    <path
                      d="M19.4998 21.3666C19.7443 21.6111 20.0443 21.7333 20.3998 21.7333C20.7554 21.7333 21.0665 21.6 21.3332 21.3333C21.5776 21.0888 21.6998 20.7777 21.6998 20.4C21.6998 20.0222 21.5776 19.7111 21.3332 19.4666L17.3332 15.4666V10.6333C17.3332 10.2555 17.2056 9.9444 16.9505 9.69996C16.6945 9.45551 16.3776 9.33329 15.9998 9.33329C15.6221 9.33329 15.3056 9.46085 15.0505 9.71596C14.7945 9.97196 14.6665 10.2888 14.6665 10.6666V15.9666C14.6665 16.1444 14.6998 16.3164 14.7665 16.4826C14.8332 16.6497 14.9332 16.8 15.0665 16.9333L19.4998 21.3666ZM15.9998 29.3333C14.1554 29.3333 12.4221 28.9831 10.7998 28.2826C9.17762 27.5831 7.7665 26.6333 6.5665 25.4333C5.3665 24.2333 4.41673 22.8222 3.71717 21.2C3.01673 19.5777 2.6665 17.8444 2.6665 16C2.6665 14.1555 3.01673 12.4222 3.71717 10.8C4.41673 9.17774 5.3665 7.76663 6.5665 6.56663C7.7665 5.36663 9.17762 4.4164 10.7998 3.71596C12.4221 3.0164 14.1554 2.66663 15.9998 2.66663C17.8443 2.66663 19.5776 3.0164 21.1998 3.71596C22.8221 4.4164 24.2332 5.36663 25.4332 6.56663C26.6332 7.76663 27.5829 9.17774 28.2825 10.8C28.9829 12.4222 29.3332 14.1555 29.3332 16C29.3332 17.8444 28.9829 19.5777 28.2825 21.2C27.5829 22.8222 26.6332 24.2333 25.4332 25.4333C24.2332 26.6333 22.8221 27.5831 21.1998 28.2826C19.5776 28.9831 17.8443 29.3333 15.9998 29.3333ZM15.9998 26.6666C18.9554 26.6666 21.4723 25.628 23.5505 23.5506C25.6278 21.4724 26.6665 18.9555 26.6665 16C26.6665 13.0444 25.6278 10.5275 23.5505 8.44929C21.4723 6.37196 18.9554 5.33329 15.9998 5.33329C13.0443 5.33329 10.5278 6.37196 8.4505 8.44929C6.37228 10.5275 5.33317 13.0444 5.33317 16C5.33317 18.9555 6.37228 21.4724 8.4505 23.5506C10.5278 25.628 13.0443 26.6666 15.9998 26.6666Z"
                      fill="#E086D3"
                    />
                  </g>
                </svg>
                <p>{convertTimeToAMPM(event.event_time.slice(0, 5))}</p>
              </div>
              <div className="event_location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M20 12H22.6667V14.6667H20V12ZM22.6667 6.66671H20V9.33337H22.6667V6.66671ZM14.6667 20H17.3333V17.3334H14.6667V20ZM17.3333 6.66671H14.6667V9.33337H17.3333V6.66671ZM14.6667 14.6667H17.3333V12H14.6667V14.6667ZM12 6.66671H9.33333V9.33337H12V6.66671ZM12 12H9.33333V14.6667H12V12ZM19.4 28H17.3333V23.3334H14.6667V28H6.66667V4.00004H25.3333V14.7067C26.28 14.7867 27.1867 15.08 28 15.5067V1.33337H4V30.6667H21.2133C20.6667 29.92 20 29.0134 19.4 28ZM9.33333 25.3334H12V22.6667H9.33333V25.3334ZM12 17.3334H9.33333V20H12V17.3334ZM29.3333 22C29.3333 25.4667 24.6667 30.6667 24.6667 30.6667C24.6667 30.6667 20 25.4667 20 22C20 19.4667 22.1333 17.3334 24.6667 17.3334C27.2 17.3334 29.3333 19.4667 29.3333 22ZM26.2667 22.1334C26.2667 21.3334 25.4667 20.5334 24.6667 20.5334C23.8667 20.5334 23.0667 21.2 23.0667 22.1334C23.0667 22.9334 23.7333 23.7334 24.6667 23.7334C25.6 23.7334 26.4 22.9334 26.2667 22.1334Z"
                    fill="#E086D3"
                  />
                </svg>
                <p>{event.venue}</p>
              </div>
            </div>
            <div className="event_deadline">
              <div className="ev_dead_text">Registration Deadline :</div>
              <div className="ev_deadline_main">
                {convertTimeToAMPM(event.deadline_time.slice(0, 5))},{" "}
                {format(new Date(event.deadline_date), "dd-MMM-yyyy")}
              </div>
            </div>
            <div className="ev_contact_information grid grid-cols-2">
              <div className="col-span-2 md:col-span-1 ev_register ">
                <div className="fil_con" id="ev_page_fil_con_2">
                  <div className="filter_btn" id="ev_btn_1">
                    {!event.registration_link ||
                    event.registration_link === "" ? (
                      registered ? (
                        <>{displaytext}</>
                      ) : (
                        <button
                          onClick={toggleDiv}
                          className="filter_btn"
                          id="ev_btn_1"
                        >
                          Register
                          {isVisible ? (
                            <img
                              src={arrow_downward}
                              className="rotating_button"
                              alt=""
                            />
                          ) : (
                            <img
                              src={arrow_forward}
                              className="rotating_button"
                              alt=""
                            />
                          )}
                        </button>
                      )
                    ) : (
                      <a
                        href={event.registration_link}
                        target="_blank"
                        rel="noreferrer"
                        className="filter_btn"
                        id="ev_btn_1"
                      >
                        Register{" "}
                        <img
                          src={arrow_forward}
                          className="rotating_button"
                          alt=""
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="POC_box">
                <div className="ev_contact_text">CONTACT</div>
                {event.contact.map((poc, index) => (
                  <div className="ev_POC" key={index}>
                    <div className="ev_poc_name">{poc.name}</div>
                    <div className="ev_poc_contact">{poc.phone}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {event.title === "ImaGen AI" && isEventTime && (
          <div className="fil_con" id="imagenaibtn">
            <div className="filter_btn">
              <Link to="/imagenai_prompteng" className="filter_btn" id="ev_btn_1">
                Go To Event{" "}
                <img src={arrow_forward} className="rotating_button" alt="" />
              </Link>
            </div>
          </div>
        )}
        {isVisible && (
          <div className="ev_formbox">
            <div className="ev_reg_form_heading">Registration Form</div>
            <div className="formParent">
              <form action="" className="ev_form_container">
                {formFields.map((field, index) => {
                  return (
                    <div key={index} className="ev_input_field">
                      {field.type === "text" ? (
                        <>
                          {/* adjust the display of the fields and render it accordingly  */}
                          <label className="ev_form_heading">
                            {field.title}
                          </label>
                          <input
                            type="text"
                            name={formData.form[field.title]}
                            value={formData.form[field.title]}
                            className="ev_inputbox"
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                form: {
                                  ...formData.form,
                                  [field.title]: e.target.value,
                                },
                              });
                            }}
                          />
                        </>
                      ) : field.type === "radio" ? (
                        <>
                          <label className="ev_form_heading">
                            {field.title}
                          </label>
                          {/* the changes in the option should be updated in the formData state */}
                          {field.options.map((option, index) => {
                            return (
                              <div key={index}>
                                <input
                                  type="radio"
                                  name={formData.form[field.title]}
                                  value={option}
                                  onChange={(e) => {
                                    setFormData({
                                      ...formData,
                                      form: {
                                        ...formData.form,
                                        [field.title]: e.target.value,
                                      },
                                    });
                                  }}
                                />
                                <label className="ev_form_heading">
                                  {option}
                                </label>
                              </div>
                            );
                          })}
                        </>
                      ) : field.type === "checkbox" ? (
                        <>
                          <label className="ev_form_heading">
                            {field.title}
                          </label>

                          {field.options.map((option, index) => {
                            return (
                              <div key={index}>
                                <input
                                  type="checkbox"
                                  name={formData.form[field.title]}
                                  value={option}
                                  onChange={(e) => {
                                    setFormData({
                                      ...formData,
                                      form: {
                                        ...formData.form,
                                        [field.title]: e.target.value,
                                      },
                                    });
                                  }}
                                />
                                <label className="ev_form_heading">
                                  {option}
                                </label>
                              </div>
                            );
                          })}
                        </>
                      ) : field.type === "team" ? (
                        <>
                          <label className="ev_form_heading">
                            {field.title}
                          </label>
                          <input type="text" className="ev_inputbox" />
                        </>
                      ) : (
                        <>
                          <label className="ev_form_heading">
                            {field.title}
                          </label>
                          <input
                            type="file"
                            className="ev_form_heading"
                            name={formData.form[field.title]}
                            value={formData.form[field.title]}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                form: {
                                  ...formData.form,
                                  [field.title]: e.target.value,
                                },
                              });
                            }}
                          />
                        </>
                      )}
                    </div>
                  );
                })}
                <div className="ev_form_submit">
                  <div className="fil_con" id="ev_page_fil_con_3">
                    {/* check with the state submitted to disable the button when it is true */}
                    {submitted ? (
                      <button className="filter_btn submited" disabled>
                        Please Wait....
                      </button>
                    ) : (
                      <button className="filter_btn" onClick={handleSubmit}>
                        Register
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default EventPage;
