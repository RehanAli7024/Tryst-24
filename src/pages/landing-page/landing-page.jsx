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
            {/* <iframe src="https://sketchfab.com/models/b04fc215a7fb441a98bc6271caa144eb/embed" className="iframe_box" frameborder="0"/> */}
        </>
    )
};

export default LandingPage;