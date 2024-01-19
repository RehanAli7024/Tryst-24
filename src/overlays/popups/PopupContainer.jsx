import React, { useState } from 'react'
import styled from 'styled-components';
import CompetitionEvent from '../../components/CompetitonEvent/CompetitionEvent.jsx';
import GuestLectureEvent from '../../components/GuestLectureEvent/GuestLectureEvent.jsx';
import WorkshopEvent from '../../components/WorkshopEvents/WorkshopEvent';
import CompetitionRegistration from '../../components/Registration/CompetitionRegistration.jsx';
import GuestRegisteration from '../../components/Registration/GuestRegistration.jsx';
import WorkshopRegistration from '../../components/Registration/WorkshopRegistration.jsx';

export default function PopupContainer({selectedEventType}) {

    const [eventFormTitle, setEventFormTitle] = useState("eventDetails");
    const [isEventSubmitted, setIsEventSubmitted] = useState(false);

    const handleTitleChange = (eventType) => {
        setEventFormTitle(eventType);
    console.log(eventType);
  };

  return (
    <Container>
        <div className="popup-main-container">
            <div className="event-form-buttons">
                <button 
                    onClick={() => handleTitleChange('eventDetails')}>EVENT DETAILS
                </button>
                <button 
                    onClick={() => handleTitleChange('registrationForm')}>REGISTERATION FORM
                </button>
            </div>

            <div className="event-form-inputs">
                {eventFormTitle === 'eventDetails' && selectedEventType === 'competitions' && <CompetitionEvent setIsEventSubmitted={setIsEventSubmitted} setEventFormTitle={setEventFormTitle}/>}
                {eventFormTitle === 'eventDetails' && selectedEventType === 'workshops' && <WorkshopEvent setIsEventSubmitted={setIsEventSubmitted} setEventFormTitle={setEventFormTitle} />}
                {eventFormTitle === 'eventDetails' && selectedEventType === 'guestlectures' && <GuestLectureEvent setIsEventSubmitted={setIsEventSubmitted} setEventFormTitle={setEventFormTitle} />}

                {eventFormTitle === 'registrationForm' && 
                selectedEventType === 'competitions' && 
                isEventSubmitted === true &&
                <CompetitionRegistration />}

                {eventFormTitle === 'registrationForm' && 
                selectedEventType === 'workshops' && 
                isEventSubmitted === true &&
                <WorkshopRegistration />}

                {eventFormTitle === 'registrationForm' && 
                selectedEventType === 'guestlectures' && 
                isEventSubmitted === true &&
                <GuestRegisteration />}

                

            </div>            
        </div>
    </Container>
  )
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
        height:80%;
        width: 60%;
        background-color: #041429;
        border: 2px solid #ACEBF6;
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
                    color: #ACEBF6;
                    border-bottom: 2px solid #ACEBF6;
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
`;
