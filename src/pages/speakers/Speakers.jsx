import "./speakers.css";
import SpeakersCard from "../../components/SpeakerCard/SpeakerCard";
import BillGates from "../../assets/speakers/BillGates.webp";
import CarlPei from "../../assets/speakers/CarlPei.webp";
import SamarSingla from "../../assets/speakers/SamarSingla.webp";
import NityaSharma from "../../assets/speakers/NityaSharma.webp";
import DrTanuJain from "../../assets/speakers/DrTanuJain.webp";
import AbhiNiyu from "../../assets/speakers/AbhiAndNiyu.webp";

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

function Speakers() {
  return (
    <>
      <div className="speakers">
        <div className="speakers-head">SPEAKERS</div>
        <div className="speakers-body">
          {speakers.map((speaker) => (
            <div className="guest-card">
              <SpeakersCard speaker={speaker} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Speakers;
