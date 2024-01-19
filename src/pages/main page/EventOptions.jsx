import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import competitions from '../../assets/event cards/comps-pic.png';
import workshops from '../../assets/event cards/ws-pic.png';
import guestLectures from '../../assets/event cards/guest-lec-pic.png';
import CompetitionEvent from '../../components/CompetitonEvent/CompetitionEvent';
import GuestLectureEvent from '../../components/GuestLectureEvent/GuestLectureEvent';
import WorkshopEvent from '../../components/WorkshopEvents/WorkshopEvent';
import "./EventOptions.css";
import PopupContainer from '../../overlays/popups/PopupContainer';

const eventCardImages = {
  competitions: [competitions, competitions, competitions],
  workshops: [workshops, workshops, workshops],
  guestlectures: [guestLectures, guestLectures, guestLectures], // Corrected to guestLectures
};

export default function EventOptions() {
  const [selectedEventType, setSelectedEventType] = useState('competitions');
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState();

  const handleEventTypeClick = (eventType) => {
    setSelectedEventType(eventType);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setSubmitted(false);
};

  const selectedImages = eventCardImages[selectedEventType] || [];

  return (
    <Container>
      <div className='event-types'>
        <button
          className={selectedEventType === 'competitions' ? 'selected' : ''}
          onClick={() => handleEventTypeClick('competitions')}
        >
          competitions
        </button>
        <button
          className={selectedEventType === 'workshops' ? 'selected' : ''}
          onClick={() => handleEventTypeClick('workshops')}
        >
          workshops
        </button>
        <button
          className={selectedEventType === 'guestlectures' ? 'selected' : ''}
          onClick={() => handleEventTypeClick('guestlectures')}
        >
          guest lectures
        </button>
      </div>

      <div className='add-new-event-btn'>
        <button
          className='open-popup-btn' onClick={togglePopup}
        >
          <span className='plus-icon'>+</span>
          <span>add new</span>
        </button>

          {isOpen && <PopupContainer selectedEventType={selectedEventType} />}

      </div>

      {/* Published container starts here */}

      <div className="published-container">
        <div className="published">
          <h5>Published</h5>
        </div>
      </div>
      <div className="event-cards">
        {selectedImages.map((imageSrc, index) => (
          <img key={index} src={imageSrc} alt={`event-${index + 1}`} />
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
      border: solid 1px #ACEBF6;
      padding: 1rem 3rem;
      font-size: 1rem;
      text-transform: uppercase;

      &:hover {
        background-color: #ACEBF6;
        color: #000;
        cursor: pointer;
      }

      &.selected {
        background-color: #ACEBF6;
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
      background-color: #ACEBF6;
      color: #000;
      padding: 1rem 3rem;
      font-size: 1rem;
      text-transform: uppercase;
      border-radius: 1rem;
      border: none;

      &:hover {
        background-color: #ACEBF6;
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
      color: #ACEBF6;
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
