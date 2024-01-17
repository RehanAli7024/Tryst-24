import { useState } from "react";
import "./EventDetails.css";
import Memberdetail from "../common/Memberdetail";
import UploadEvent from "../common/UploadEvent";

const EventDetails = () => {
  // States for event details
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [file, setFile] = useState(null); // Initialize file state to null
  const [contactPersons, setcontactPerosns] = useState(1);
  const [Speakers, setSpeakers] = useState(1);

  const handlecontactPersonsChange = (e) => {
    setcontactPerosns(Number(e.target.value));
  };

  const handleSpeakerChange = (e) => {
    setSpeakers(Number(e.target.value));
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
        <h1>Event `{eventTitle}` successfully submitted!!</h1>
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
            <Memberdetail key={index} serialNo={index + 1} />
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
            <UploadEvent
              key={index}
              uploadTitle="ADD SPEAKER PHOTO HERE"
              eventTitleLabel="SPEAKER NAME*"
              eventDescriptionLabel="ABOUT SPEAKER*"
              handleImageChange={handleImageChange}
              handleTitle={handleTitle}
              handleDescription={handleDescription}
              eventTitle={eventTitle}
              eventDescription={eventDescription}
              file={file}
            />
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
};

export default EventDetails;
