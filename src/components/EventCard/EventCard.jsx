import Eventcardbg from "../../assets/event cards/Event_Card_bg_color.svg";
import demo from "../../assets/event cards/demo.png";
import topvector from "../../assets/event cards/Event_Card._top_vector.svg";
import bottomvector from "../../assets/event cards/Event_Card_bottom_vector.svg";
import "./EventCard.css";

export default function EventCard() {
  return (
    <div className="event-card-container">
      <div className="event-card-top"></div>
      <div className="event-card"></div>
      <div className="event-card-bottom"></div>
    </div>
  );
}
