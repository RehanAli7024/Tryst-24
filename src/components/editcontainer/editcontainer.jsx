import { useState } from "react";
import styled from "styled-components";
import PopupNavbar from "../../overlays/popups/PopupNavbar.jsx";
import EditCompetitionEvent from "../editallevents/editcompetition.jsx";
import EditCompetitionRegistration from "../edit_Registration/EditCompetitionRegistration.jsx";
import EditWorkshopEvent from "../editallevents/editworkshop.jsx";
import EditGuestEvent from "../editallevents/editguest.jsx";
import EditWorkshopRegistration from "../edit_Registration/EditWorkshopRegistration.jsx";
import EditGuestRegistration from "../edit_Registration/EditGuestRegistration.jsx";

export default function PopupContainertoedit({
    selectedEventType,
    editPopupIsOpen,
    setEditPopupIsOpen,
    eventDetails,
}) {
    console.log("PopupContainertoedit");
    const [eventFormTitle, setEventFormTitle] = useState("eventDetails");
    const [isOpen, setIsOpen] = useState(false);
    const [isEventSubmitted, setIsEventSubmitted] = useState(true);
    const [activeButton, setActiveButton] = useState("eventDetails");

    const handleTitleChange = (eventType) => {
        setEventFormTitle(eventType);
        setActiveButton(eventType);
        setIsEventSubmitted(false);
    };

    const togglePopup = () => {
        setEditPopupIsOpen(!editPopupIsOpen);
        localStorage.removeItem("id");
        setEventFormTitle("eventDetails");
        setIsEventSubmitted(true);
        setActiveButton("eventDetails");
    };

    const handleEventFormSubmit = () => {
        setIsEventSubmitted(true);
        setActiveButton("registrationForm");
    };

    return (
        <Container>
            <div className="popup-main-container">
                <div className="popup-close-btn">
                    <button className="close-button" onClick={togglePopup}>
                        X
                    </button>
                </div>
                <PopupNavbar
                    activeButton={activeButton}
                    setActiveButton={handleTitleChange}
                    isEventSubmitted={isEventSubmitted}
                    task="edit"
                />
                <div className="event-form-inputs">
                    {eventFormTitle === "eventDetails" &&
                        selectedEventType === "competitions" && (
                            <EditCompetitionEvent
                                handleClose={togglePopup}
                                setIsOpen={setIsOpen}
                                setIsEventSubmitted={handleEventFormSubmit}
                                setEventFormTitle={setEventFormTitle}
                                eventDetails={eventDetails}
                            />
                        )}
                    {eventFormTitle === "eventDetails" &&
                        selectedEventType === "workshops" && (
                            <EditWorkshopEvent
                                handleClose={togglePopup}
                                setIsOpen={setIsOpen}
                                setIsEventSubmitted={handleEventFormSubmit}
                                setEventFormTitle={setEventFormTitle}
                                eventDetails={eventDetails}
                            />
                        )}
                    {eventFormTitle === "eventDetails" &&
                        selectedEventType === "guestlectures" && (
                            <EditGuestEvent
                                handleClose={togglePopup}
                                setIsOpen={setIsOpen}
                                setIsEventSubmitted={handleEventFormSubmit}
                                setEventFormTitle={setEventFormTitle}
                                eventDetails={eventDetails}
                            />
                        )}

                    {eventFormTitle === "editregistrationForm" &&
                        selectedEventType === "competitions" && <EditCompetitionRegistration />}

                    {eventFormTitle === "editregistrationForm" &&
                        selectedEventType === "workshops" && <EditWorkshopRegistration />}

                    {eventFormTitle === "editregistrationForm" &&
                        selectedEventType === "guestlectures" && <EditGuestRegistration />}
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
  
  .close-button {
    position: relative;
    top: 10px;
    right: 10px;
    background-color: transparent;
    color: red;
    border: none;
    outline: none;
    cursor: pointer;
    color: #ACEBF6;
  }
  .popup-close-btn{
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;
