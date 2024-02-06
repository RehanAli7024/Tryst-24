import React from "react";
import "./ComingSoon.css";
import video from "../../assets/planetpeek7.mp4";
import mobilevideo from "../../assets/planetpeekmobile.mp4";
import comingsoonimg from "../../assets/comingsoon.png";

export default function ComingSoon() {
  return (
    <div className="fullscreen-video-container">
      <div className="coming-soon-text-overlay">
        <h1 className="coming-soon-text-h1">COMING SOON...</h1>
      </div>
      <div className="coming-soon-bg"></div>

      <video
        controls={false}
        autoPlay
        loop
        muted
        className="fullscreen-laptop-video"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        controls={false}
        autoPlay
        loop
        muted
        className="fullscreen-mobile-video"
      >
        <source src={mobilevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
