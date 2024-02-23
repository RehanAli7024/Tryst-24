import "./landing-speakers.css"
import SpeakerCard from "../../../components/SpeakerCard/SpeakerCard.jsx"
import TestImage from "../../../assets/event_cards/ashneer.png"

const speakers = [
    {
        index: 1,
        name: "Ashneer Grover",
        position: "Founder",
        company: "BharatPe",
        image: TestImage,
    },
    {
        index: 2,
        name: "Ashneer Grover",
        position: "Founder",
        company: "BharatPe",
        image: TestImage,
    },
    {
        index: 3,
        name: "Ashneer Grover",
        position: "Founder",
        company: "BharatPe",
        image: TestImage,
    },
    {
        index: 4,
        name: "Ashneer Grover",
        position: "Founder",
        company: "BharatPe",
        image: TestImage,
    },
    {
        index: 5,
        name: "Ashneer Grover",
        position: "Founder",
        company: "BharatPe",
        image: TestImage,
    },
    {
        index: 6,
        name: "Ashneer Grover",
        position: "Founder",
        company: "BharatPe",
        image: TestImage,
    },
]

const Speakers = () => {

    return (
        <div className="landing-comp">
            <div className="landing-heading">
                SPEAKERS
            </div>
            <div className="landing-speakers-container">
                <div className="landing-speakers-cards">
                    {speakers.map(speaker => (
                        <div className="landing-speaker-card"><SpeakerCard speaker={speaker} /></div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Speakers;