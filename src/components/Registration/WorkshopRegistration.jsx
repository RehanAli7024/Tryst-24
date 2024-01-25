import React, { useState } from 'react';
import Navbar from "../Navbar";
import editicon from "../../assets/edit.png";
import deleteicon from "../../assets/delete.png";
import "./registration.css";

function WorkshopRegistration() {
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
    // You can perform additional actions with the form data here
  };
  const handleAddNewField = () => {
    // You can add logic here to handle the addition of a new field
    // For now, let's just console log a message
    console.log('Adding new field');
  };

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
        
        <div className="addnewfield savebutton">
          <button className="save" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
  );
}

export default WorkshopRegistration;



// import Navbar from "../Navbar";
// import "./Registeration.css";
// import editicon from "../../assets/edit.png";
// import deleteicon from "../../assets/delete.png";
// function Registeration() {
//   return (
//     <div className="PopUP">
//       <div className="containor">
//         <Navbar></Navbar>
//         <div className="responses">
//           <p className="question">Accepting Responses?:</p>
//           <div>
//             <input type="radio"></input> <label>Yes</label>
//           </div>
//           <div>
//             <input type="radio"></input> <label>No</label>
//           </div>
//         </div>
//         <div className="inputfieldcontainor">
//           <div className="inputfield">
//             <label className="titleoffield">Your Name*</label>
//             <input className="box" type="text"></input>
//           </div>
//           <div className="inputfield">
//             <label className="titleoffield">Phone Number*</label>
//             <input className="box" type="text"></input>
//           </div>
//           <div className="inputfield">
//             <label className="titleoffield">E-Mail ID</label>
//             <input className="box" type="text"></input>
//           </div>
//         </div>
//         <div className="inputfieldcontainor">
//           <div className="inputfield">
//             <label className="titleoffield">College State*</label>
//             <select className="box">
//                 <option value="" disabled selected>Select your option</option>
//                 <option value="Andhra Pradesh">Andhra Pradesh</option>
//                 <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//             </select>
//           </div>
//           <div className="inputfield">
//             <label className="titleoffield">College City*</label>
//             <select className="box">
//             <option value="" disabled selected>Select your option</option>
//                 <option value="Andhra Pradesh">Andhra Pradesh</option>
//                 <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//             </select>
//           </div>
//           <div className="inputfield">
//             <label className="titleoffield">College Name*</label>
//             <select className="box">
//             <option value="" disabled selected>Select your option</option>
//                 <option value="Andhra Pradesh">Andhra Pradesh</option>
//                 <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//             </select>
//           </div>
//         </div>
//         <div className="inputfield referral">
//           <label className="titleoffield referral">CA Referral ID*</label>
//           <input className="box" type="text"></input>
//         </div>
//         <div className="addnewfield">
//           <button className="fieldbutton">Add New Field</button>
//         </div>
//         <div className="inputfieldcontainor">
//           <div className="inputfield speakerquestions">
//             <label className="titleoffield ">
//               Any questions you have for the Speaker(s)?
//             </label>
//             <input className="box" type="text"></input>
//           </div>
//           <button className="edit">
//             <img src={editicon}></img>
//           </button>
//           <button className="delete">
//             <img src={deleteicon}></img>
//           </button>
//         </div>
//         <div className="addnewfield savebutton">
//           <button className="save">Save</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Registeration;