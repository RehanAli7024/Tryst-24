import React from "react";
import userCardSvg from "../../assets/user-card.svg"; // Replace './user-card.svg' with the actual path to your SVG file
import compsPic from "../../assets/event_cards/comps-pic.png";
import bookPassBtn from "../../assets/book-pass.png";
import "./userCard.css";

export default function UserCard() {
  return (
    <div className="user-card-container">
      <img src={userCardSvg} alt="comps-pic" className="usercard-img" />

      <div className="user-card-content">
        <img src={compsPic} alt="comps-pic" className="comps-pic-img" />
        <div className="user-card-text">
          <h2> Pronite 1</h2>
          <p>31st Dec 2023</p>
          <p>10:00 PM</p>
          <p> LH-111</p>
        </div>
        <div className="user-card-btn">
          <img
            src={bookPassBtn}
            alt="book-pass-btn"
            className="book-pass-btn"
          />
        </div>
      </div>
    </div>
  );
}
