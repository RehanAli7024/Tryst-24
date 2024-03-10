import Eventcardbg from "../../assets/event_cards/Event_Card_bg_color.svg";
import demo from "../../assets/event_cards/demo.png";
import topvector from "../../assets/event_cards/Event_Card._top_vector.svg";
import bottomvector from "../../assets/event_cards/Event_Card_bottom_vector.svg";
import "./EventCard.css";
import topvectorHover from "../../assets/event_cards/Event_Card._top_vector_hover.svg";
import EventcardbgHover from "../../assets/event_cards/Event_Card_bg_hover.svg";
import EventcardbgClicked from "../../assets/event_cards/Event_Card_bg_click.svg";
import bottomvectorHover from "../../assets/event_cards/Event_Card_bottom_vector_hover.svg";
import { useState } from "react";

export default function EventCard({ image }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsHovered(false);
  };



  return (
    <div
      className={`event-card-component-container ${isClicked ? "clicked" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transformStyle: isHovered || isClicked ? "preserve-3d" : "preserve-3d",
        transition: isHovered || isClicked ? "all 2s ease" : "all 2s ease",
      }}
    >
      <img
        src={
          isHovered
            ? EventcardbgHover
            : isClicked
              ? EventcardbgClicked
              : Eventcardbg
        }
        alt="event card background"
        className="event-card-bg"
      />
      <div className="event-card-img">
        <img src={image} alt="event" />
      </div>
      <div className="event-card-top-vector">
        <img
          src={isHovered || isClicked ? topvectorHover : topvector}
          alt="event card background"
          className="event-card-bg"
        />
      </div>
      <div className="event-card-bottom-vector">
        <img
          src={isHovered || isClicked ? bottomvectorHover : bottomvector}
          alt="event card background"
          className="event-card-bg"
        />
      </div>
    </div>
  );
}
