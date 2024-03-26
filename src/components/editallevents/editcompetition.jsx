import React, { useEffect, useRef, useState } from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";
import { DOMAIN } from "../../domain";
import Select from "react-select";

export default function EditCompetitionEvent({
  handleClose,
  setIsOpen,
  setIsEventSubmitted,
  setEventFormTitle,
  eventDetails,
}) {
  localStorage.setItem("id", eventDetails.event_id);
  const [contactPersons, setcontactPerosns] = useState(
    eventDetails.contact.length
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
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
    { index: 15, name: "Chemical Society", abbr: "CH SOC"},
    {
      index: 16,
      name: "Textile Society",
      abbr:"TEX SOC"
    }
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
    // console.log(formData);
    setIsSubmitting(true);
    const updatedFormData = {
      ...formData,
      contactPersons: constactPersonDetails,
    };
    if (
      updatedFormData.contactPersons &&
      updatedFormData.contactPersons !== "undefined" &&
      updatedFormData.contactPersons.length > 0
    ) {
      updatedFormData.contactPersons = JSON.stringify(
        updatedFormData.contactPersons
      );
    }
    e.preventDefault();
    const token = localStorage.getItem("admin_access_token");
    // console.log(token)
    const formDataToSend = new FormData();
    for (const key in updatedFormData) {
      if (key === "file") {
        continue;
      }
      formDataToSend.append(key, updatedFormData[key]);
    }
    formDataToSend.append("file", updatedFormData.file);

    axios
      .post(`${DOMAIN}create_event/`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res);
        alert("Event edited successfully");
        setEventFormTitle("editregistrationForm");
        setIsEventSubmitted(true);
        setIsSubmitted(true);
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitting(false);
      });
  };
  const [formData, setFormData] = useState({
    title: eventDetails.title,
    description: eventDetails.description,
    event_date: eventDetails.event_date,
    event_time: eventDetails.event_time,
    venue: eventDetails.venue,
    contactPersons: [],
    ruleBook: eventDetails.rulebook,
    file: eventDetails.event_image,
    editedform: true,
    event_id: eventDetails.event_id,
    reg_date: eventDetails.deadline_date,
    reg_time: eventDetails.deadline_time,
    has_form: eventDetails.has_form,
    event_club: eventDetails.clubs,
  });


  let eventClubs = [];
  if (
    eventDetails.clubs &&
    eventDetails.clubs !== "undefined" &&
    eventDetails.clubs !== "null"
  ) {
    const eventClubsData = JSON.parse(eventDetails.clubs);
    eventClubs = eventClubsData.map((club) => ({
      value: club.id,
      label: club.name,
    }));
  }

  const [constactPersonDetails, setcontactPerosnDetails] = useState(
    eventDetails.contact
  );
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
    setcontactPerosnDetails(eventDetails.contact);
  }, [eventDetails.contact]);

  useEffect(() => {
    setcontactPerosns(constactPersonDetails.length);
  }, [constactPersonDetails]);
  return (
    <div
      className={`event-details ${isSubmitted ? "popup-hidden" : ""}`}
      ref={eventsRef}
    >
      <form>
        <label htmlFor="uploadInput" className="custom-upload-btn">
          Upload
        </label>
        <div className="upload-picture" style={{ height: "100%" }}>
          <div className="custom-upload-container" style={{ height: "100%" }}>
            <input
              id="uploadInput"
              className="upload-pic-btn"
              type="file"
              onChange={handleChange}
              name="file"
            />
          </div>
          <div className="image-shown" style={{ height: "100%" }}>
            {formData.file && (
              <img
                src={
                  typeof formData.file === "string"
                    ? formData.file
                    : URL.createObjectURL(formData.file)
                }
                alt="event"
                className="image-preview"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  margin: "0",
                }}
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
            value={eventClubs}
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
        </div>
        {constactPersonDetails.map((contact, index) => (
          <div key={index} className="contact-details-container">
            <div className="serial-no">
              <p>{index + 1}.</p>
            </div>
            <div className="name-of-contact-person">
              <input
                id={`contactPersonName_${index}`}
                name="name"
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                value={contact.name}
                className="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="contact-number">
              <input
                id={`contactPersonNumber_${index}`}
                name="phone"
                onChange={(e) =>
                  handleInputChange(index, "phone", e.target.value)
                }
                value={contact.phone}
                className="input"
                type="tel"
                placeholder="Contact Number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <div className="delete-contact-person">
              <button
                onClick={() =>
                  setcontactPerosnDetails((prevDetails) =>
                    prevDetails.filter((_, i) => i !== index)
                  )
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="add-contact-person">
          <button
            type="button"
            onClick={() => {
              setcontactPerosnDetails((prevDetails) => [
                ...prevDetails,
                { name: "", phone: "" },
              ]);
            }}
          >
            Add Contact Person
          </button>
        </div>

        {/* also add the new contact persons in the contactPersons state and the contactPersons array */}

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
        <button
          onClick={handleSubmit}
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
