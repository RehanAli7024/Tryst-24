import React, { useState, useEffect, useRef } from "react";
import "./GuestLectureEvent.css";
import "../common/UploadEvent.css";
import axios from "axios";
import { DOMAIN } from "../../domain";

const GuestLectureEvent = ({
  handleClose,
  setIsOpen,
  setIsEventSubmitted,
  setEventFormTitle,
}) => {
  const [contactPersons, setcontactPerosns] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [formisSubmitted, setFormIsSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    setFormData({
      ...formData,
      contactPersons: constactPersonDetails,
      speakers: speakerDetails,
    });
    console.log(formData);
    e.preventDefault();
    setFormIsSubmitted(true);
    axios
      .post(`${DOMAIN}create_guest/`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin_access_token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Event submitted successfully");
        localStorage.setItem("id", res.data.event_id);
        setEventFormTitle("registrationForm");
        setIsEventSubmitted(true);
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401)
        {
          alert("Session Expired. Please login again");
          localStorage.clear();
          window.location.reload();
        }
        setFormIsSubmitted(false);
      });
  };
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event_date: "",
    event_time: "",
    venue: "",
    file: null,
    contactPersons: [],
    speakers: [],
    reg_date: "",
    reg_time: "",
  });

  const [image, setImage] = useState(null);
  const [constactPersonDetails, setcontactPerosnDetails] = useState([]);
  const [speakerimg, setSpeakerImg] = useState(null);
  const [Speakers, setSpeakers] = useState(1);
  const [speakerDetails, setSpeakerDetails] = useState([
    { name: "", description: "", file: null },
  ]);

  const handleChange = (e) => {
    if (e.target.name === "file") {
      const file_data = e.target.files[0];
      console.log(file_data);
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
    setFormData({
      ...formData,
      contactPersons: constactPersonDetails,
      speakers: speakerDetails,
    });
  }, [constactPersonDetails, speakerDetails]);

  const handleSpeakersChange = (e) => {
    const numberOfSpeakers = parseInt(e.target.value, 10);
    setSpeakers(numberOfSpeakers);
    setSpeakerDetails((currentDetails) => {
      const newDetails = currentDetails.slice(0, numberOfSpeakers);
      while (newDetails.length < numberOfSpeakers) {
        newDetails.push({ name: "", description: "", file: null });
      }
      return newDetails;
    });
  };

  const handleSpeakerDetailsChange = (index, type, e) => {
    setSpeakerDetails((currentDetails) => {
      const updatedDetails = [...currentDetails];
      if (type === "file") {
        const file = e.target.files[0];
        setSpeakerImg(URL.createObjectURL(file));
        updatedDetails[index].file = file ? URL.createObjectURL(file) : null;
      } else {
        updatedDetails[index][type] = e.target.value;
      }
      return updatedDetails;
    });
  };

  return (
    <div
      className={`event-details ${isSubmitted ? "popup-hidden" : ""}`}
      ref={eventsRef}
    >
      <form>
        <div className="upload-picture">
          <div className="custom-upload-container">
            <label htmlFor="uploadInput" className="custom-upload-btn">
              Upload
            </label>
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
        {Array.from({ length: contactPersons }).map((_, index) => (
          <>
            <div className="contact-details-container">
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
          </>
        ))}

        <div className="No-of-contact-person-container">
          <div className="contact-person-details">
            <p>Speaker(s) Details*</p>
          </div>

          <div className="contact-persons-container">
            <p>No. of Speakers*</p>
            <select onChange={handleSpeakersChange} value={Speakers}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        {speakerDetails.map((speaker, index) => (
          <React.Fragment key={index}>
            <div className="upload-picture">
              <h3>ADD SPEAKER PHOTO HERE</h3>
              <div className="custom-upload-container">
                <label
                  htmlFor={`speakerImage-${index}`}
                  className="custom-upload-btn"
                >
                  Upload
                </label>
                <input
                  id={`speakerImage-${index}`}
                  className="upload-pic-btn"
                  type="file"
                  onChange={(e) => handleSpeakerDetailsChange(index, "file", e)}
                />
              </div>
              {speaker.file && <img src={speaker.file} alt="Speaker" />}
              <div className="image-guidelines">
                <p className="image-guidelines-text">Preferably in 3:4 ratio</p>
                <p className="image-guidelines-text">
                  Format: .jpg/ .jpeg/ .png
                </p>
                <p className="image-guidelines-text">Size Limit: &lt;10MB</p>
              </div>
            </div>
            <div className="event-name">
              <label className="label">SPEAKER NAME*</label>
              <br />
              <input
                id={`speakerName_${index}`}
                onChange={(e) => handleSpeakerDetailsChange(index, "name", e)}
                className="input event-title"
                value={speaker.name}
                type="text"
              />
            </div>

            <div className="event-description">
              <label className="label">ABOUT SPEAKER*</label>
              <br />
              <textarea
                id={`speakerDescription_${index}`}
                onChange={(e) =>
                  handleSpeakerDetailsChange(index, "description", e)
                }
                className="textarea event-description"
                value={speaker.description}
                type="text"
                rows={7}
              />
            </div>
          </React.Fragment>
        ))}
        {/* disable the button on the basis of state */}
        <button onClick={handleSubmit} className="submit-button" disabled={formisSubmitted}>
          {
            formisSubmitted ? "Submitting..." : "Submit"
          }
        </button>
      </form>
    </div>
  );
};

export default GuestLectureEvent;
