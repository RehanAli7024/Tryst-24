import Eventcardbg from "../../assets/event cards/Event_Card_bg_color.svg";
import demo from "../../assets/event cards/demo.png";
import topvector from "../../assets/event cards/Event_Card._top_vector.svg";
import bottomvector from "../../assets/event cards/Event_Card_bottom_vector.svg";
import "./EventCard.css";

export default function EventCard() {
  return (
    <div className="event-card-component-container">
      <div className="event-card-component">
        <img
          src={Eventcardbg}
          alt="event card background"
          className="event-card-bg"
        />
        <div className="event-card-img">
          <img src={demo} alt="event card background" />
        </div>
        <div className="event-card-top-vector">
            <img src={topvector} alt="event card background" />
        </div>
        <div className="event-card-bottom-vector">
            <img src={bottomvector} alt="event card background" />
        </div>
      </div>
    </div>
  );
}
