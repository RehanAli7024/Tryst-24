import './sponsors.css';
import Navbar from '../../components/Navbar';
import Adobe from "../../assets/sponsors/adobe.webp";
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


const sponsors = [
    {
        index: 1,
        name: "TechMaghi",
        image: TechMaghi,
        // header: "WORKSHOP PARTNER",
    },
    {
        index: 2,
        name: "Remarkskill",
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
]


function Sponsors() {
    return (
        <>
            <div className="sponsors">
                <div className="sponsors-head">SPONSORS</div>
                <div className="sponsors-body">
                    <div className="sponsors-major-sponsor sponsors-shape-title">
                        <div className="sponsors-major-sponsor-subcontainer sponsors-shape-title">
                            <div className="sponsors-major-sponsor-img-div">
                                <img src={Adobe} alt="Adobe Inc." className='sponsors-major-sponsor-img' />
                            </div>
                            <div className="sponsors-major-sponsor-text">Adobe Inc.</div></div>
                    </div>
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
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Sponsors;