import "./landing-sponsors.css"
import SponsorCard from "../../../components/SponsorCard/SponsorCard";
import TechMaghi from "../../../assets/sponsors/tm.webp";

const sponsorsUp = [
    {
        index: 1,
        name: "TechMaghi",
        image: TechMaghi,
        // header: "WORKSHOP PARTNER",
    },
    {
        index: 2,
        name: "TechMaghi",
        image: TechMaghi,
        // header: "WORKSHOP PARTNER",
    },
    {
        index: 3,
        name: "TechMaghi",
        image: TechMaghi,
        // header: "ROBOWARS PARTNER",
    },
    {
        index: 4,
        name: "TechMaghi",
        image: TechMaghi,
    },
]

const Sponsors = () => {
    return (
        <div className="landing-comp">
            <div className="landing-heading">
                SPONSORS
            </div>
            <div className="landing-sponsors-container">
                <div className="landing-sponsors-container-top">
                    {sponsorsUp.map(sponsor => (
                        <div className="landing-sponsor-card">
                            <SponsorCard sponsor={sponsor} />
                        </div>
                    ))}
                </div>
                <div className="landing-sponsors-container-bottom">
                    {sponsorsUp.map(sponsor => (
                        <div className="landing-sponsor-card">
                            <SponsorCard sponsor={sponsor} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Sponsors;