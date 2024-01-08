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
        <div className="input">
          <h2>Add Image:</h2>
          <input type="file" onChange={handleImageChange} />
          {file && <img src={file} alt="Event" />}
        </div>

        {/* ... (your other form fields) */}
        <label className="label">EVENT TITLE*</label>
        <input
          onChange={handleTitle}
          className="input"
          value={eventTitle}
          type="text"
        />

        <label className="label">EVENT DESCRIPTION*</label>
        <input
          onChange={handleDescription}
          className="input"
          value={eventDescription}
          type="text"
        />

        <label className="label">EVENT DATE*</label>
        <input
          onChange={handleDate}
          className="input"
          value={eventDate}
          type="date"
        />

        <label className="label">EVENT TIMING*</label>
        <input
          onChange={handleTiming}
          className="input"
          value={eventTime}
          type="time"
        />

        <label className="label">EVENT VENUE*</label>
        <input
          onChange={handleVenue}
          className="input"
          value={eventLocation}
          type="text"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
      {successMessage()}
      {errorMessage()}
    </div>
  );
};

export default EventDetails;
