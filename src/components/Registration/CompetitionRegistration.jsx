import React, { useState } from 'react';
import editicon from "../../assets/edit.png";
import deleteicon from "../../assets/delete.png";
import "./registrationMain.css";
import AddNewField from '../../overlays/overlays/add-new-field/AddNewField';
import AddedFieldRadio from '../../overlays/overlays/add-new-field/field-types/AddedFieldRadio';
import AddedFieldCheckbox from '../../overlays/overlays/add-new-field/field-types/AddedFieldCheckbox';
import AddedFieldUpload from '../../overlays/overlays/add-new-field/field-types/AddedFieldUpload';

function CompetitionRegistration() {
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

  const [additionalFields, setAdditionalFields] = useState([]); // Maintain a list of additional fields

  const [showNewField, setShowNewField] = useState(false); // Assuming you have a state to control the visibility of AddNewField
  const [additionalFieldData, setAdditionalFieldData] = useState(undefined);

  const handleChange = (field, value) => {
    setFormData(prevData => ({ ...prevData, [field]: value }));
  };

  const handleRadioChange = (value) => {
    setFormData(prevData => ({ ...prevData, acceptingResponses: value }));
  };

  const handleAddNewField = (newFieldData) => {
    setAdditionalFields(prevFields => [...prevFields, newFieldData]); // Append new field to the list
    setShowNewField(true); // Show the AddNewField component
  };

  const handleCloseNewField = () => {
    setShowNewField(false); // Hide the AddNewField component
  };

  return (
    <div className="registration-containor">
      <div className="responses">
        <p className="question">Accepting Responses?:</p>
        <div>
    <div className="registration-containor">
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

      <div className="dynamic-new-field-container">
      {additionalFields.map((field, index) => (
          <div key={index} className={`new-field-type-${field.fieldType}`}>
            {field.fieldType === "text" && <p>{field.fieldTitle}</p>}
            {field.fieldType === "radio" && <AddedFieldRadio additionalFieldData={field} />}
            {field.fieldType === "checkbox" && <AddedFieldCheckbox additionalFieldData={field} />}
            {field.fieldType === "upload" && <AddedFieldUpload additionalFieldData={field} />}
          </div>
        ))}
        
      </div>

      <div className="addnewfield">
        <button className="fieldbutton" onClick={handleAddNewField}>
          Add New Field
        </button>

        {showNewField &&
          <AddNewField
            onClose={handleCloseNewField}
            onAddNewField={handleAddNewField}
            setAdditionalFieldData={setAdditionalFieldData}
          />}

      </div>



      <div className="inputfieldcontainor">
        <div className="inputfield speakerquestions">
          <label className="titleoffield">
            Name of 2nd Team Member*
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
    </div>
      <div className="inputfieldcontainor">
        <div className="inputfield speakerquestions">
          <label className="titleoffield">
            Name of 2nd Team Member*
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
    </div>
  );
}

export default CompetitionRegistration;

