import React, { useState } from 'react';
import './EventDetails.css';

const EventDetails = () => {
  // States for event details
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [file, setFile] = useState(null); // Initialize file state to null

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
      eventTitle === '' ||
      eventDescription === '' ||
      eventDate === '' ||
      eventTime === '' ||
      eventLocation === '' ||
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
          display: submitted ? '' : 'none',
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
          display: error ? '' : 'none',
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className='event-details'>
      <form>
        <div className="event-details-row-1">
          <div className="upload-picture">
            <h3>ADD EVENT POSTER HERE</h3>
            <input className='upload-pic-btn' type="file" onChange={handleImageChange} />
            {file && <img src={file} alt="Event" />}
          </div>

          <div className="event-name">
            <label className="label">EVENT TITLE*</label><br />
            <input
              onChange={handleTitle}
              className="input event-title"
              value={eventTitle}
              type="text"
            />
          </div>

          <div className="event-description">
            <label className="label">EVENT DESCRIPTION*</label><br />
            <input
              onChange={handleDescription}
              className="input event-description"
              value={eventDescription}
              type="text"
            />
          </div>
        </div>


        <div className="event-details-row-2">
          <div className="events-flex-column">
            <label className="label">EVENT DATE*</label><br />
            <input
              onChange={handleDate}
              className="input"
              value={eventDate}
              type="date"
            />
          </div>

          <div className="events-flex-column">
            <label className="label">EVENT TIMING*</label><br />
            <input
              onChange={handleTiming}
              className="input"
              value={eventTime}
              type="time"
            />
          </div>

          <div className="events-flex-column">
            <label className="label">EVENT VENUE*</label><br />
            <input
              onChange={handleVenue}
              className="input event-venue"
              value={eventLocation}
              type="text"
            />
          </div>
        </div>

      </form>
      {successMessage()}
      {errorMessage()}
    </div>
  );
};

export default EventDetails;
