import "./landing-sponsors.css"
import SponsorCard from "../../../components/SponsorCard/SponsorCard";
import TechMaghi from "../../../assets/sponsors/tm.webp";
import Adobe from "../../../assets/sponsors/adobe.webp";
import Remarkskill from "../../../assets/sponsors/remarkskill.webp";
import RobocapLeague from "../../../assets/sponsors/robocap.webp";
import EdutechLife from "../../../assets/sponsors/edutech.webp";
import Techobyte from "../../../assets/sponsors/techobyte.webp";
import Robosapiens from "../../../assets/sponsors/robosapiens.webp";
import Wingfotech from "../../../assets/sponsors/wingfotech.webp";
import Orkes from "../../../assets/sponsors/orkes.webp";
import JagranJosh from "../../../assets/sponsors/jagran.webp";
import UnStop from "../../../assets/sponsors/unstop.webp";
import SilliconIndia from "../../../assets/sponsors/siliconindia.webp";


const sponsorsUp1 = [
    {
        index: 1,
        name: "Adobe",
        image: Adobe,
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
        name: "Remarkskill",
        image: Remarkskill,
        // header: "ROBOWARS PARTNER",
    },
    {
        index: 4,
        name: "Robocap League",
        image: RobocapLeague,
    },
]

const sponsorsUp2 = [
    {
        index: 1,
        name: "Edutech Life",
        image: EdutechLife,
        // header: "WORKSHOP PARTNER",
    },
    {
        index: 2,
        name: "Techobyte",
        image: Techobyte,
        // header: "WORKSHOP PARTNER",
    },
    {
        index: 3,
        name: "Robosapiens",
        image: Robosapiens,
        // header: "ROBOWARS PARTNER",
    },
    {
        index: 4,
        name: "Wingfotech",
        image: Wingfotech,
    },
]

const sponsorsUp3 = [
    {
        index: 1,
        name: "Orkes",
        image: Orkes,
    },
    {
        index: 2,
        name: "Jagran Josh",
        image: JagranJosh,
    },
    {
        index: 3,
        name: "UnStop",
        image: UnStop,
    },
    {
        index: 4,
        name: "SilliconIndia",
        image: SilliconIndia,
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
                    {sponsorsUp1.map(sponsor => (
                        <div className="landing-sponsor-card">
                            <SponsorCard sponsor={sponsor} />
                        </div>
                    ))}
                </div>
                <div className="landing-sponsors-container-bottom">
                    {sponsorsUp2.map(sponsor => (
                        <div className="landing-sponsor-card">
                            <SponsorCard sponsor={sponsor} />
                        </div>
                    ))}
                </div>
                {/* <div className="landing-sponsors-container-top">
                    {sponsorsUp3.map(sponsor => (
                        <div className="landing-sponsor-card">
                            <SponsorCard sponsor={sponsor} />
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
};

export default Sponsors;