import React, { useState } from "react";
import "./accomodation.css";
import Placeholder from "../contactus/placeholder";
import data1 from "./data1";
import FAQ_main from "./ac_faq_main";
import Registrationform from "./Registration_form";

const Accomodation = () => {
  const [activeButton, setActiveButton] = useState("Registration Form");
  const [isClicked, setIsClicked] = useState(false);
  const [menCount, setMenCount] = useState(1);
  const [womenCount, setWomenCount] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [formDataArray, setFormDataArray] = useState([]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleFormSubmit = () => {
    setIsClicked(true);
    const membersData = [];
    for (let i = 0; i < menCount; i++) {
      membersData.push({ trystUID: "", fullName: "", aadhar: "" });
    }
    for (let i = 0; i < womenCount; i++) {
      membersData.push({ trystUID: "", fullName: "", aadhar: "" });
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

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Number of Men:", menCount);
  console.log("Number of Women:", womenCount);
  console.log("Check-In Date:", checkInDate);
  console.log("Check-Out Date:", checkOutDate);
  console.log("Form submitted with data:", formDataArray);
  // You can perform further actions like sending the data to a server here
};

  return (
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
        <button
          className={`dashboard-nav-button ${
            activeButton === "Reaching IITD" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Reaching IITD")}
        >
          Reaching IITD
        </button>
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
            <Placeholder data={data1.coordi[0]} id="ac_place" />
            <Placeholder data={data1.coordi[1]} id="ac_place" />
          </div>
        )}
        {activeButton === "FAQs" && (
          <div className="ac_faq">
            <FAQ_main />
          </div>
        )}
        {activeButton === "Reaching IITD" && null}
        {activeButton === "Registration Form" && (
          <div className="Registration_form_containor">
            {!isClicked && (
              <div className="initial_details">
                <p className="Form_details_accomodation">
                  At TRYST, we are committed to providing unparalleled
                  satisfaction to all our participants. Our utmost priority is
                  to ensure that you have a secure and comfortable home away
                  from home. We go above and beyond to meet all your
                  accommodation needs, providing exceptional service every step
                  of the way. In addition to top-notch accommodation facilities,
                  we take pride in offering a diverse range of cuisine options
                  at our food outlets, catering to every palate. Our team is
                  dedicated to making your experience with us truly memorable.
                  We place a strong emphasis on hospitality management and take
                  great care in ensuring that your stay is nothing short of
                  exceptional. At TRYST, we are passionate about providing
                  exceptional service and hospitality to all of our guests, and
                  we look forward to welcoming you to our community.
                </p>

                <div className="dates_accomodation">
                  <div className="checkin_accomodation">
                    <div className="label_date_accomodation">Check-In</div>
                    <div className="date_options">
                      <button
                        className="datepicker_btn"
                        onClick={() => handleCheckInSelect("27")}
                      >
                        27
                      </button>
                      <button
                        className="datepicker_btn"
                        onClick={() => handleCheckInSelect("28")}
                      >
                        28
                      </button>
                      <button
                        className="datepicker_btn"
                        onClick={() => handleCheckInSelect("29")}
                      >
                        29
                      </button>
                      <button
                        className="datepicker_btn"
                        onClick={() => handleCheckInSelect("30")}
                      >
                        30
                      </button>
                      <button
                        className="datepicker_btn"
                        onClick={() => handleCheckInSelect("31")}
                      >
                        31
                      </button>
                    </div>
                  </div>
                  <div className="checkout_accomodation">
                    <div className="label_date_accomodation">Check-Out</div>
                    <div className="date_options">
                      <button
                        className="datepicker_btn"
                        onClick={() => handleCheckOutSelect("27")}
                      >
                        27
                      </button>
                      <button
                        className="datepicker_btn"
                        onClick={() => handleCheckOutSelect("28")}
                      >
                        28
                      </button>
                      <button
                        className="datepicker_btn"
                        onClick={() => handleCheckOutSelect("29")}
                      >
                        29
                      </button>
                      <button
                        className="datepicker_btn"
                        onClick={() => handleCheckOutSelect("30")}
                      >
                        30
                      </button>
                      <button
                        className="datepicker_btn"
                        onClick={() => handleCheckOutSelect("31")}
                      >
                        31
                      </button>
                    </div>
                  </div>
                </div>
                <div className="members_details_accomodation">
                  <div className="title_members_details">No. of People</div>
                  <div className="selection_members">
                    <div className="selector_men_number">
                      <div className="men_accomodation">Men</div>
                      <div className="men_number_selector">
                        <button
                          className="minus_btn_members"
                          onClick={handleMenDecrement}
                        >
                          -
                        </button>
                        <div className="no_of_people">{menCount}</div>
                        <button
                          className="plus_btn_members"
                          onClick={handleMenIncrement}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="selector_men_number">
                      <div className="men_accomodation">Women</div>
                      <div className="men_number_selector">
                        <button
                          className="minus_btn_members"
                          onClick={handleWomenDecrement}
                        >
                          -
                        </button>
                        <div className="no_of_people">{womenCount}</div>
                        <button
                          className="plus_btn_members"
                          onClick={handleWomenIncrement}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="next_btn_accomodation"
                    onClick={handleFormSubmit}
                  >
                    Next
                  </div>
                </div>
              </div>
            )}
            {isClicked && (
              <div className="members_details">
                {formDataArray.map((formData, index) => (
                  <div key={index} className="members_personal_data">
                    <h2>Member {index + 1} Details</h2>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor={`trystUID-${index}`}>Tryst UID:</label>
                        <input
                          type="text"
                          id={`trystUID-${index}`}
                          name="trystUID"
                          value={formData.trystUID}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </div>
                      <div>
                        <label htmlFor={`fullName-${index}`}>Full Name:</label>
                        <input
                          type="text"
                          id={`fullName-${index}`}
                          name="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </div>
                      <div>
                        <label htmlFor={`aadhar-${index}`}>Aadhar:</label>
                        <input
                          type="text"
                          id={`aadhar-${index}`}
                          name="aadhar"
                          value={formData.aadhar}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </div>
                    </form>
                  </div>
                ))}
                <button className="submit_details_members" onClick={handleSubmit}>Submit</button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Accomodation;
