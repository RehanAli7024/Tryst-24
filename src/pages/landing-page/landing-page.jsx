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
        </>
    )
};

export default LandingPage;