import React, { useState } from "react";
import "./accomodation.css";
import Placeholder from "../contactus/placeholder";
import Placeholder1 from "../contactus/placeholder1";
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
          <div className="ac_contact grid grid-cols-1 md:grid-cols-3 m-auto gap-20 mb-20 overall">
            <Placeholder data={data1.ctms[0]} id="ac_place" />
            <Placeholder1 data={data1.coordi[0]} id="ac_place" />
            <Placeholder1 data={data1.coordi[1]} id="ac_place" />
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
                Travelling in Mumbai is very easy and systematic. The modes of travelling in Mumbai are taxis, auto rickshaws, local train and BEST Buses. IIT Bombay is located at Powai, which is an eastern suburb in the North-Eastern part (Central Railway Line) of Mumbai. The following link may provide you a rough estimate of the auto fares between two stations Taxi Auto fare Mumbai is in the form of a long narrow island, almost a peninsula, thrusting southwards into the Arabian Sea. In Mumbai, local trains run through the following routes. Western Railway: Church gate to Borivali/Virar and return. Central Railway: Mumbai CST to Karjat/Kasara and return. Harbour Route: Mumbai CST to Andheri and return New Bombay Route: Mumbai CST to Vashi/ Panvel and return. Kanjur Marg, a Local Train Station is the closest local train stop to IIT Bombay. It is located on Central Railway line. Kanjur Marg Local Train Station is the closest local train stop to IIT Bombay.
              </div>
            </div>
            <div className="ac_reaching_points">
              <div className="ac_reaching_points_num">2. </div>
              <div className="ac_reaching_points_text">
                Every team has to register online on the official Techfest website for the competition.
              </div>
            </div>
            <div className="ac_reaching_points">
              <div className="ac_reaching_points_num">3. </div>
              <div className="ac_reaching_points_text">
                A Team ID will be allocated to the team on registration which shall be used for future references.
              </div>
            </div>
            <div className="ac_reaching_points">
              <div className="ac_reaching_points_num">4. </div>
              <div className="ac_reaching_points_text">
                The decision of the organizers or judges shall be treated as final and binding on all.
              </div>
            </div>
            <div className="ac_reaching_points">
              <div className="ac_reaching_points_num">5. </div>
              <div className="ac_reaching_points_text">
                No responsibility will be held by Techfest, IIT Bombay for any late, lost or misdirected entries.
              </div>
            </div>
            <div className="ac_reaching_points">
              <div className="ac_reaching_points_num">6. </div>
              <div className="ac_reaching_points_text">
                Note that at any point of time the latest information will be that which is on the website. However, registered participants will be informed through mail about any changes.
              </div>
            </div>
            <div className="ac_reaching_points">
              <div className="ac_reaching_points_num">7. </div>
              <div className="ac_reaching_points_text">
                All modes of official communication will be through the Techfest e-mail. Participants are advised to keep track of all folders in their e-mail accounts.
              </div>
            </div>
          </div>
        )}
        {activeButton === "Registration Form" && (null)}
      </div>
    </>
  );
};

export default Accomodation;
