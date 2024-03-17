import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [editingEventId, setEditingEventId] = useState(null);

  const handleEventTypeClick = (eventType) => {
    setSelectedEventType(eventType);
  };

  const togglePopup = () => {
    setPopupIsOpen(!PopupIsOpen);
    setSubmitted(false);
  };

  const selectedEventDetails = eventDetails[selectedEventType] || [];
  useEffect(() => {
    axios
      .get(`${DOMAIN}allevents/`, {
      })
      .then((response) => {
        setEventDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [submitted]);

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
                <h3>Title: {prop.title}</h3>
                <div className="event-card-editing">
                  <button
                    onClick={() => {
                      setEditingEventId(
                        prop.event_id || prop.workshop_id || prop.guest_id
                      );
                      localStorage.setItem(
                        "id",
                        prop.event_id || prop.workshop_id || prop.guest_id
                      );
                    }}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  {prop.spreadsheet_id && (
                    <a
                      href={`https://docs.google.com/spreadsheets/d/${prop.spreadsheet_id}/`}
                      target="_blank"
                      className="spreadsheet-link"
                      rel="noreferrer"
                    >
                      <button className="spreadsheet">Spreadsheet</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
            {editingEventId ===
              (prop.event_id || prop.workshop_id || prop.guest_id) && (
                <PopupContainertoedit
                  editingEventId={editingEventId}
                  setEditPopupIsOpen={() => setEditingEventId(null)} // Pass a function to reset the editing ID
                  eventDetails={prop}
                  selectedEventType={selectedEventType}
                  setEventDetails={setEventDetails}
                  setSubmitted={setSubmitted}
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
  gap: 2rem;
  padding: 3rem 0;
  font-family: Rajdhani;

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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-wrap: wrap;
    gap: 2rem;
    height: 100%;
    justify-content: space-between;
    margin: 1rem 4rem;
    img {
      width: 70%;
      margin: 2rem 0 1rem 0;
    }
  }
  .event-card-image {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .event-card-image img {
    height: 10rem;
  }
  .event-card {
    height: max-content;
  }
  .spreadsheet {
    display: flex;
    text-align: right;
  }
  .edit-btn {
    display: flex;
  }
  .spreadsheet-link {
    display: flex;
    width: max-content;
  }
  .event-card-editing {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;
