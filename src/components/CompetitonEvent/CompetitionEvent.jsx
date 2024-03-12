import React, { useEffect, useRef, useState } from "react";
import { ReactSession } from "react-client-session";
import "./CompetitionEvent.css";
import axios from "axios";
import { DOMAIN } from "../../domain";
import Select from "react-select";

export default function CompetitionEvent({
  handleClose,
  setIsOpen,
  setIsEventSubmitted,
  setEventFormTitle,
}) {
  const [contactPersons, setcontactPerosns] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [formisSubmitted, setFormIsSubmitted] = useState(false);
  ReactSession.setStoreType("localStorage");
  useEffect(() => {
    let handler = (e) => {
      if (!eventsRef.current.contains(e.target) && registrationOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setIsOpen, registrationOpen]);

  let eventsRef = useRef();

  const handlecontactPersonsChange = (e) => {
    setcontactPerosns(Number(e.target.value));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const Clubs = [
    { index: 1, name: "Economics and Finance Club", abbr: "E&F" },
    { index: 2, name: "Business and Consulting Club", abbr: "B&C" },
    { index: 3, name: "Blockchain and Crypto Club", abbr: "BC&C" },
    { index: 4, name: "Automotive Club", abbr: "AUTO" },
    { index: 5, name: "Aviation Club", abbr: "AVI" },
    { index: 6, name: "Coding and Hackathon Club", abbr: "CODING" },
    { index: 7, name: "Bio-Tech Club", abbr: "BIO-TECH" },
    { index: 8, name: "Mechanical and Civil Engineering Club", abbr: "MECH&CIVIL" },
    { index: 9, name: "Physics and Astronomy Club", abbr: "PAC" },
    { index: 10, name: "Mathematics Club", abbr: "MATH CLUB" },
    { index: 11, name: "Literary and Quizzing Club", abbr: "L&Q CLUB" },
    { index: 12, name: "Debating Club", abbr: "DESOC" },
    { index: 13, name: "Robotics Club", abbr: "ROBO" },
    { index: 14, name: "Electrical and Energy Club", abbr: "E&E CLUB" },
  ];

  const clubOptions = Clubs.map((club) => {
    return {
      value: club.index,
      label: club.name,
    };
  });

  // handle club change
  const handleClubChange = (selectedClubs) => {
    // console.log("selected clubs: ", selectedClubs);
    const selectedClubData = selectedClubs.map((club) => ({
      id: club.value,
      name: club.label,
    }));

    setFormData((prevState) => ({
      ...prevState,
      event_club: JSON.stringify(selectedClubData),
    }));
    // console.log(formData.event_club);
  };

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    if (formData.has_form && !formData.registration_link) {
      alert("Please provide registration link for the form.");
      return;
    }
    setFormData({ ...formData, contactPersons: constactPersonDetails });
    e.preventDefault();
    const token = localStorage.getItem("admin_access_token");
    setFormIsSubmitted(true);
    axios
      .post(`${DOMAIN}create_event/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Event submitted successfully");
        localStorage.setItem("id", res.data.event_id);
        if (formData.has_form && formData.registration_link) {
          handleClose();
        }
        setEventFormTitle("registrationForm");
        setIsEventSubmitted(true);
        setIsSubmitted(true);
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        setFormIsSubmitted(false);
        setIsSubmitting(false);
      });
  };
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event_date: "",
    event_time: "",
    reg_date: "",
    reg_time: "",
    venue: "",
    file: null,
    contactPersons: [],
    has_form: false,
    registration_link: "",
    ruleBook: "",
    event_club: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [constactPersonDetails, setcontactPerosnDetails] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "file") {
      const file_data = e.target.files[0];
      // console.log(file_data);
      setFormData((prevState) => ({
        ...prevState,
        file: file_data,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleInputChange = (index, type, value) => {
    setcontactPerosnDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      if (!updatedDetails[index]) {
        updatedDetails[index] = { name: "", phone: "" };
      }
      if (type === "name") {
        updatedDetails[index].name = value;
      } else {
        updatedDetails[index].phone = value;
      }
      return updatedDetails;
    });
  };

  useEffect(() => {
    setFormData({ ...formData, contactPersons: constactPersonDetails });
  }, [constactPersonDetails]);

  useEffect(() => {
    // console.log(formData.has_form, formData.registration_link);
  }, [formData.has_form, formData.registration_link]);

  return (
    <div
      className={`event-details ${isSubmitted ? "popup-hidden" : ""}`}
      ref={eventsRef}
    >
      {formisSubmitted ? (
        <div className="loader-container">
          <div className="loader">
            {" "}
            Submitting the form and creating a spreadsheet for it
          </div>
        </div>
      ) : (
        <form>
          <div className="upload-picture">
            <label htmlFor="uploadInput" className="custom-upload-btn">
              Upload
            </label>
            <div className="custom-upload-container">
              <input
                id="uploadInput"
                className="upload-pic-btn"
                type="file"
                onChange={handleChange}
                name="file"
              />
            </div>
            <div className="image-shown">
              {formData.file && (
                <img
                  src={
                    typeof formData.file === "string"
                      ? formData.file
                      : URL.createObjectURL(formData.file)
                  }
                  alt="event"
                  className="image-preview"
                />
              )}
            </div>
            <div className="image-guidelines">
              <p className="image-guidelines-text">Preferably in 3:4 ratio</p>
              <p className="image-guidelines-text">Format: .jpg/ .jpeg/ .png</p>
              <p className="image-guidelines-text">Size Limit: &lt;10MB</p>
            </div>
          </div>

          <div className="event-name">
            <label className="label">EVENT TITLE*</label>
            <br />
            <input
              onChange={handleChange}
              className="input event-title"
              value={formData.title}
              type="text"
              name="title"
            />
          </div>

          <div className="event-description">
            <label className="label">EVENT DESCRIPTION*</label>
            <br />
            <textarea
              onChange={handleChange}
              className="textarea event-description"
              value={formData.description}
              type="text"
              name="description"
              rows={7}
            />
          </div>
          <div className="event-club-container" style={{ color: "grey" }}>
            <label className="label">EVENT CLUB*</label>
            <br />
            {/* select multiple clubs */}
            <Select
              options={clubOptions}
              isMulti
              name="event_club"
              onChange={handleClubChange}
            // value={eventClubs}
            />
          </div>
          <div className="date-time-venue-container">
            <div className="events-flex-column">
              <label className="label">EVENT DATE*</label>
              <br />
              <input
                onChange={handleChange}
                className="input"
                value={formData.event_date}
                name="event_date"
                type="date"
              />
            </div>
            <div className="events-flex-column">
              <label className="label">EVENT TIMING*</label>
              <br />
              <input
                onChange={handleChange}
                className="input"
                value={formData.event_time}
                name="event_time"
                type="time"
              />
            </div>

            <div className="events-flex-column">
              <label className="label">EVENT VENUE*</label>
              <br />
              <input
                onChange={handleChange}
                className="input event-venue"
                value={formData.venue}
                name="venue"
                type="text"
              />
            </div>
          </div>
          <div className="date-time-venue-container">
            <div className="events-flex-column">
              <label className="label">DEADLINE DATE*</label>
              <br />
              <input
                onChange={handleChange}
                className="input"
                value={formData.reg_date}
                name="reg_date"
                type="date"
              />
              <input
                onChange={handleChange}
                className="input"
                value={formData.reg_time}
                name="reg_time"
                type="time"
              />
            </div>
          </div>

          <div className="No-of-contact-person-container">
            <div className="contact-person-details">
              <p>Contact Person(s) Details*</p>
            </div>
            <div className="contact-persons-container">
              <p>Contact Persons*</p>
              <select
                onChange={handlecontactPersonsChange}
                value={contactPersons}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {Array.from({ length: contactPersons }).map((_, index) => (
            <div key={index} className="contact-details-container">
              <div className="serial-no">
                <p>{index + 1}.</p>
              </div>
              <div className="name-of-contact-person">
                <input
                  id={`contactPersonName_${index}`}
                  className="input"
                  type="text"
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                  placeholder="Name of Contact Person"
                />
              </div>
              <div className="contact-number">
                <input
                  id={`contactPersonNumber_${index}`}
                  className="input"
                  type="tel"
                  onChange={(e) =>
                    handleInputChange(index, "phone", e.target.value)
                  }
                  placeholder="Contact Number"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>
            </div>
          ))}
          <div className="No-of-contact-person-container">
            <div className="contact-person-details">
              <p>RuleBook*</p>
            </div>
            <div className="contact-persons-container">
              <input
                name="ruleBook"
                className="input"
                type="text"
                onChange={handleChange}
                value={formData.ruleBook}
              />
            </div>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                value={formData.has_form}
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                  setFormData({ ...formData, has_form: e.target.checked });
                }}
              />
              For external registration form
            </label>
            {isChecked && (
              <div>
                <label>
                  Registration Link
                  <input
                    type="text"
                    name="registration_link"
                    value={formData.registration_link}
                    onChange={handleChange}
                  />
                </label>
              </div>
            )}
          </div>
          <button onClick={handleSubmit} className="submit-button">
            submit
          </button>
        </form>
      )}
    </div>
  );
}
