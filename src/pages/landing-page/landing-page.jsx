import "./landing-page.css";
import Events from "./components/landing-events";
import Speakers from "./components/landing-speakers";
import Sponsors from "./components/landing-sponsors";
import SplineDesign from "./spline";

const LandingPage = () => {
    const sendMessageToIframe = (data) => {
        const iframe = document.getElementById("childFrame");
        console.log("sending.msg", data);
    
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(data, "*");
          console.log("data.is sended to iframe");
        } else {
          console.error("Iframe not found or not loaded");
        }
    };
    const handleIframeload = () => {
        const localstorage = JSON.stringify(localStorage);
        sendMessageToIframe(localstorage);
    };

    return (
        <>
            <div className="landing-page-spline">
                <SplineDesign />
            </div>
            <Events />
            <Speakers />
            <Sponsors />
            <iframe src="https://vecros-tryst-3d.vecros.com/" className="iframe_box" frameborder="0" onLoad={handleIframeload} id="childFrame" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"/>
            {/* <iframe src="http://192.168.31.87:3000/" className="iframe_box" frameborder="0" onLoad={handleIframeload} id="childFrame" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"/> */}
        </>
    )
};

export default LandingPage;