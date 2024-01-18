import  { useState } from "react";
import "./UploadEvent.css";

const UploadSpeaker = ({
  id,
  handleImageChange,
  handleTitle,
  handleDescription,
}) => {
  const [localSpeakerName, setLocalSpeakerName] = useState("");
  const [localSpeakerDescription, setLocalSpeakerDescription] = useState("");
  const [localSpeakerFile, setLocalSpeakerFile] = useState(null);

  const handleLocalTitle = (e) => {
    setLocalSpeakerName(e.target.value);
    handleTitle(e);
  };

  const handleLocalDescription = (e) => {
    setLocalSpeakerDescription(e.target.value);
    handleDescription(e);
  };

  const handleLocalImageChange = (e) => {
    setLocalSpeakerFile(URL.createObjectURL(e.target.files[0]));
    handleImageChange(e);
  };

  
  

  return (
    <div className="upload-event-container">
      <div className="upload-picture">
        <h3>ADD SPEAKER PHOTO HERE</h3>
        <div className="custom-upload-container">
          <label htmlFor={`speakerImage-${id}`} className="custom-upload-btn">
            Upload
          </label>
          <input
            id={`speakerImage-${id}`}
            className="upload-pic-btn"
            type="file"
            onChange={handleLocalImageChange}
          />
        </div>
        {localSpeakerFile && (
          <img id={`speakerImage-${id}`} src={localSpeakerFile} alt="Speaker" />
        )}
        <div className="image-guidelines">
          <p className="image-guidelines-text">Preferably in 3:4 ratio</p>
          <p className="image-guidelines-text">Format: .jpg/ .jpeg/ .png</p>
          <p className="image-guidelines-text">Size Limit: &lt;10MB</p>
        </div>
      </div>

      <div className="event-name">
        <label className="label">SPEAKER NAME*</label>
        <br />
        <input
          id={`speakerName_${id}`}
          onChange={handleLocalTitle}
          className="input event-title"
          value={localSpeakerName}
          type="text"
        />
      </div>

      <div className="event-description">
        <label className="label">ABOUT SPEAKER*</label>
        <br />
        <textarea
          id={`speakerDescription_${id}`}
          onChange={handleLocalDescription}
          className="textarea event-description"
          value={localSpeakerDescription}
          type="text"
          rows={7}
        />
      </div>
    </div>
  );
};

export default UploadSpeaker;
