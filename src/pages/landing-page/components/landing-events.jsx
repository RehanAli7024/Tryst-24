import { useEffect, useState, useRef } from "react";
import "./landing-events.css";
import EventCard from "../../../components/EventCard/EventCard";
import TestImage from "../../../assets/event_cards/demo.png";
import ChessImage from "../../../assets/Events/chess.webp";
import RobowarsImage from "../../../assets/Events/robowars.webp";
import StartupAuctionImage from "../../../assets/Events/startup_auction.webp"
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

const Events = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [intervalId, setIntervalId] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleMouseOver = (event) => {
      let iteration = 0;

      clearInterval(intervalId);

      const newIntervalId = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(newIntervalId);
        }

        iteration += 1 / 3;
      }, 50);

      setIntervalId(newIntervalId);
    };

    const h1Elements = document.querySelectorAll(".landing-heading-events");

    h1Elements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
    });

    return () => {
      h1Elements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
      });
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    if (inView) {
      // Start the animation when in view
      const h1Element = document.querySelector(".landing-heading-events");
      h1Element.dispatchEvent(new Event("mouseover"));
    }
  }, [inView]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="landing-comp">
      <div
        className="landing-heading landing-heading-events text-animation"
        data-value="EVENTS"
        ref={ref}
      >
        EVENTS
      </div>
      <div
        className="landing-events-container"
        data-aos="zoom-in-up"
        data-aos-duration="800"
      >
    <div className="landing-events-container">
      <div className="landing-event-card landing-event-card1">
        <a href="https://www.tryst-iitd.org/events/Tryst%20Chess%20Championship">
          <EventCard image={ChessImage} />
        </a>
      </div>
      <div className="landing-event-card landing-event-card2">
        <a href="https://www.tryst-iitd.org/events/ROBOWARS">
          <EventCard image={RobowarsImage} />
        </a>
      </div>
      <div className="landing-event-card landing-event-card1">
        <a href="https://www.tryst-iitd.org/events/Startup%20Auction">
          <EventCard image={StartupAuctionImage} />
        </a>
      </div>
    </div>
    </div>
  );
};

export default Events;
