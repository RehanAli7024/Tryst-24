import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import editicon from "../../assets/edit.png";
import deleteicon from "../../assets/delete.png";
import "./registration.css";
import AddNewField from '../../overlays/overlays/add-new-field/AddNewField';
import AddedFieldRadio from '../../overlays/overlays/add-new-field/field-types/AddedFieldRadio';
import AddedFieldCheckbox from '../../overlays/overlays/add-new-field/field-types/AddedFieldCheckbox';
import AddedFieldUpload from '../../overlays/overlays/add-new-field/field-types/AddedFieldUpload';

function GuestRegisteration({ handleClose, setRegistrationOpen }) {
  const location = useLocation();
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

  const [showNewField, setShowNewField] = useState(false);
  const [additionalFieldData, setAdditionalFieldData] = useState(undefined);

  const handleShowNewField = () => {
    setShowNewField(true);
  };
  
  
  
  useEffect(() => {
    let handler = (e) => {
      if (!registrationRef.current.contains(e.target)) {
        setRegistrationOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  }, [setRegistrationOpen]);

  let registrationRef = useRef();

  const handleChange = (field, value) => {
    setFormData(prevData => ({ ...prevData, [field]: value }));
  };

  const handleRadioChange = (value) => {
    setFormData(prevData => ({ ...prevData, acceptingResponses: value }));
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
    // You can perform additional actions with the form data here
  };
  const handleAddNewField = () => {
    console.log('Adding new field');

    setShowNewField(true);

  };

  const handleCloseNewField = () => {
    setShowNewField(false);
  }

  useEffect(() => {
    // Access eventData from location state
    const eventData = location.state?.eventData;
    console.log("EventDetails data in Registration:", eventData);
  }, [location.state]);



  return (
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

          <div className="dynamic-new-field-container">
        <div className="new-field-type-text">
          {additionalFieldData && additionalFieldData.fieldType === "text" && <p>{additionalFieldData.fieldTitle}</p>}
        </div>

        <div className="new-field-type-radio">
          {additionalFieldData && additionalFieldData.fieldType === "radio" && <AddedFieldRadio additionalFieldData={additionalFieldData} />}
        </div>

        <div className="new-field-type-checkbox">
          {additionalFieldData && additionalFieldData.fieldType === "checkbox" && <AddedFieldCheckbox additionalFieldData={additionalFieldData} />}
        </div>

        <div className="new-field-type-checkbox">
          {additionalFieldData && additionalFieldData.fieldType === "upload" && <AddedFieldUpload additionalFieldData={additionalFieldData} />}
        </div>
        
      </div>

          <div className="addnewfield">
            <button className="fieldbutton" onClick={handleAddNewField}>
              Add New Field
            </button>

            {showNewField &&
          <AddNewField
            onClose={handleCloseNewField}
            setAdditionalFieldData={setAdditionalFieldData}
          />}

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
  );
}

export default GuestRegisteration;