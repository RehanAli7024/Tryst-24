import "./landing-page.css";
import Events from "./components/landing-events";
import Speakers from "./components/landing-speakers";
import Sponsors from "./components/landing-sponsors";

import SplineDesign from "./spline";

const LandingPage = () => {

    return (
        <>
            <SplineDesign />
            <Events />
            <Speakers />
            <Sponsors />
        </>
    )
};

export default LandingPage;