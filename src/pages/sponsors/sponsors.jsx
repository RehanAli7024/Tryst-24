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
import Nucleus from "../../assets/sponsors/nucleus.webp";
import Aviakul from "../../assets/sponsors/aviakul.webp";
import Creya from "../../assets/sponsors/creya.webp";
import Fetchai from "../../assets/sponsors/fetchai.webp";
import Intel from "../../assets/sponsors/intel.webp";
import JungleeGames from "../../assets/sponsors/jungleegames.webp";
import Kredent from "../../assets/sponsors/kredent.webp";
import Logiqids from "../../assets/sponsors/logiqids.webp";
import Medulance from "../../assets/sponsors/medulance.webp";
import PieMatrix from "../../assets/sponsors/piematrix.webp";
import Twoss from "../../assets/sponsors/twoss.webp";

import SponsorCard from '../../components/SponsorCard/SponsorCard';


const sponsors = [
    {
        index: 1,
        name: "Nucleus Software",
        image: Nucleus,
        header: "POWERED BY",
        // instagram: "https://www.instagram.com/lifeatnucleussoftware/?hl=en"
    },
    {
        index: 2,
        name: "Teckmaghi",
        image: TechMaghi,
        // header: "WORKSHOP PARTNER",
    },
    {
        index: 3,
        name: "Remarkskill",
        image: RemarkSkill,
        // header: "ROBOWARS PARTNER",
    },
    {
        index: 4,
        name: "Robocap League",
        image: Robocap,
    },
    {
        index: 5,
        name: "Edutech Life",
        image: Edutech,
    },
    {
        index: 6,
        name: "Techobytes",
        image: Techobyte,
    },
    {
        index: 7,
        name: "Robosapiens",
        image: Robosapiens,
    },
    {
        index: 8,
        name: "Wingfotech",
        image: Wingfotech,
    },
    {
        index: 9,
        name: "Orkes",
        image: Orkes,
    },
    {
        index: 10,
        name: "Jagran Josh",
        image: Jagran,
    },
    {
        index: 11,
        name: "UnStop",
        image: UnStop,
    },
    {
        index: 12,
        name: "SiliconIndia",
        image: SiliconIndia,
    },
    {
        index: 13,
        name: "Intel",
        image: Intel,
    },
    {
        index: 14,
        name: "Aviakul",
        image: Aviakul,
    },
    {
        index: 15,
        name: "Logiqids",
        image: Logiqids,
    },
    {
        index: 16,
        name: "FetchAI",
        image: Fetchai,
    },
    {
        index: 17,
        name: "Junglee Games",
        image: JungleeGames,
    },
    {
        index: 18,
        name: "Creya Learning",
        image: Creya,
    },
    {
        index: 19,
        name: "Medulance",
        image: Medulance,
    },
    {
        index: 20,
        name: "Kredent Infoedge",
        image: Kredent,
    },
    {
        index: 21,
        name: "PieMatrix",
        image: PieMatrix,
    },
    {
        index: 22,
        name: "Twoss",
        image: Twoss,
    },
]


function Sponsors() {
    return (
        <>
            <div className="sponsors">
                <div className="sponsors-head">SPONSORS</div>
                <div className="sponsors-body">
                {/* <a href="https://www.samsung.com/in/"> */}
                        <div className="sponsors-title-sponsor sponsors-shape-title">
                            <div className="sponsors-title-sponsor-subcontainer sponsors-shape-title">
                                <div className="sponsors-title-sponsor-img-div">
                                    <img src={Samsung} alt="Samsung" className='sponsors-title-sponsor-img' />
                                </div>
                                <div className="sponsors-title-sponsor-text">Samsung</div>
                            </div>
                        </div>
                    {/* </a> */}
                    {/* <div className="sponsors-other-sponsors-type">WORKSHOP PARTNER</div> */}
                    <div className='sponsors-other-sponsors'>
                        {sponsors.map(sponsor => (
                            <div key={sponsor.index} className="sponsors-other-sponsors-container" id={`sponsor${sponsor.index}`}>
                                <div className="sponsors-other-sponsors-head">{sponsor.header}</div>
                                <a href={sponsor.instagram}>
                                    <div className="sponsors-other-sponsors-box-container sponsors-shape">
                                        <div className="sponsors-other-sponsors-box sponsors-shape">
                                            <div className="sponsors-other-sponsors-box-img-div">
                                                <img src={sponsor.image} alt={sponsor.name} className="sponsors-other-sponsors-box-img" />
                                            </div>
                                            <div className="sponsors-other-sponsors-box-text">{sponsor.name}</div>
                                        </div>
                                    </div>
                                </a>
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