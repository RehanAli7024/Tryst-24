import "./landing-speakers.css";
import SpeakerCard from "../../../components/SpeakerCard/SpeakerCard.jsx";
import TestImage from "../../../assets/event_cards/ashneer.png";
import BillGates from "../../../assets/speakers/BillGates.webp";
import CarlPei from "../../../assets/speakers/CarlPei.webp";
import SamarSingla from "../../../assets/speakers/SamarSingla.webp";
import NityaSharma from "../../../assets/speakers/NityaSharma.webp";
import DrTanuJain from "../../../assets/speakers/DrTanuJain.webp";
import AbhiNiyu from "../../../assets/speakers/AbhiAndNiyu.webp";
import { useEffect, useState } from "react";

const speakers = [
  {
    index: 1,
    name: "Bill Gates",
    position: "Founder",
    company: "Microsoft",
    image: BillGates,
  },
  {
    index: 2,
    name: "Carl Pei",
    position: "Co-Founder",
    company: "OnePlus and Nothing",
    image: CarlPei,
  },
  {
    index: 3,
    name: "Samar Singla",
    position: "Co-Founder",
    company: "Jugnoo",
    image: SamarSingla,
  },
  {
    index: 4,
    name: "Nitya Sharma",
    position: "Founder",
    company: "Simpl",
    image: NityaSharma,
  },
  {
    index: 5,
    name: "Dr. Tanu Jain",
    position: "Former",
    company: "IAS Officer",
    image: DrTanuJain,
  },
  {
    index: 6,
    name: "Abhi and Niyu",
    position: "Content",
    company: "Creators",
    image: AbhiNiyu,
  },
];

const Speakers = () => {
  // useEffect(() => {
  //   addAnimation();
  // }, []);

  // const addAnimation = () => {
  //   const scrollers = document.querySelectorAll(".scroller");

  //   scrollers.forEach((scroller) => {
  //     scroller.setAttribute("data-animated", true);

  //     const scrollerInner = scroller.querySelector(".scroller__inner");
  //     const scrollerContent = Array.from(scrollerInner.children);

  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true);
  //       duplicatedItem.setAttribute("aria-hidden", true);
  //       scrollerInner.appendChild(duplicatedItem);
  //     });

  //     // Add event listeners for hover
  //     scroller.addEventListener("mouseover", () => {
  //       scrollerInner.style.animationPlayState = "paused";
  //     });

  //     scroller.addEventListener("mouseout", () => {
  //       scrollerInner.style.animationPlayState = "running";
  //     });
  //   });
  // };

  return (
    <div className="landing-comp">
      <div className="landing-heading">SPEAKERS</div>
      <div className="landing-speakers-container scroller" data-speed="slow">
        <div className="landing-speakers-cards scroller__inner">
          {speakers.map((speaker) => (
            <div className="landing-speaker-card" key={speaker.index}>
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
