import React, { useEffect } from "react";
import "./landing-events.css"
import EventCard from "../../../components/EventCard/EventCard";
import TestImage from "../../../assets/event_cards/demo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Events = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="landing-comp">
            <div className="landing-heading landing-heading-events">
                EVENTS
            </div>
            <div className="landing-events-container" data-aos="zoom-in-up" data-aos-duration="800">
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
        </div >
    )
};

export default Events;