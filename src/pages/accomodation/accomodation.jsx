import React, { useState } from "react";
import "./accomodation.css";
import Placeholder from "../contactus/placeholder";
import data1 from "./data";
const Accomodation = () => {
  const [activeButton, setActiveButton] = useState("Registration Form");
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <>
      <div className="acc_main">
        <div className="acc_heading">ACCOMODATION</div>
      </div>
      <div className="dashboard-nav">
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
        <div className="ac_contact grid grid-cols-1 md:grid-cols-3 gap-20 m-auto mb-10 overall">
            <Placeholder data={data1.ctms[0]} id="ac_place"/>
            <Placeholder data={data1.coordi[0]} id="ac_place"/>
            <Placeholder data={data1.coordi[1]} id="ac_place"/>
        </div>
      </div>
    </>
  );
};
export default Accomodation;
