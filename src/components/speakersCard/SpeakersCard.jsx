import React from "react";
import speakerCardContainer from "../../assets/speakerCard/speakerCardContainer.svg";
import "./speakersCard.css";
import nameContainer from "../../assets/speakerCard/nameContainer.svg";
import focusElements from "../../assets/speakerCard/focusElements.svg";
import speakerImg from "../../assets/speakerCard/img mask.png";

export default function SpeakersCard() {
  return (
    <div className="user-card-container">
      <img src={speakerCardContainer} alt="" />
      <div className="speaker-name">
        <h3>Ashneer Grover</h3>
      </div>
      <div className="speaker-img">
        <img src={speakerImg} alt="" />
      </div>

      <div className="focus-elements">
        <img src={focusElements} alt="" />
      </div>

      <div className="name-container">
        <img src={nameContainer} alt="" />
      </div>

      <div className="postion-container">
        <h4>Founder</h4>
        <p>BharatPe</p>
      </div>

    </div>
  );
}

