import React, { useState } from 'react';
import Navbar from "../Navbar";
import editicon from "../../assets/edit.png";
import deleteicon from "../../assets/delete.png";
import "./Registeration.css";

function Registeration() {
  const [formData, setFormData] = useState({
    acceptingResponses: '',
    yourName: '',
    phoneNumber: '',
    email: '',
    collegeState: '',
    collegeCity: '',
    collegeName: '',
    referralId: '',
    speakerQuestions: '',
    additionalField: '', // Added for the new field
  });

  const handleChange = (field, value) => {
    setFormData(prevData => ({ ...prevData, [field]: value }));
  };

  const handleRadioChange = (value) => {
    setFormData(prevData => ({ ...prevData, acceptingResponses: value }));
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
  };
  const handleAddNewField = () => {
    console.log('Adding new field');
  };

  return (
    <div className="PopUP">
      <div className="containor">
        <Navbar></Navbar>
        <div className="responses">
          <p className="question">Accepting Responses?:</p>
          <div>
            <input
              type="radio"
              name="acceptingResponses"
              value="Yes"
              onChange={() => handleRadioChange('Yes')}
            />
            <label>Yes</label>
          </div>
          <div>
            <input
              type="radio"
              name="acceptingResponses"
              value="No"
              onChange={() => handleRadioChange('No')}
            />
            <label>No</label>
          </div>
        </div>
        <div className="inputfieldcontainor">
          <div className="inputfield">
            <label className="titleoffield">Your Name*</label>
            <input
              className="box"
              type="text"
              onChange={(e) => handleChange('yourName', e.target.value)}
            />
          </div>
          <div className="inputfield">
            <label className="titleoffield">Phone Number*</label>
            <input
              className="box"
              type="text"
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
            />
          </div>
          <div className="inputfield">
            <label className="titleoffield">E-Mail ID</label>
            <input
              className="box"
              type="email"
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
        </div>
        <div className="inputfieldcontainor">
          <div className="inputfield">
            <label className="titleoffield">College State*</label>
            <select
              className="box"
              onChange={(e) => handleChange('collegeState', e.target.value)}
            >
              <option value="" disabled selected>Select your option</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            </select>
          </div>
          <div className="inputfield">
            <label className="titleoffield">College City*</label>
            <select
              className="box"
              onChange={(e) => handleChange('collegeCity', e.target.value)}
            >
              <option value="" disabled selected>Select your option</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            </select>
          </div>
          <div className="inputfield">
            <label className="titleoffield">College Name*</label>
            <select
              className="box"
              onChange={(e) => handleChange('collegeName', e.target.value)}
            >
              <option value="" disabled selected>Select your option</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            </select>
          </div>
        </div>
        <div className="inputfield referral">
          <label className="titleoffield referral">CA Referral ID*</label>
          <input
            className="box"
            type="text"
            onChange={(e) => handleChange('referralId', e.target.value)}
          />
        </div>

        <div className="addnewfield">
          <button className="fieldbutton" onClick={handleAddNewField}>
            Add New Field
          </button>

        </div>
        <div className="inputfieldcontainor">
          <div className="inputfield speakerquestions">
            <label className="titleoffield">
              Any questions you have for the Speaker(s)?
            </label>
            <input
              className="box"
              type="text"
              onChange={(e) => handleChange('speakerQuestions', e.target.value)}
            />
          </div>
          <button className="edit">
            <img src={editicon} alt="edit icon" />
          </button>
          <button className="delete">
            <img src={deleteicon} alt="delete icon" />
          </button>
        </div>
        <div className="addnewfield savebutton">
          <button className="save" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registeration;
