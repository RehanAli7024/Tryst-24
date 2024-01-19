import { useState } from "react";
import styled from "styled-components";
import CompetitionEvent from "../../components/CompetitonEvent/CompetitionEvent.jsx";
import GuestLectureEvent from "../../components/GuestLectureEvent/GuestLectureEvent.jsx";
import WorkshopEvent from "../../components/WorkshopEvents/WorkshopEvent";
import CompetitionRegistration from "../../components/Registration/CompetitionRegistration.jsx";
import GuestRegisteration from "../../components/Registration/GuestRegistration.jsx";
import WorkshopRegistration from "../../components/Registration/WorkshopRegistration.jsx";
import PopupNavbar from "./PopupNavbar.jsx";

export default function PopupContainer({ selectedEventType }) {
  const [eventFormTitle, setEventFormTitle] = useState("eventDetails");
  const [isOpen, setIsOpen] = useState(false);
  const [isEventSubmitted, setIsEventSubmitted] = useState(false);
  const [activeButton, setActiveButton] = useState("eventDetails");

  const handleTitleChange = (eventType) => {
    setEventFormTitle(eventType);
    setActiveButton(eventType);
    setIsEventSubmitted(false);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setEventFormTitle("eventDetails");
    setIsEventSubmitted(false);
    setActiveButton("eventDetails");
  };

  const handleEventFormSubmit = () => {
    setIsEventSubmitted(true);
    setActiveButton("registrationForm");
  };

  return (
    <Container>
      <div className="popup-main-container">
        <PopupNavbar
          activeButton={activeButton}
          setActiveButton={handleTitleChange}
          isEventSubmitted={isEventSubmitted}
        />

        <div className="event-form-inputs">
          {eventFormTitle === "eventDetails" &&
            selectedEventType === "competitions" && (
              <CompetitionEvent
                handleClose={togglePopup}
                setIsOpen={setIsOpen}
                setIsEventSubmitted={handleEventFormSubmit}
                setEventFormTitle={setEventFormTitle}
              />
            )}
          {eventFormTitle === "eventDetails" &&
            selectedEventType === "workshops" && (
              <WorkshopEvent
                handleClose={togglePopup}
                setIsOpen={setIsOpen}
                setIsEventSubmitted={handleEventFormSubmit}
                setEventFormTitle={setEventFormTitle}
              />
            )}
          {eventFormTitle === "eventDetails" &&
            selectedEventType === "guestlectures" && (
              <GuestLectureEvent
                handleClose={togglePopup}
                setIsOpen={setIsOpen}
                setIsEventSubmitted={handleEventFormSubmit}
                setEventFormTitle={setEventFormTitle}
              />
            )}

          {eventFormTitle === "registrationForm" &&
            selectedEventType === "competitions" &&
            isEventSubmitted === true && <CompetitionRegistration />}

          {eventFormTitle === "registrationForm" &&
            selectedEventType === "workshops" &&
            isEventSubmitted === true && <WorkshopRegistration />}

          {eventFormTitle === "registrationForm" &&
            selectedEventType === "guestlectures" &&
            isEventSubmitted === true && <GuestRegisteration />}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  .popup-main-container {
    height: 80%;
    width: 60%;
    background-color: #041429;
    border: 2px solid #acebf6;
    display: flex;
    flex-direction: column;
    align-items: center;
    .event-form-buttons {
      height: 10%;
      width: 100%;
      background-color: #041429;
      display: flex;
      justify-content: space-around;
      align-items: center;
      button {
        height: 80%;
        width: 20%;
        color: #fff;
        background-color: transparent;
        border: none;
        outline: none;
        &:focus {
          color: #acebf6;
          border-bottom: 2px solid #acebf6;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
    .event-form-inputs {
      height: 90%;
      width: 100%;
      background-color: #041429;
    }
  }
  .active {
    color: #acebf6;
    border-bottom: 2px solid #acebf6;
  }
`;
