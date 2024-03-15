import "./imagen.css";
import Placeholder from "./img_placeholder.png";
import React, { useEffect, useState } from "react";

const imagenai = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const targetTime = new Date();
    targetTime.setHours(19, 0, 0); // Set target time to 7 PM

    const currentTime = new Date();
    const difference = targetTime.getTime() - currentTime.getTime();

    if (difference > 0) {
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { hours, minutes, seconds };
    } else {
      return { hours: 0, minutes: 0, seconds: 0 }; // Event is over
    }
  }

  return (
    <>
      <div className="imagen_box">
        <div className="imagen_title">Imagen Ai</div>
        <div className="how_to_use">How to Play?</div>
        <div className="bullet_box">
          <div className="bullet">
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Deleniti earum quo aut, alias exercitationem libero.
          </div>
          <div className="bullet">
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Deleniti earum quo aut, alias exercitationem libero.
          </div>
          <div className="bullet">
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Deleniti earum quo aut, alias exercitationem libero.
          </div>
          <div className="bullet">
            1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Deleniti earum quo aut, alias exercitationem libero.
          </div>
        </div>

        <div className="event-timer">
        <h1>Event Timer</h1>
            <div className="time-left">
                <span>{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}</span>:
                <span>{timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes}</span>:
                <span>{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}</span>
            </div>
        </div>

        <div className="imagebox">
          <div className="image_topic">Lorem</div>
          <div className="image_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            error.
          </div>
          <div className="imagebox_main">
            <img src={Placeholder} alt="" />
            <img src={Placeholder} alt="" />
          </div>
        </div>
        <div className="imagebox">
          <div className="image_topic">Lorem</div>
          <div className="image_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            error.
          </div>
          <div className="imagebox_main">
            <img src={Placeholder} alt="" />
            <img src={Placeholder} alt="" />
          </div>
        </div>
        <div className="imagebox">
          <div className="image_topic">Lorem</div>
          <div className="image_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            error.
          </div>
          <div className="imagebox_main">
            <img src={Placeholder} alt="" />
            <img src={Placeholder} alt="" />
          </div>
        </div>
        <div className="imagebox">
          <div className="image_topic">Lorem</div>
          <div className="image_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            error.
          </div>
          <div className="imagebox_main">
            <img src={Placeholder} alt="" />
            <img src={Placeholder} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default imagenai;
