import "./landing-page.css";
import Events from "./components/landing-events";
import Speakers from "./components/landing-speakers";
import Sponsors from "./components/landing-sponsors";
import SplineDesign from "./spline";

const LandingPage = () => {
    
    return (
        <>
            <div className="landing-page-spline">
                <SplineDesign />
            </div>
            <Events />
            <Speakers />
            <Sponsors />
            <iframe src="https://tryst-iitd-twin.web.app/" className="iframe_box" frameborder="0"/>
        </>
    )
};

export default LandingPage;