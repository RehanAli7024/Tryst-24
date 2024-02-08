import React, { useEffect, useRef, useState } from "react";
import { ReactSession } from "react-client-session";
// import "./CompetitionEvent.css";
import axios from "axios";
import { DOMAIN } from "../../domain";


export default function EditCompetitionEvent({
    handleClose,
    setIsOpen,
    setIsEventSubmitted,
    setEventFormTitle,
    eventDetails
}) {
    // contactPersons length is set from the eventdetails prop passed from the parent component 
    const [contactPersons, setcontactPerosns] = useState(eventDetails.contact.length);
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

    const handleSubmit = (e) => {
        console.log(formData);
        setFormData({ ...formData, contactPersons: constactPersonDetails });
        e.preventDefault();
        const token = ReactSession.get("admin_access_token");
        console.log(token);
        console.log(formData);
        axios.post(`${DOMAIN}create_event/`, formData, { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data', } })
            .then((res) => {
                console.log(res);
                alert("Event submitted successfully");
                localStorage.setItem("id", res.data.event_id);
                setEventFormTitle("editregistrationForm");
                setIsEventSubmitted(true);
                setIsSubmitted(true);
            })
            .catch((err) => {
                console.log(err);
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
    });

    const [constactPersonDetails, setcontactPerosnDetails] = useState(eventDetails.contact);
    const handleChange = (e) => {
        if (e.target.name === "file") {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
            return;
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleInputChange = (index, type, value) => {
        setcontactPerosnDetails((prevDetails) => {
            const updatedDetails = [...prevDetails];
            if (!updatedDetails[index]) {
                updatedDetails[index] = { name: '', phone: '' };
            }
            if (type === 'name') {
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

    // set the contact person details in the contactPersons state from the eventdetails prop passed from the parent component
    useEffect(() => {
        setcontactPerosnDetails(eventDetails.contact);
    }, [eventDetails.contact]);

    // also handle the deletion of the contact person details from the contactPersons state and the contactPersons array
    useEffect(() => {
        setcontactPerosns(constactPersonDetails.length);
    }, [constactPersonDetails]);
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
                        {/* {file && <img src={image} alt="Event" />} */}
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
                    {/* <div className="contact-persons-container">
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
                    </div> */}
                </div>
                {/* also handle the addition of the rows for the contact person details */}
                {constactPersonDetails.map((contact, index) => (
                    <div key={index} className="contact-details-container">
                        <div className="serial-no">
                            <p>{index + 1}.</p>
                        </div>
                        <div className="name-of-contact-person">
                            <input
                                id={`contactPersonName_${index}`}
                                name="name"
                                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
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
                                onChange={(e) => handleInputChange(index, 'phone', e.target.value)}
                                value={contact.phone}
                                className="input"
                                type="tel"
                                placeholder="Contact Number"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            />
                        </div>
                        <div className="delete-contact-person">
                            <button onClick={() => setcontactPerosnDetails((prevDetails) => prevDetails.filter((_, i) => i !== index))}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
                <div className="add-contact-person">
                    <button
                        onClick={() => setcontactPerosnDetails((prevDetails) => [...prevDetails, { name: '', phone: '' }])}
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
                            value={formData.ruleBook} />
                    </div>
                </div>
                <button onClick={handleSubmit} className="submit-button">
                    submit
                </button>
            </form>
        </div>
    );
}
