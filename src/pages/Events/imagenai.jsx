import "./imagen.css";
import Placeholder from "./img_placeholder.png";
import React, { useEffect, useState } from "react";
import ImagenAi from "../../assets/imagenai.png";
import CyberpunkBlur from "../../assets/imagenai/CyberPunk x Game Blur.png";
import CyberpunkGrid from "../../assets/imagenai/CyberPunk x Game Grid.png";
import IllusionBlur from "../../assets/imagenai/Illusion x Emotion Blur.png";
import IllusionGrid from "../../assets/imagenai/Illusion x Emotion Grid.png";
import HumanBlur from "../../assets/imagenai/Human x Culture Blur.png";
import HumanGrid from "../../assets/imagenai/Human x Culture Grid.png";
import CartoonBlur from "../../assets/imagenai/Cartoon x Nature Blur.png";
import CartoonGrid from "../../assets/imagenai/Cartoon x Nature Grid.png";


const imagenai = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="imagen_title">Imagen Ai (Prelims)</div>
        <div className="how_to_use">INSTRUCTIONS</div>
        <div className="bullet_box">
          <ul>
            <li className="bullet">
              In this round, participants will be tested on their prompt
              engineering, and other relevant abilities.
            </li>
            <li className="bullet">
              The challenge involves recreating an image as closely as possible
              within a given timeframe using{" "}
              <a href="https://dreamstudio.ai/">dreamstudio.ai</a> software.
            </li>
            <li className="bullet">
              There will be four sub-rounds, each with a different themes:
              <ul>
                <li className="bullet them-bul">Cyberpunk x Gaming</li>
                <li className="bullet them-bul">Illusion x Emotion</li>
                <li className="bullet them-bul">Human x Culture</li>
                <li className="bullet them-bul">Cartoon x Nature</li>
              </ul>
            </li>
            <li className="bullet">
              Points will be awarded based on the similarity of the generated
              image to the original.
            </li>
            <li className="bullet">
              Any kind of cheating will be caught using our software tool
            </li>
            <li className="bullet">
              Cheating will directly get the team disqualified
            </li>
            <li className="bullet">
              This round will be one of elimination, with participants
              progressing based on their performance.
            </li>
            <li className="bullet">
              Submission will be accepted on the Unstop platform, until{" "}
              <bold>7:05 pm</bold>
            </li>
            <li className="bullet">
              5 minutes of buffer time is given for submission, no queries will
              be entertained after deadline
            </li>
          </ul>
        </div>

        <div className="how_to_use">Brief introduction of Dreamstudio</div>
        <div className="bullet_box">
          <ul>
            <li className="bullet">
              Login to the website using your google account - this is must
            </li>
            <li className="bullet">
              Here's the website link -{" "}
              <a href="https://dreamstudio.ai/">
                https://dreamstudio.ai/generate{" "}
              </a>
            </li>
            <li className="bullet">
              For each account, you can generate 120 images
            </li>
            <li className="bullet">
              As given in the left side of the screen:
              <div className="dreamstd-img-cont">
                <img
                  src={ImagenAi}
                  alt="ImagenAi"
                  style={{
                    width: "90%",
                    marginInlineStart: "5%",
                    marginBlock: "1rem",
                  }}
                />
              </div>
              <ul>
                <li className="bullet them-bul">You can write your prompt</li>
                <li className="bullet them-bul">
                  You can give a negative prompt to avoid a particular thing in
                  your image
                </li>
                <li className="bullet them-bul">
                  You can upload an image to generate a similar image of them
                </li>
                <li className="bullet them-bul">
                  You can change the number of images generated, so manage your
                  image credit limit
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="how_to_use">
          Brief introduction of Image Competition
        </div>
        <div className="bullet_box">
          <ul>
            <li className="bullet">
              To generate a similar image, there are 2 images provided to assist
              you generate them
              <ul>
                <li className="bullet them-bul imagenai-brf-desc">
                  1st Image - Gives context of what can be inside the image
                </li>
                <li className="bullet them-bul imagenai-brf-desc">
                  2nd Image - Gives color theme of the image
                </li>
              </ul>
            </li>
            <li className="bullet">
              Note: Original Image is not shown, to avoid any kind of similar
              image submission
            </li>
            <li className="bullet">
              It is 100% possible to generate a similar image on the given
              platform, as source of original image is the same
            </li>
          </ul>
        </div>

        <div className="event-timer">
          <h1>Event Timer</h1>
          <div className="time-left">
            <span>
              {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
            </span>
            :
            <span>
              {timeLeft.minutes < 10
                ? "0" + timeLeft.minutes
                : timeLeft.minutes}
            </span>
            :
            <span>
              {timeLeft.seconds < 10
                ? "0" + timeLeft.seconds
                : timeLeft.seconds}
            </span>
          </div>
        </div>

        <div className="how_to_use">Images to be Generated</div>
        <div className="imagebox">
          <div className="image_topic">CyberPunk x Gaming</div>

          <div className="imagebox_main">
            <img src={CyberpunkGrid} alt="" />
            <img src={CyberpunkBlur} alt="" />
          </div>
        </div>
        <div className="imagebox">
          <div className="image_topic">Illusion x Emotion</div>

          <div className="imagebox_main">
            <img src={IllusionGrid} alt="" />
            <img src={IllusionBlur} alt="" />
          </div>
        </div>
        <div className="imagebox">
          <div className="image_topic">Human x Culture</div>

          <div className="imagebox_main">
            <img src={HumanGrid} alt="" />
            <img src={HumanBlur} alt="" />
          </div>
        </div>
        <div className="imagebox">
          <div className="image_topic">Cartoon x Nature</div>

          <div className="imagebox_main">
            <img src={CartoonGrid} alt="" />
            <img src={CartoonBlur} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default imagenai;
