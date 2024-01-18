import { useState } from "react";
import { Link } from "react-router-dom";
import "./GuestLectureEvent.css";
import Memberdetail from "../common/Memberdetail";
import UploadEvent from "../common/UploadEvent";
import UploadSpeaker from "../common/UploadSpeaker";

const GuestLectureEvent = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [file, setFile] = useState(null);

  const [contactPersons, setcontactPerosns] = useState(1);
  const [Speakers, setSpeakers] = useState(1);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleTitle = (e) => {
    setEventTitle(e.target.value);
    setSubmitted(false);
  };

  const handleDescription = (e) => {
    setEventDescription(e.target.value);
    setSubmitted(false);
  };

  const handleDate = (e) => {
    setEventDate(e.target.value);
    setSubmitted(false);
  };

  const handleTiming = (e) => {
    setEventTime(e.target.value);
    setSubmitted(false);
  };

  const handleVenue = (e) => {
    setEventLocation(e.target.value);
    setSubmitted(false);
  };

  const handleImageChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handlecontactPersonsChange = (e) => {
    setcontactPerosns(Number(e.target.value));
  };

  const handleSpeakerChange = (e) => {
    setSpeakers(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      eventTitle === "" ||
      eventDescription === "" ||
      eventDate === "" ||
      eventTime === "" ||
      eventLocation === ""
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
        file,
        contactPersons: [],
        speakers: [],
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
  
      // Gather data from UploadSpeaker component
      for (let i = 0; i < Speakers; i++) {
        const speakerName = document.getElementById(`speakerName_${i}`)?.value ?? "";
        const speakerDescription = document.getElementById(`speakerDescription_${i}`)
          ?.value ?? "";
        const speakerFile = document.getElementById(`speakerImage-${i}`)?.src ?? "";
  
        formData.speakers.push({
          speakerName,
          speakerDescription,
          speakerFile,
        });
      }
  
      // Console log the gathered data
      console.log("EventDetails data:", formData);
    }
  };
  

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Event `{eventTitle}` successfully submitted!!</h1>
      </div>
    );
  };

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
              <p>Speaker(s) Details*</p>
            </div>

            <div className="contact-persons-container">
              <p>No. of Speakers*</p>
              <select onChange={handleSpeakerChange} value={Speakers}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {Array.from({ length: Speakers }).map((_, index) => (
            <UploadSpeaker
              key={index}
              id={index}
              handleImageChange={handleImageChange}
              handleTitle={handleTitle}
              handleDescription={handleDescription}
            />
          ))}
        </form>
        <button onClick={handleSubmit} className="submit-button">
        <Link to="/registration">SUBMIT</Link>
        </button>
        {successMessage()}
        {errorMessage()}
      </div>
    </div>
  );
};

export default GuestLectureEvent;
