import "./landing-page.css";
import Events from "./components/landing-events";
import Speakers from "./components/landing-speakers";
import Sponsors from "./components/landing-sponsors";

const LandingPage = () => {

    return (
        <>
            <Events />
            <Speakers />
            <Sponsors />
        </>
    )
};

export default LandingPage;