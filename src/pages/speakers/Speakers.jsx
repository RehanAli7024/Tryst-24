import "./speakers.css";
import SpeakersCard from "../../components/SpeakerCard/SpeakerCard";
import BillGates from "../../assets/speakers/BillGates.webp";
import CarlPei from "../../assets/speakers/CarlPei.webp";
import SamarSingla from "../../assets/speakers/SamarSingla.webp";
import NityaSharma from "../../assets/speakers/NityaSharma.webp";
import DrTanuJain from "../../assets/speakers/DrTanuJain.webp";
import AbhiNiyu from "../../assets/speakers/AbhiAndNiyu.webp";
import { useState } from "react";
import SpeakersOverlay from "./speakersoverlay";

const speakers = [
  {
    index: 1,
    name: "Bill Gates",
    position: "Founder",
    company: "Microsoft",
    image: BillGates,
    details: "dfssf",
  },
  {
    index: 2,
    name: "Carl Pei",
    position: "Co-Founder",
    company: "OnePlus and Nothing",
    image: CarlPei,
    details: "",
  },
  {
    index: 3,
    name: "Samar Singla",
    position: "Co-Founder",
    company: "Jugnoo",
    image: SamarSingla,
    details: "",
  },
  {
    index: 4,
    name: "Nitya Sharma",
    position: "Founder",
    company: "Simpl",
    image: NityaSharma,
    details: "",
  },
  {
    index: 5,
    name: "Dr. Tanu Jain",
    position: "Former",
    company: "IAS Officer",
    image: DrTanuJain,
    details: "",
  },
  {
    index: 6,
    name: "Abhi and Niyu",
    position: "Content",
    company: "Creators",
    image: AbhiNiyu,
    details: "",
  },
];

function Speakers() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  return (
    <div>
      {showOverlay && <div className="speakers-overlay-state"><SpeakersOverlay setShowOverlay={setShowOverlay} name={name} details={details} /></div>}
      <div className="speakers" 
      style={showOverlay ? {filter:"blur(5px)"} : {filter:"blur(0px)"}}
      >
        <div className="speakers-head">SPEAKERS</div>
        <div className="speakers-body">
          {speakers.map((speaker) => (
            <div className="guest-card" onClick={()=>{setShowOverlay(true);setName(speaker.name);setDetails(speaker.details)}}>
              <SpeakersCard speaker={speaker} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speakers;