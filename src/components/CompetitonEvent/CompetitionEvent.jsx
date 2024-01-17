import React, { useState, useEffect } from "react";
import Memberdetail from "../common/Memberdetail";
import UploadEvent from "../common/UploadEvent";
import RulebookEntry from "../common/RulebookEntry";
import "./CompetitionEvent.css";

export default function CompetitionEvent() {
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    file: null,
    contactPersons: 1,
    Rulebook: 1,
    TeamMembers: 1,
    isTeamEvent: false,
    
  });

  const {
    eventTitle,
    eventDescription,
    eventDate,
    eventTime,
    eventLocation,
    file,
    contactPersons,
    Rulebook,
    TeamMembers,
    isTeamEvent,
  } = formData;

  const setEventTitle = (value) =>
    setFormData({ ...formData, eventTitle: value });
  const setEventDescription = (value) =>
    setFormData({ ...formData, eventDescription: value });
  const setEventDate = (value) =>
    setFormData({ ...formData, eventDate: value });
  const setEventTime = (value) =>
    setFormData({ ...formData, eventTime: value });
  const setEventLocation = (value) =>
    setFormData({ ...formData, eventLocation: value });
  const setFile = (value) => setFormData({ ...formData, file: value });
  const setcontactPerosns = (value) =>
    setFormData({ ...formData, contactPersons: value });
  const setRulebook = (value) => setFormData({ ...formData, Rulebook: value });
  const setTeamMembers = (value) =>
    setFormData({ ...formData, TeamMembers: value });
  const setIsTeamEvent = (value) =>
    setFormData({ ...formData, isTeamEvent: value });

  const handleTeamMembersChange = (e) => {
    setTeamMembers(Number(e.target.value));
  };

  const handlecontactPersonsChange = (e) => {
    setcontactPerosns(Number(e.target.value));
  };

  const handleRulebookChange = (e) => {
    setRulebook(Number(e.target.value));
  };

  // Function to handle radio button change
  const handleTeamEventChange = (e) => {
    setIsTeamEvent(e.target.value === "yes");
  };

  // States for checking errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the event title change
  const handleTitle = (e) => {
    setEventTitle(e.target.value);
    setSubmitted(false);
  };

  // Handling the event description change
  const handleDescription = (e) => {
    setEventDescription(e.target.value);
    setSubmitted(false);
  };

  // Handling the event date change
  const handleDate = (e) => {
    setEventDate(e.target.value);
    setSubmitted(false);
  };

  // Handling the event timing change
  const handleTiming = (e) => {
    setEventTime(e.target.value);
    setSubmitted(false);
  };

  // Handling the event venue change
  const handleVenue = (e) => {
    setEventLocation(e.target.value);
    setSubmitted(false);
  };

  // Handling the image change
  const handleImageChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      eventTitle === "" ||
      eventDescription === "" ||
      eventDate === "" ||
      eventTime === "" ||
      eventLocation === "" ||
      file === null // Check if an image is selected
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      console.log("Form Data:", formData); // Console log the form data
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Event "{eventTitle}" successfully submitted!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

  return (
    <div className="event-details-boss-container">
      <div className="event-details">
        <form>
          <UploadEvent
            uploadTitle="ADD EVENT POSTER HERE"
            eventTitleLabel="EVENT TITLE*"
            eventDescriptionLabel="EVENT DESCRIPTION*"
            handleImageChange={handleImageChange}
            handleTitle={handleTitle}
            handleDescription={handleDescription}
            eventTitle={eventTitle}
            eventDescription={eventDescription}
            file={file}
          />

          <div className="date-time-venue-container">
            <div className="events-flex-column">
              <label className="label">EVENT DATE*</label>
              <br />
              <input
                onChange={handleDate}
                className="input"
                value={eventDate}
                type="date"
              />
            </div>

            <div className="events-flex-column">
              <label className="label">EVENT TIMING*</label>
              <br />
              <input
                onChange={handleTiming}
                className="input"
                value={eventTime}
                type="time"
              />
            </div>

            <div className="events-flex-column">
              <label className="label">EVENT VENUE*</label>
              <br />
              <input
                onChange={handleVenue}
                className="input event-venue"
                value={eventLocation}
                type="text"
              />
            </div>
          </div>

          <div className="registration-date-time-container">
            <div className="registration-date-time-column">
              <label className="label">REGISTRATION DEADLINE*</label>
              <br />
              <div className="registration-date-time-input">
                <input
                  onChange={handleDate}
                  className="input"
                  value={eventDate}
                  type="date"
                />
                <input
                  onChange={handleTiming}
                  className="input"
                  value={eventTime}
                  type="time"
                />
              </div>
            </div>
            <div className="team-component-container">
              <div className="team-component-details">
                <span>Team based Event? :</span>
                <input
                  type="radio"
                  name="team"
                  value="yes"
                  onChange={handleTeamEventChange}
                />
                <label htmlFor="yes">Yes</label>
                <input
                  type="radio"
                  name="team"
                  value="no"
                  onChange={handleTeamEventChange}
                />
                <label htmlFor="no">No</label>
              </div>
              {/* Conditionally render the team-member-container */}
              {isTeamEvent && (
                <div className="team-member-container">
                  <p>No of Team Members*</p>
                  <select
                    onChange={handleTeamMembersChange}
                    value={TeamMembers}
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              )}
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
            <Memberdetail key={index} serialNo={index + 1} />
          ))}

          <div className="No-of-contact-person-container">
            <div className="contact-person-details">
              <p>RuleBook*</p>
            </div>
            <div className="contact-persons-container">
              <p>No. Of Points*</p>
              <select onChange={handleRulebookChange} value={Rulebook}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {Array.from({ length: Rulebook }).map((_, index) => (
            <RulebookEntry key={index} serialNo={index + 1} />
          ))}
        </form>
        <button onClick={handleSubmit} className="submit-button">
          SUBMIT
        </button>
        {successMessage()}
        {errorMessage()}
      </div>
    </div>
  );
}
