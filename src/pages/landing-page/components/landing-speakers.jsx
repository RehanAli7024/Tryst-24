import "./landing-speakers.css"
import SpeakerCard from "../../../components/SpeakerCard/SpeakerCard.jsx"

const Speakers = () => {
    return (
        <div className="landing-comp">
            <div className="landing-heading">
                SPEAKERS
            </div>
            <div className="landing-speakers-container">
                <div className="landing-speakers-cards">
                    <div className="landing-speaker-card"><SpeakerCard /></div>
                    <div className="landing-speaker-card"><SpeakerCard /></div>
                    <div className="landing-speaker-card"><SpeakerCard /></div>
                    <div className="landing-speaker-card"><SpeakerCard /></div>
                    <div className="landing-speaker-card"><SpeakerCard /></div>
                    <div className="landing-speaker-card"><SpeakerCard /></div>
                </div>
            </div>
        </div>
    )
};

export default Speakers;