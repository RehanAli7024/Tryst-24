import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./eventOptions.css";
import PopupContainer from "../../overlays/popups/PopupContainer";
import axios from "axios";
import { DOMAIN } from "../../domain";
import PopupContainertoedit from "../../components/editcontainer/editcontainer";


export default function EventOptions() {
  const [selectedEventType, setSelectedEventType] = useState("competitions");
  const [PopupIsOpen, setPopupIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState();
  const [eventDetails, setEventDetails] = useState({});
  const [editPopupIsOpen, setEditPopupIsOpen] = useState(false);

  const handleEventTypeClick = (eventType) => {
    setSelectedEventType(eventType);
  };

  const togglePopup = () => {
    setPopupIsOpen(!PopupIsOpen);
    setSubmitted(false);
  };

  const selectedEventDetails = eventDetails[selectedEventType] || [];

  useEffect(() => {
    const token = localStorage.getItem("admin_access_token");
    console.log(token);
    axios.get(`${DOMAIN}allevents/`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        // console.log(response);
        setEventDetails(response.data);
        console.log(eventDetails);
      }).catch((error) => {
        console.log(error);
      }
      )
  }, [submitted]);

  useEffect(() => {
    console.log(eventDetails);
  }
    , [eventDetails]);

  return (
    <Container>
      <div className="event-types">
        <button
          className={selectedEventType === "competitions" ? "selected" : ""}
          onClick={() => handleEventTypeClick("competitions")}
        >
          competitions
        </button>
        <button
          className={selectedEventType === "workshops" ? "selected" : ""}
          onClick={() => handleEventTypeClick("workshops")}
        >
          workshops
        </button>
        <button
          className={selectedEventType === "guestlectures" ? "selected" : ""}
          onClick={() => handleEventTypeClick("guestlectures")}
        >
          guest lectures
        </button>
      </div>

      <div className="add-new-event-btn">
        <button className="open-popup-btn" onClick={togglePopup}>
          <span className="plus-icon">+</span>
          <span>add new</span>
        </button>

        {PopupIsOpen && (
          <PopupContainer
            selectedEventType={selectedEventType}
            PopupIsOpen={PopupIsOpen}
            setPopupIsOpen={setPopupIsOpen}
          />
        )}
      </div>

      {/* Published container starts here */}

      <div className="published-container">
        <div className="published">
          <h5>Published</h5>
        </div>
      </div>
      <div className="event-cards">
        {selectedEventDetails.map((prop, index) => (
          <div key={index}>
            <div className="event-card">
              <div className="event-card-image">
                <img src={prop.event_image} alt={`event-${index + 1}`} />
              </div>
              <div className="event-card-details">
                <h3>{prop.title}</h3>
                <button
                  onClick={() => {
                    setEditPopupIsOpen(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
            {editPopupIsOpen && (
              <PopupContainertoedit
                editPopupIsOpen={editPopupIsOpen}
                setEditPopupIsOpen={setEditPopupIsOpen}
                eventDetails={prop}
                selectedEventType={selectedEventType}
              />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 0;

  .event-types {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    button {
      background-color: #293749;
      color: #fff;
      border: solid 1px #acebf6;
      padding: 1rem 3rem;
      font-size: 1rem;
      text-transform: uppercase;

      &:hover {
        background-color: #acebf6;
        color: #000;
        cursor: pointer;
      }

      &.selected {
        background-color: #acebf6;
        color: #000;
      }
    }
  }

  .add-new-event-btn {
    .open-popup-btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      background-color: #acebf6;
      color: #000;
      padding: 1rem 3rem;
      font-size: 1rem;
      text-transform: uppercase;
      border-radius: 1rem;
      border: none;

      &:hover {
        background-color: #acebf6;
        color: #000;
        cursor: pointer;
      }

      .plus-icon {
        font-size: 1.5rem;
      }
    }
  }

  .published {
    h5 {
      font-size: 3rem;
      color: #acebf6;
      text-transform: uppercase;
      padding: 1rem 0;
      margin: 1rem 0;
    }
  }

  .event-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
      width: 30%;
      margin: 2rem 0;
    }
  }
`;
