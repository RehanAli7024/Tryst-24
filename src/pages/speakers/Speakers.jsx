import './speakers.css';
import SpeakersCard from '../../components/speakersCard/SpeakersCard';


function Speakers() {
    return (
        <>
            <div className="speakers">
                <div className="speakers-head">SPEAKERS</div>
                <div className="speakers-body">
                    <SpeakersCard />
                    <SpeakersCard />
                    <SpeakersCard />
                </div>
            </div>
        </>
    )
}

export default Speakers;