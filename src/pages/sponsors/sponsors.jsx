import './sponsors.css';
import Samsung from "../../assets/sponsors/samsung.webp";
import TechMaghi from "../../assets/sponsors/tm.webp";
import RemarkSkill from "../../assets/sponsors/remarkskill.webp";
import Robocap from "../../assets/sponsors/robocap.webp";
import Edutech from "../../assets/sponsors/edutech.webp";
import Techobyte from "../../assets/sponsors/techobyte.webp";
import Robosapiens from "../../assets/sponsors/robosapiens.webp";
import Wingfotech from "../../assets/sponsors/wingfotech.webp";
import Orkes from "../../assets/sponsors/orkes.webp";
import Jagran from "../../assets/sponsors/jagran.webp";
import UnStop from "../../assets/sponsors/unstop.webp";
import SiliconIndia from "../../assets/sponsors/siliconindia.webp";

import SponsorCard from '../../components/SponsorCard/SponsorCard';


const sponsors = [
    {
        index: 1,
        name: "Nucleus Software",
        image: TechMaghi,
        // header: "WORKSHOP PARTNER",
    },
    {
        index: 2,
        name: "Nucleus Software",
        image: RemarkSkill,
        header: "WORKSHOP PARTNER",
    },
    {
        index: 3,
        name: "Robocap League",
        image: Robocap,
        // header: "ROBOWARS PARTNER",
    },
    {
        index: 4,
        name: "Edutech Life",
        image: Edutech,
    },
    {
        index: 5,
        name: "Techobyte",
        image: Techobyte,
    },
    {
        index: 6,
        name: "Robosapiens",
        image: Robosapiens,
    },
    {
        index: 7,
        name: "Wingfotech",
        image: Wingfotech,
    },
    {
        index: 8,
        name: "Orkes",
        image: Orkes,
    },
    {
        index: 9,
        name: "Jagran Josh",
        image: Jagran,
    },
    {
        index: 10,
        name: "UnStop",
        image: UnStop,
    },
    {
        index: 11,
        name: "SiliconIndia",
        image: SiliconIndia,
    },
    {
        index: 12,
        name: "TechMaghi",
        image: TechMaghi,
    },
    {
        index: 13,
        name: "Remarkskill",
        image: RemarkSkill,
    },
    {
        index: 14,
        name: "Robocap League",
        image: Robocap,
    },
    {
        index: 15,
        name: "Edutech Life",
        image: Edutech,
    },
    {
        index: 16,
        name: "Techobyte",
        image: Techobyte,
    },
    {
        index: 17,
        name: "Robosapiens",
        image: Robosapiens,
    },
    {
        index: 18,
        name: "Wingfotech",
        image: Wingfotech,
    },
    {
        index: 19,
        name: "Orkes",
        image: Orkes,
    },
    {
        index: 20,
        name: "Jagran Josh",
        image: Jagran,
    },
    {
        index: 21,
        name: "UnStop",
        image: UnStop,
    },
    {
        index: 22,
        name: "SiliconIndia",
        image: SiliconIndia,
    },
    {
        index: 23,
        name: "TechMaghi",
        image: TechMaghi,
    },
    {
        index: 24,
        name: "Remarkskill",
        image: RemarkSkill,
    },
    {
        index: 25,
        name: "Robocap League",
        image: Robocap,
    },
    {
        index: 26,
        name: "Edutech Life",
        image: Edutech,
    },
    {
        index: 27,
        name: "Techobyte",
        image: Techobyte,
    },
    {
        index: 28,
        name: "Robosapiens",
        image: Robosapiens,
    },
    {
        index: 29,
        name: "Wingfotech",
        image: Wingfotech,
    },
    {
        index: 30,
        name: "Orkes",
        image: Orkes,
    },
    {
        index: 31,
        name: "Jagran Josh",
        image: Jagran,
    },
    {
        index: 32,
        name: "UnStop",
        image: UnStop,
    },
]


function Sponsors() {
    return (
        <>
            <div className="sponsors">
                <div className="sponsors-head">SPONSORS</div>
                <div className="sponsors-body">
                    <div className="sponsors-title-sponsor sponsors-shape-title">
                        <div className="sponsors-title-sponsor-subcontainer sponsors-shape-title">
                            <div className="sponsors-title-sponsor-img-div">
                                <img src={Samsung} alt="Samsung" className='sponsors-title-sponsor-img' />
                            </div>
                            <div className="sponsors-title-sponsor-text">Samsung</div></div>
                    </div>
                    {/* <div className="sponsors-other-sponsors-type">WORKSHOP PARTNER</div> */}
                    <div className='sponsors-other-sponsors'>
                        {sponsors.map(sponsor => (
                            <div key={sponsor.index} className="sponsors-other-sponsors-container" id={`sponsor${sponsor.index}`}>
                                <div className="sponsors-other-sponsors-head">{sponsor.header}</div>
                                <div className="sponsors-other-sponsors-box-container sponsors-shape">
                                    <div className="sponsors-other-sponsors-box sponsors-shape">
                                        <div className="sponsors-other-sponsors-box-img-div">
                                            <img src={sponsor.image} alt={sponsor.name} className="sponsors-other-sponsors-box-img" />
                                        </div>
                                        <div className="sponsors-other-sponsors-box-text">{sponsor.name}</div>
                                    </div>
                                </div>
                            </div>
                            // <SponsorCard sponsor={sponsor} />
                        ))}
                    </div>
                    {/* <div className="sponsors-other-sponsors-type"></div>
                    <div className='sponsors-other-sponsors'>
                        {sponsors.map(sponsor => (
                            <div key={sponsor.index} className="sponsors-other-sponsors-container" id={`sponsor${sponsor.index}`}>
                                <div className="sponsors-other-sponsors-head">{sponsor.header}</div>
                                <div className="sponsors-other-sponsors-box-container sponsors-shape">
                                    <div className="sponsors-other-sponsors-box sponsors-shape">
                                        <div className="sponsors-other-sponsors-box-img-div">
                                            <img src={sponsor.image} alt={sponsor.name} className="sponsors-other-sponsors-box-img" />
                                        </div>
                                        <div className="sponsors-other-sponsors-box-text">{sponsor.name}</div>
                                    </div>
                                </div>
                            </div>
                            // <SponsorCard sponsor={sponsor} />
                        ))}
                    </div> */}
                </div>
            </div >
        </>
    )
}

export default Sponsors;