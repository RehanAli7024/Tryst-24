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
        website: "https://www.nucleussoftware.com/"
    },
    {
        index: 2,
        name: "Teckmaghi",
        image: TechMaghi,
        website: "https://techmaghi.com/"
        // header: "WORKSHOP PARTNER",
    },
    {
        index: 3,
        name: "Remarkskill",
        image: RemarkSkill,
        website: "https://remarkskill.com/"
        // header: "ROBOWARS PARTNER",
    },
    {
        index: 4,
        name: "Robocap League",
        image: Robocap,
        website: "https://www.robocapleague.com/"
    },
    {
        index: 5,
        name: "Edutech Life",
        image: Edutech,
        website: "https://edutechlife.com/"
    },
    {
        index: 6,
        name: "Techobytes",
        image: Techobyte,
        website: "https://techobytes.com/"
    },
    {
        index: 7,
        name: "Robosapiens",
        image: Robosapiens,
        website: "https://www.robosapi.com/"
    },
    {
        index: 8,
        name: "Wingfotech",
        image: Wingfotech,
        website: "https://wingfo.tech/"
    },
    {
        index: 9,
        name: "Orkes",
        image: Orkes,
        website: "https://orkes.io/"
    },
    {
        index: 10,
        name: "Jagran Josh",
        image: Jagran,
        website: "https://www.jagranjosh.com/"
    },
    {
        index: 11,
        name: "UnStop",
        image: UnStop,
        website: "https://unstop.com/"
    },
    {
        index: 12,
        name: "SiliconIndia",
        image: SiliconIndia,
        website: "https://www.siliconindia.com/"
    },
    {
        index: 13,
        name: "Intel",
        image: Intel,
        website: "https://www.intel.com/content/www/us/en/stories/overview.html?cid=sem&source=sa360&campid=2024_ao_cbu_in_gmocoma_gmobasc_traf_text-link_brand_exact_cd_q1-in-brand_3500157760_google_brd_oos_mixed-pbm_intel&ad_group=brand_intel_b2b1-bp_exact&intel_term=intel&sa360id=43700079415627263&&&&&gad_source=1&gclsrc=ds"
    },
    {
        index: 14,
        name: "Aviakul",
        image: Aviakul,
        website: "https://www.aviakul.com/"
    },
    {
        index: 15,
        name: "Logiqids",
        image: Logiqids,
        website: "https://www.logiqids.com/"
    },
    {
        index: 16,
        name: "FetchAI",
        image: Fetchai,
        website: "https://fetch.ai/"
    },
    {
        index: 17,
        name: "Junglee Games",
        image: JungleeGames,
        website: "https://www.jungleegames.com/#"
    },
    {
        index: 18,
        name: "Creya Learning",
        image: Creya,
        website: "https://creyalearning.com/stemlearning/"
    },
    {
        index: 19,
        name: "Medulance",
        image: Medulance,
        website: "https://medulance.com/"
    },
    {
        index: 20,
        name: "Kredent Infoedge",
        image: Kredent,
        website: "https://kredent.com/"
    },
    {
        index: 21,
        name: "PieMatrix",
        image: PieMatrix,
        website: "https://thepiematrix.com/"
    },
    {
        index: 22,
        name: "Twoss",
        image: Twoss,
        website: "https://www.twoss.in/"
    },
]


function Sponsors() {
    return (
        <>
            <div className="sponsors">
                <div className="sponsors-head">SPONSORS</div>
                <div className="sponsors-body">
                    <a href="https://www.samsung.com/in/">
                        <div className="sponsors-title-sponsor sponsors-shape-title">
                            <div className="sponsors-title-sponsor-subcontainer sponsors-shape-title">
                                <div className="sponsors-title-sponsor-img-div">
                                    <img src={Samsung} alt="Samsung" className='sponsors-title-sponsor-img' />
                                </div>
                                <div className="sponsors-title-sponsor-text">Samsung</div>
                            </div>
                        </div>
                    </a>
                    {/* <div className="sponsors-other-sponsors-type">WORKSHOP PARTNER</div> */}
                    <div className='sponsors-other-sponsors'>
                        {sponsors.map(sponsor => (
                            <div key={sponsor.index} className="sponsors-other-sponsors-container" id={`sponsor${sponsor.index}`}>
                                <div className="sponsors-other-sponsors-head">{sponsor.header}</div>
                                <a href={sponsor.website}>
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