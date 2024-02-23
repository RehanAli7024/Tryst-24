import "./landing-events.css"
import EventCard from "../../../components/EventCard/EventCard";
import TestImage from "../../../assets/event_cards/demo.png";

const Events = () => {
    return (
        <div className="landing-comp">
            <div className="landing-heading">
                EVENTS
            </div>
            <div className="landing-events-container">
                <div className="landing-event-card landing-event-card1">
                    <EventCard image={TestImage} />
                </div>
                <div className="landing-event-card landing-event-card2">
                    <EventCard image={TestImage} />
                </div>
                <div className="landing-event-card landing-event-card1">
                    <EventCard image={TestImage} />
                </div>
            </div>
        </div>
    )
};

export default Events;