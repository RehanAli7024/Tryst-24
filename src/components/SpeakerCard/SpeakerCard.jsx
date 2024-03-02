import "./SpeakerCard.css"
import Border from "../../assets/event_cards/speaker-border.png"

function SpeakerCard({ speaker }) {
    return (
        <div className="speaker-card-container speaker-shape">
            <div className="speaker-card speaker-shape">
                <div className="speaker-card-name">{speaker.name}</div>
                <div className="speaker-card-image-container speaker-shape-2">
                    <div className="speaker-card-image speaker-shape-2">
                        <img src={Border} alt="Border" className="speaker-card-border" />
                        <div className="speaker-card-position-container speaker-shape-3">
                            <div className="speaker-card-position speaker-shape-3">
                                <div className="speaker-card-position-top">{speaker.position}</div>
                                <div className="speaker-card-position-bottom">{speaker.company}</div>
                            </div>
                        </div>
                        <img src={speaker.image} alt="Speaker" className="speaker-card-img" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SpeakerCard;