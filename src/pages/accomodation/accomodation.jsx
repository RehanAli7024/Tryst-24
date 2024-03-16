import React, { useEffect, useState } from "react";
import "./accomodation.css";
import Placeholder from "../contactus/placeholder";
import Placeholder1 from "../contactus/placeholder1";
import data1 from "./data1";
import FAQ_main from "./ac_faq_main";
import axios from "axios";
import { DOMAIN } from "../../domain";
import PaymentComponent from "./payment";

const Accomodation = () => {
  const [activeButton, setActiveButton] = useState("Registration Form");
  const [isClicked, setIsClicked] = useState(false);
  const [menCount, setMenCount] = useState(1);
  const [womenCount, setWomenCount] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [formDataArray, setFormDataArray] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});
  const [memberDetails, setMemberDetails] = useState([]);
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleFormSubmit = () => {
    setIsClicked(true);
    const membersData = [];
    for (let i = 0; i < menCount; i++) {
      membersData.push({ trystUID: "", name: "", aadhar: "" });
    }
    for (let i = 0; i < womenCount; i++) {
      membersData.push({ trystUID: "", name: "", aadhar: "" });
    }
    setFormDataArray(membersData);
  };

  const handleMenIncrement = () => {
    setMenCount(menCount + 1);
  };

  const handleMenDecrement = () => {
    if (menCount > 0) {
      setMenCount(menCount - 1);
    }
  };

  const handleWomenIncrement = () => {
    setWomenCount(womenCount + 1);
  };

  const handleWomenDecrement = () => {
    if (womenCount > 0) {
      setWomenCount(womenCount - 1);
    }
  };

  const handleCheckInSelect = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutSelect = (date) => {
    setCheckOutDate(date);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormDataArray((prevData) => {
      const newDataArray = [...prevData];
      newDataArray[index] = { ...newDataArray[index], [name]: value };
      return newDataArray;
    });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [formData, setFormData] = useState({
    memberDetails: [],
    checkin: "",
    checkout: "",
    men: 1,
    women: 1,
  });
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      memberDetails: formDataArray,
      checkin: "2024-" + "03-" + checkInDate,
      checkout: "2024-" + "03-" + checkOutDate,
      men: menCount,
      women: womenCount,
    }));
  }, [formDataArray, checkInDate, checkOutDate, menCount, womenCount]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");
    axios.post(`${DOMAIN}accomodation/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) => {
      console.log(res.data);
      setMemberDetails(res.data.members);
      setMen(res.data.men);
      setWomen(res.data.women);
      setPaymentDetails(res.data.options);
      setShowPayment(true);
    })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.error);
        } else {
          alert("Some error occured. Please try again!");
        }
      });
  };
  return (
    <>
      {!isLoggedIn ? (
        <div
          style={{
            fontFamily: "AudioWide",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Please login to book any accommodation.
        </div>
      ) : (
        <>
          <div className="acc_main">
            <div className="acc_heading">ACCOMODATION</div>
          </div>
          <div className="dashboard-nav" id="ac_nav">
            <button
              className={`dashboard-nav-button ${
                activeButton === "Registration Form" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Registration Form")}
            >
              Registration Form
            </button>
            <button
              className={`dashboard-nav-button ${
                activeButton === "FAQs" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("FAQs")}
            >
              FAQs
            </button>
            {/* <button
          className={`dashboard-nav-button ${activeButton === "Reaching IITD" ? "active" : ""
            }`}
          onClick={() => handleButtonClick("Reaching IITD")}
        >
          Reaching IITD
        </button> */}
            <button
              className={`dashboard-nav-button ${
                activeButton === "Contact Us" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Contact Us")}
            >
              Contact Us
            </button>
          </div>
          <div className="ac_pages">
            {activeButton === "Contact Us" && (
              <div className="ac_contact grid grid-cols-1 md:grid-cols-3 gap-20 m-auto mb-10 overall">
                <Placeholder data={data1.ctms[0]} id="ac_place" />
                <Placeholder data={data1.ctms[1]} id="ac_place" />
                <Placeholder data={data1.ctms[2]} id="ac_place" />
              </div>
            )}
            {activeButton === "FAQs" && (
              <div className="ac_faq">
                <FAQ_main />
              </div>
            )}
            {activeButton === "Reaching IITD" && (
              <div className="ac_reaching">
                <div className="ac_reaching_points">
                  <div className="ac_reaching_points_num">1. </div>
                  <div className="ac_reaching_points_text">
                    Travelling in Mumbai is very easy and systematic. The modes
                    of travelling in Mumbai are taxis, auto rickshaws, local
                    train and BEST Buses. IIT Bombay is located at Powai, which
                    is an eastern suburb in the North-Eastern part (Central
                    Railway Line) of Mumbai. The following link may provide you
                    a rough estimate of the auto fares between two stations Taxi
                    Auto fare Mumbai is in the form of a long narrow island,
                    almost a peninsula, thrusting southwards into the Arabian
                    Sea. In Mumbai, local trains run through the following
                    routes. Western Railway: Church gate to Borivali/Virar and
                    return. Central Railway: Mumbai CST to Karjat/Kasara and
                    return. Harbour Route: Mumbai CST to Andheri and return New
                    Bombay Route: Mumbai CST to Vashi/ Panvel and return. Kanjur
                    Marg, a Local Train Station is the closest local train stop
                    to IIT Bombay. It is located on Central Railway line. Kanjur
                    Marg Local Train Station is the closest local train stop to
                    IIT Bombay.
                  </div>
                </div>
                <div className="ac_reaching_points">
                  <div className="ac_reaching_points_num">2. </div>
                  <div className="ac_reaching_points_text">
                    Every team has to register online on the official Techfest
                    website for the competition.
                  </div>
                </div>
                <div className="ac_reaching_points">
                  <div className="ac_reaching_points_num">3. </div>
                  <div className="ac_reaching_points_text">
                    A Team ID will be allocated to the team on registration
                    which shall be used for future references.
                  </div>
                </div>
                <div className="ac_reaching_points">
                  <div className="ac_reaching_points_num">4. </div>
                  <div className="ac_reaching_points_text">
                    The decision of the organizers or judges shall be treated as
                    final and binding on all.
                  </div>
                </div>
                <div className="ac_reaching_points">
                  <div className="ac_reaching_points_num">5. </div>
                  <div className="ac_reaching_points_text">
                    No responsibility will be held by Techfest, IIT Bombay for
                    any late, lost or misdirected entries.
                  </div>
                </div>
                <div className="ac_reaching_points">
                  <div className="ac_reaching_points_num">6. </div>
                  <div className="ac_reaching_points_text">
                    Note that at any point of time the latest information will
                    be that which is on the website. However, registered
                    participants will be informed through mail about any
                    changes.
                  </div>
                </div>
                <div className="ac_reaching_points">
                  <div className="ac_reaching_points_num">7. </div>
                  <div className="ac_reaching_points_text">
                    All modes of official communication will be through the
                    Techfest e-mail. Participants are advised to keep track of
                    all folders in their e-mail accounts.
                  </div>
                </div>
              </div>
            )}
            {activeButton === "Registration Form" && (
              <div className="Registration_form_containor">
                {!isClicked && (
                  <>
                    <div className="initial_details">
                      <p className="Form_details_accomodation">
                        At TRYST, we are committed to providing unparalleled
                        satisfaction to all our participants. Our utmost
                        priority is to ensure that you have a secure and
                        comfortable home away from home. We go above and beyond
                        to meet all your accommodation needs, providing
                        exceptional service every step of the way. In addition
                        to top-notch accommodation facilities, we take pride in
                        offering a diverse range of cuisine options at our food
                        outlets, catering to every palate. Our team is dedicated
                        to making your experience with us truly memorable. We
                        place a strong emphasis on hospitality management and
                        take great care in ensuring that your stay is nothing
                        short of exceptional. At TRYST, we are passionate about
                        providing exceptional service and hospitality to all of
                        our guests, and we look forward to welcoming you to our
                        community.
                      </p>

                      <div className="dates_accomodation">
                        <div className="checkin_accomodation">
                          <div className="label_date_accomodation">
                            Check-In
                          </div>
                          <div className="date_options">
                            <button
                              className={
                                checkInDate == "27"
                                  ? "datepicker_btn selecteddate"
                                  : "datepicker_btn"
                              }
                              onClick={() => handleCheckInSelect("27")}
                            >
                              27
                            </button>
                            <button
                              className={
                                checkInDate == "28"
                                  ? "datepicker_btn selecteddate"
                                  : "datepicker_btn"
                              }
                              onClick={() => handleCheckInSelect("28")}
                            >
                              28
                            </button>
                            <button
                              className={
                                checkInDate == "29"
                                  ? "datepicker_btn selecteddate"
                                  : "datepicker_btn"
                              }
                              onClick={() => handleCheckInSelect("29")}
                            >
                              29
                            </button>
                            <button
                              className={
                                checkInDate == "30"
                                  ? "datepicker_btn selecteddate"
                                  : "datepicker_btn"
                              }
                              onClick={() => handleCheckInSelect("30")}
                            >
                              30
                            </button>
                            <button
                              className={
                                checkInDate == "31"
                                  ? "datepicker_btn selecteddate"
                                  : "datepicker_btn"
                              }
                              onClick={() => handleCheckInSelect("31")}
                            >
                              31
                            </button>
                          </div>
                        </div>
                        <div className="checkout_accomodation">
                          <div className="label_date_accomodation">
                            Check-Out
                          </div>
                          <div className="date_options">
                            <button
                              className={
                                checkOutDate == "27"
                                  ? "datepicker_btn selecteddate"
                                  : "datepicker_btn"
                              }
                              onClick={() => handleCheckOutSelect("27")}
                            >
                              27
                            </button>
                            <button
                              className={
                                checkOutDate == "28"
                                  ? "datepicker_btn selecteddate"
                                  : "datepicker_btn"
                              }
                              onClick={() => handleCheckOutSelect("28")}
                            >
                              28
                            </button>
                            <button
                              className={
                                checkOutDate == "29"
                                  ? "datepicker_btn selecteddate"
                                  : "datepicker_btn"
                              }
                              onClick={() => handleCheckOutSelect("29")}
                            >
                              29
                            </button>
                            <button
                              className={
                                checkOutDate == "30"
                                  ? "datepicker_btn selecteddate"
                                  : "datepicker_btn"
                              }
                              onClick={() => handleCheckOutSelect("30")}
                            >
                              30
                            </button>
                            <button
                              className={
                                checkOutDate == "31"
                                  ? "datepicker_btn selecteddate"
                                  : "datepicker_btn"
                              }
                              onClick={() => handleCheckOutSelect("31")}
                            >
                              31
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="members_details_accomodation">
                        <div className="title_members_details">
                          No. of People
                        </div>
                        <div className="selection_members">
                          <div className="selector_men_number">
                            <div className="men_accomodation">Men</div>
                            <div className="men_number_selector">
                              <button
                                className="minus_btn_members"
                                onClick={handleMenDecrement}
                              ></button>
                              <div className="no_of_people">{menCount}</div>
                              <button
                                className="plus_btn_members"
                                onClick={handleMenIncrement}
                              ></button>
                            </div>
                          </div>
                          <div className="selector_men_number">
                            <div className="men_accomodation">Women</div>
                            <div className="men_number_selector">
                              <button
                                className="minus_btn_members"
                                onClick={handleWomenDecrement}
                              ></button>
                              <div className="no_of_people">{womenCount}</div>
                              <button
                                className="plus_btn_members"
                                onClick={handleWomenIncrement}
                              ></button>
                            </div>
                          </div>
                        </div>
                        <button
                          className="next_btn_accomodation"
                          onClick={handleFormSubmit}
                          disabled={
                            !checkInDate ||
                            !checkOutDate ||
                            checkInDate > checkOutDate ||
                            womenCount + menCount == 0
                          }
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {isClicked &&
                  (showPayment ? (
                    <div className="members_details">
                      <PaymentComponent options={paymentDetails} members={memberDetails} men={men} women={women} />
                    </div>
                  ) : (
                    <div className="members_details">
                      {formDataArray.map((formData, index) => (
                        <div key={index} className="members_personal_data">
                          <h2 className="members_headings">
                            Member {index + 1} Details
                          </h2>
                          <form
                            className="members_details_form"
                            onSubmit={handleSubmit}
                          >
                            <div className="members_details_field">
                              <label htmlFor={`trystUID-${index}`}>
                                Tryst UID :
                              </label>
                              <input
                                type="text"
                                id={`trystUID-${index}`}
                                name="trystUID"
                                value={formData.trystUID}
                                onChange={(e) => handleChange(e, index)}
                                required
                              />
                            </div>
                            <div className="members_details_field">
                              <label htmlFor={`name-${index}`}>
                                Full Name (as on Aadhar Card) :
                              </label>
                              <input
                                type="text"
                                id={`name-${index}`}
                                name="name"
                                value={formData.name}
                                required
                                onChange={(e) => handleChange(e, index)}
                              />
                            </div>
                            <div className="members_details_field">
                              <label htmlFor={`aadhar-${index}`}>
                                Aadhar Card No :
                              </label>
                              <input
                                type="number"
                                minLength={12}
                                maxLength={12}
                                id={`aadhar-${index}`}
                                name="aadhar"
                                value={formData.aadhar}
                                required
                                onChange={(e) => handleChange(e, index)}
                              />
                            </div>
                          </form>
                        </div>
                      ))}
                      <div className="terms_and_conditions_accomodation">
                        <label>
                          <input
                            className="terms_and_conditions_box"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          I certify that the above entered information is true
                          to the best of my knowledge and belief and I
                          understand that I subject myself to disciplinary
                          action in the event that the above facts are found to
                          be falsified which includes immediate dismissal from
                          the accommodation facilities.
                        </label>
                      </div>
                      {isChecked && (
                        <button
                          className="submit_details_members"
                          onClick={handleSubmit}
                        >
                          
                          Submit
                        </button>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Accomodation;
