import React, { useState, useEffect } from 'react';
import { DOMAIN } from '../../domain';
import './registrationMain.css';
import AddNewField from '../../overlays/overlays/add-new-field/AddNewField';
import EditField from '../../overlays/overlays/add-new-field/editfield';
import axios from 'axios';
import AddedField from '../../overlays/overlays/add-new-field/field-types/AddedFieldRadio';
import { useRef } from 'react';
import { Navigate } from 'react-router-dom';

function CompetitionRegistration({ setRegistrationOpen }) {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({});
  const [editpayload, setEditPayload] = useState({});
  const [formData, setFormData] = useState({
    acceptingResponses: true,
    event_id: localStorage.getItem('id'),
    formFields: [],
    event_type: 'competition'
  });

  const [showNewField, setShowNewField] = useState(false);
  const [showEditField, setShowEditField] = useState([false, null, null]);

  const handleShowNewField = () => {
    setShowNewField(true);
  };

  const handleCloseNewField = () => {
    setShowNewField(false);
  }

  const handleCloseEditField = () => {
    setShowEditField(false);
  }

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


  const handleDeleteFormField = (indexToDelete) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      formFields: prevFormData.formFields.filter((_, index) => index !== indexToDelete)
    }));
  };



  const handleSave = () => {
    localStorage.removeItem('id');
    const token = localStorage.getItem('admin_access_token');
    console.log(formData);
    axios
      .post(
        `${DOMAIN}registration/`,
        {
          ...formData,
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
        localStorage.removeItem('id');
        navigate('/eventadmin');
        setRegistrationOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleresponseChange = (name, value) => {
    if (name === 'acceptingResponses') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value === 'Yes'
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  const handleEditFormField = (indexToEdit) => {
    console.log(indexToEdit);
    const fieldToEdit = formData.formFields[indexToEdit];
    console.log(fieldToEdit);
    setShowEditField([true, indexToEdit, fieldToEdit]);
  };

  useEffect(() => {
    if (Object.keys(payload).length === 0) return;
    setFormData(prevData => ({
      ...prevData,
      formFields: [...prevData.formFields, payload]
    }));
  }, [payload]);

  useEffect(() => {
    if (Object.keys(editpayload).length === 0) return;
    setFormData(editpayload);
  }, [editpayload]);

  useEffect(() => {
    console.log(formData);
  }
    , [formData]);
  return (
    <div className="registration-containor" ref={registrationRef}>
      <div className="responses">
        <p className="question">Accepting Responses?:</p>
        <div>
          <input
            type="radio"
            name="acceptingResponses"
            value="Yes"
            checked={formData.acceptingResponses === true}
            onChange={e => handleresponseChange('acceptingResponses', e.target.value)}
          />
          <label>Yes</label>
        </div>
        <div>
          <input
            type="radio"
            name="acceptingResponses"
            value="No"
            checked={formData.acceptingResponses === false}
            onChange={e => handleresponseChange('acceptingResponses', e.target.value)}
          />
          <label>No</label>
        </div>
      </div>

      <div className="dynamic-new-field-container">
        {formData.formFields.map((field, index) => (

          <div key={index} className={`new-field-type-${field}`}>
            <AddedField
              key={index}
              index={index}
              field={field}
              onDelete={() => handleDeleteFormField(index)}
              onEdit={() => handleEditFormField(index)}
            />
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
            callbackpayload={setPayload}
          />
        )}

        {showEditField[0] && (
          <EditField
            onClose={handleCloseEditField}
            callbackFormData={setEditPayload}
            dataToEdit={showEditField[2]}
            indexToEdit={showEditField[1]}
            formData={formData}
          />
        )}
      </div>

      <div className="addnewfield savebutton">
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div >
  );
}

export default CompetitionRegistration;