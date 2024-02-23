import "./SpeakerCard.css"
import TestImage from "../../assets/event_cards/ashneer.png"
import Border from "../../assets/event_cards/speaker-border.png"

const SpeakerCard = () => {
    return (
        <div className="speaker-card-container speaker-shape">
            <div className="speaker-card speaker-shape">
                <div className="speaker-card-name">Ashneer Grover</div>
                <div className="speaker-card-image-container speaker-shape-2">
                    <div className="speaker-card-image speaker-shape-2">
                        <img src={Border} alt="Border" className="speaker-card-border" />
                        <div className="speaker-card-position-container speaker-shape-3">
                            <div className="speaker-card-position speaker-shape-3">
                                <div className="speaker-card-position-top">Founder</div>
                                <div className="speaker-card-position-bottom">BharatPe</div>
                            </div>
                        </div>
                        <img src={TestImage} alt="Ashneer Grover" className="speaker-card-img" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SpeakerCard;