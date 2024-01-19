import React, { useState } from 'react'
import styled from 'styled-components';
import CompetitionEvent from '../../components/CompetitonEvent/CompetitionEvent.jsx';
import GuestLectureEvent from '../../components/GuestLectureEvent/GuestLectureEvent.jsx';
import WorkshopEvent from '../../components/WorkshopEvents/WorkshopEvent';

export default function PopupContainer({selectedEventType}) {

    const [eventTitle, setEventTitle] = useState("eventDetails");

    const handleTitleChange = (eventType) => {
        setEventTitle(eventType);
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
                {eventTitle === 'eventDetails' && selectedEventType === 'competitions' && <CompetitionEvent />}
                {eventTitle === 'eventDetails' && selectedEventType === 'workshops' && <WorkshopEvent />}
                {eventTitle === 'eventDetails' && selectedEventType === 'guestlectures' && <GuestLectureEvent />}

                {eventTitle === 'registrationForm' && <h1>Registration Form</h1>}
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
