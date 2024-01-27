import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { DOMAIN } from '../../domain';
import editicon from '../../assets/edit.png';
import deleteicon from '../../assets/delete.png';
import './registrationMain.css';
import AddNewField from '../../overlays/overlays/add-new-field/AddNewField';
import axios from 'axios';
import AddedFieldRadio from '../../overlays/overlays/add-new-field/field-types/AddedFieldRadio';
import AddedFieldCheckbox from '../../overlays/overlays/add-new-field/field-types/AddedFieldCheckbox';
import AddedFieldUpload from '../../overlays/overlays/add-new-field/field-types/AddedFieldUpload';
import AddedFieldText from '../../overlays/overlays/add-new-field/field-types/AddedFieldText';

function GuestRegistration({ handleClose, setRegistrationOpen }) {
  const event_id = localStorage.getItem('event_id');
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
    event_id: event_id,
  });

  const [additionalFields, setAdditionalFields] = useState([]); // Maintain a list of additional fields
  const [showNewField, setShowNewField] = useState(false);
  const [newFieldTitle, setNewFieldTitle] = useState('');
  const [newFieldType, setNewFieldType] = useState('');
  const [additionalFieldData, setAdditionalFieldData] = useState(undefined);
  const [additionalFieldResponses, setAdditionalFieldResponses] = useState({}); // New state for additional field responses

  const handleShowNewField = () => {
    setShowNewField(true);
  };

  const handleCloseNewField = () => {
    setShowNewField(false);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!registrationRef.current.contains(e.target)) {
        setRegistrationOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [setRegistrationOpen]);

  let registrationRef = useRef();

  const handleChange = (field, value, index) => {
    if (index === undefined) {
      // Handle changes for the standard fields
      setFormData((prevData) => ({ ...prevData, [field]: value }));
    } else {
      // Handle changes for additional fields
      setAdditionalFields((prevFields) => {
        const updatedFields = [...prevFields];
        updatedFields[index] = { ...updatedFields[index], response: value };
        return updatedFields;
      });

      // Update additional field responses
      setAdditionalFieldResponses((prevResponses) => {
        const updatedResponses = { ...prevResponses };
        updatedResponses[additionalFields[index].fieldName] = value;
        return updatedResponses;
      });
    }
  };

  const handleDeleteField = (index) => {
    setAdditionalFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields.splice(index, 1);
      return updatedFields;
    });

    setAdditionalFieldResponses((prevResponses) => {
      const updatedResponses = { ...prevResponses };
      delete updatedResponses[additionalFields[index].fieldName];
      return updatedResponses;
    });
  };

  const handleSave = () => {
    // Log form data
    const allResponses = [
      { fieldName: 'acceptingResponses', response: formData.acceptingResponses },
      { fieldName: 'yourName', response: formData.yourName },
      { fieldName: 'phoneNumber', response: formData.phoneNumber },
      { fieldName: 'email', response: formData.email },
      { fieldName: 'collegeState', response: formData.collegeState },
      { fieldName: 'collegeCity', response: formData.collegeCity },
      { fieldName: 'collegeName', response: formData.collegeName },
      { fieldName: 'referralId', response: formData.referralId },
      { fieldName: 'speakerQuestions', response: formData.speakerQuestions },
      // ... Add other standard fields as needed
      ...additionalFields.map((field) => ({
        fieldName: field.fieldTitle,
        response: additionalFieldResponses[field.fieldName] || '',
      })),
    ];

    // Log all responses
    console.log('All Responses:', allResponses);

    const token = localStorage.getItem('token');
    axios
      .post(
        `${DOMAIN}registration/`,
        {
          ...formData,
          additionalFields: additionalFields,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res);
        // handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddNewField = (newFieldData) => {
    const newFieldName = newFieldData.fieldTitle.toLowerCase().replace(/\s+/g, '_');

    // Check if the field name already exists
    if (additionalFields.some((field) => field.fieldName === newFieldName)) {
      alert('Field name already exists. Please choose a different name.');
      return;
    }

    const updatedFieldData = {
      ...newFieldData,
      fieldName: newFieldName,
    };

    setAdditionalFields((prevFields) => [...prevFields, updatedFieldData]);

    // Initialize response for the new field
    setAdditionalFieldResponses((prevResponses) => ({
      ...prevResponses,
      [newFieldName]: '',
    }));

    setNewFieldTitle(''); // Clear newFieldTitle state
    setNewFieldType(''); // Clear newFieldType state
    setShowNewField(false); // Set to false to close the overlay after adding a new field
  };

  useEffect(() => {
    // Access eventData from location state
    const eventData = location.state?.eventData;
    console.log('EventDetails data in Registration:', eventData);
  }, [location.state]);

  return (
    <div className="registration-containor" ref={registrationRef}>
      <div className="responses">
        <p className="question">Accepting Responses?:</p>
        <div>
          <input
            type="radio"
            name="acceptingResponses"
            value="Yes"
            onChange={() => handleChange('acceptingResponses', 'Yes')}
          />
          <label>Yes</label>
        </div>
        <div>
          <input
            type="radio"
            name="acceptingResponses"
            value="No"
            onChange={() => handleChange('acceptingResponses', 'No')}
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
            <option value="" disabled selected>
              Select your option
            </option>
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
            <option value="" disabled selected>
              Select your option
            </option>
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
            <option value="" disabled selected>
              Select your option
            </option>
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
            {field.fieldType === 'text' && (
              <AddedFieldText
                additionalFieldData={field}
                onChange={(value) => handleChange('additionalField', value, index)}
                onDelete={() => handleDeleteField(index)}
              />
            )}
            {field.fieldType === 'radio' && (
              <AddedFieldRadio
                additionalFieldData={field}
                onChange={(value) => handleChange('additionalField', value, index)}
                onDelete={() => handleDeleteField(index)}
              />
            )}
            {field.fieldType === 'checkbox' && (
              <AddedFieldCheckbox
                additionalFieldData={field}
                onChange={(value) => handleChange('additionalField', value, index)}
                onDelete={() => handleDeleteField(index)}
              />
            )}
            {field.fieldType === 'upload' && (
              <AddedFieldUpload
                additionalFieldData={field}
                onChange={(value) => handleChange('additionalField', value, index)}
                onDelete={() => handleDeleteField(index)}
              />
              
            )}
           
          </div>
        ))}
      </div>
      <div className="addnewfield">
        <button className="fieldbutton" onClick={handleShowNewField}>
          Add New Field
        </button>
        {showNewField && (
          <AddNewField
            onClose={handleCloseNewField}
            onAddNewField={handleAddNewField}
            setAdditionalFieldData={setAdditionalFieldData}
            newFieldTitle={newFieldTitle}
            setNewFieldTitle={setNewFieldTitle}
            newFieldType={newFieldType}
            setNewFieldType={setNewFieldType}
          />
        )}
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

export default GuestRegistration;
