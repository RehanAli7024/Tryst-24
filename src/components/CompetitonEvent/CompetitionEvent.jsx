import { useState } from "react";
import Memberdetail from "../common/Memberdetail";
import UploadEvent from "../common/UploadEvent";
import RulebookEntry from "../common/RulebookEntry";
import "./CompetitionEvent.css";
export default function CompetitionEvent() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [file, setFile] = useState(null);
  const [contactPersons, setcontactPerosns] = useState(1);
  const [Rulebook, setRulebook] = useState(1);
  const [TeamMembers, setTeamMembers] = useState(1);
  const [RegistrationDate, setRegistrationDate] = useState("");
  const [RegistrationTime, setRegistrationTime] = useState("");
  const [isTeamEvent, setIsTeamEvent] = useState(false);

  const handleTeamMembersChange = (e) => {
    setTeamMembers(e.target.value);
  };

  const handleRegistrationDate = (e) => {
    setRegistrationDate(e.target.value);
    setSubmitted(false);
  };

  const handleRegistationTiming = (e) => {
    setRegistrationTime(e.target.value);
    setSubmitted(false);
  };

  const handleTeamEventChange = (e) => {
    setIsTeamEvent(e.target.value === "yes");
  
    // Conditionally set TeamMembers value
    setTeamMembers(e.target.value === "yes" ? TeamMembers : 1);
  };
  

  const handlecontactPersonsChange = (e) => {
    setcontactPerosns(Number(e.target.value));
  };
  const handleRulebookChange = (e) => {
    setRulebook(Number(e.target.value));
  };

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
      eventLocation === ""
      // file === null
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);

      // Gather input values
      const formData = {
        eventTitle,
        eventDescription,
        eventDate,
        eventTime,
        eventLocation,
        RegistrationDate,
        RegistrationTime,
        file,
        contactPersons: [],
        rulebookEntries: [],
        isTeamEvent,
        TeamMembers,
      };

      // Gather data from Memberdetail component
      for (let i = 0; i < contactPersons; i++) {
        const contactPersonName = document.getElementById(
          `contactPersonName_${i}`
        ).value;
        const contactPersonNumber = document.getElementById(
          `contactPersonNumber_${i}`
        ).value;
        formData.contactPersons.push({
          contactPersonName,
          contactPersonNumber,
        });
      }

      // Gather data from RulebookEntry component
      for (let i = 0; i < Rulebook; i++) {
        const rule = document.getElementById(`rule_${i}`).value;
        formData.rulebookEntries.push({ rule });
      }

      // Console log the gathered data
      console.log(formData);
    }
  };

  
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      ></div>
    );
  };

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
                  onChange={handleRegistrationDate}
                  className="input"
                  value={RegistrationDate}
                  type="date"
                />
                <input
                  onChange={handleRegistationTiming}
                  className="input"
                  value={RegistrationTime}
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
                    id="teamMembers" // Ensure that the ID is set here
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
            <Memberdetail key={index} serialNo={index + 1} id={index} />
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
            <RulebookEntry key={index} serialNo={index + 1} id={index} />
          ))}
        </form>
        <button onClick={handleSubmit} className="submit-button">
          SUBMIT
        </button>
        {errorMessage()}
      </div>
    </div>
  );
}
