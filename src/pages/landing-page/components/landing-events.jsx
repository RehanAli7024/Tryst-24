import  { useEffect, useState, useRef } from "react";
import "./landing-events.css";
import EventCard from "../../../components/EventCard/EventCard";
import TestImage from "../../../assets/event_cards/demo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Events = () => {
  const [animationInterval, setAnimationInterval] = useState(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          // Start animation when the target is in the viewport
          handleMouseOver();
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Observe the target element
    observer.observe(textRef.current);

    // Cleanup the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, [textRef]);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleMouseOver = () => {
    let iteration = 0;

    clearInterval(animationInterval);

    setAnimationInterval(
      setInterval(() => {
        textRef.current.innerText = textRef.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return textRef.current.dataset.value[index];
            }

            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          })
          .join("");

        if (iteration >= textRef.current.dataset.value.length) {
          clearInterval(animationInterval);
        }

        iteration += 1 / 6;
      }, 30)
    );
  };

  return (
    <div className="landing-comp">
      <div
        className="landing-heading landing-heading-events text-animation"
        data-value="EVENTS"
        onMouseOver={handleMouseOver}
        ref={textRef}
      >
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
    </div>
  );
};

export default Events;
