// EventDetailsRow1.jsx
import React from "react";
import "./UploadEvent.css";

const UploadEvent = ({
  uploadTitle,
  eventTitleLabel,
  eventDescriptionLabel,
  handleImageChange,
  handleTitle,
  handleDescription,
  eventTitle,
  eventDescription,
  file,
}) => {
  return (
    <div className="upload-event-container">
      <div className="upload-picture">
        <h3>{uploadTitle}</h3>
        <div className="custom-upload-container">
          <label htmlFor="uploadInput" className="custom-upload-btn">
            Upload
          </label>
          <input
            id="uploadInput"
            className="upload-pic-btn"
            type="file"
            onChange={handleImageChange}
          />
        </div>
        {file && <img src={file} alt="Event" />}
        <div className="image-guidelines">
          <p className="image-guidelines-text">Preferably in 3:4 ratio</p>
          <p className="image-guidelines-text">Format: .jpg/ .jpeg/ .png</p>
          <p className="image-guidelines-text">Size Limit: &lt;10MB</p>
        </div>
      </div>

      <div className="event-name">
        <label className="label">{eventTitleLabel}</label>
        <br />
        <input
          onChange={handleTitle}
          className="input event-title"
          value={eventTitle}
          type="text"
        />
      </div>

      <div className="event-description">
        <label className="label">{eventDescriptionLabel}</label>
        <br />
        <textarea
          onChange={handleDescription}
          className="textarea event-description"
          value={eventDescription}
          type="text"
          rows={7}
        />
      </div>
    </div>
  );
};

export default UploadEvent;
