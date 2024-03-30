import "./steps.css";
import Step1 from "../../assets/Technites/step1.webp";
import Step2 from "../../assets/Technites/step2.webp";
import Step3 from "../../assets/Technites/step3.webp";
import Step4 from "../../assets/Technites/step4.webp";
import Step5 from "../../assets/Technites/step5.webp";
import Step6 from "../../assets/Technites/step6.webp";
import Step7 from "../../assets/Technites/step7.webp";
import Step8 from "../../assets/Technites/step8.webp";
import Step9 from "../../assets/Technites/step9.webp";
import Step10 from "../../assets/Technites/step10.webp";
import Step11 from "../../assets/Technites/step11.webp";
import Step12 from "../../assets/Technites/step12.webp";
import Step13 from "../../assets/Technites/step13.webp";
import Step14 from "../../assets/Technites/step14.webp";
import Step15 from "../../assets/Technites/step15.webp";

const Steps = () => {
    return (
        <div className="steps-container">
            <div className="steps-heading">
                Steps to Book Passes
            </div>
            <div className="steps-heading2">
                Make sure to login with the same mail on both Slick app and Tryst'24 website.
            </div>
            <div className="steps-card">
                <div className="step-head">
                    <span className="step-number">Step 1</span> : Download and install Slick app.
                </div>
                <div className="step-images-outer">
                    <div className="step-images">
                        <img src={Step1} className="step-image" />
                        <img src={Step2} className="step-image" />
                    </div>
                </div>
            </div>
            <div className="steps-card">
                <div className="step-head">
                    <span className="step-number">Step 2</span> : Sign in/Login into the app.
                </div>
                <div className="step-images-outer">
                    <div className="step-images">
                        <img src={Step3} className="step-image" />
                        <img src={Step4} className="step-image" />
                        <img src={Step5} className="step-image" />
                        <img src={Step6} className="step-image" />
                    </div>
                </div>
            </div>
            <div className="steps-card">
                <div className="step-head">
                    <span className="step-number">Step 3</span> : Choose IITD from the college section.
                </div>
                <div className="step-images-outer">
                    <div className="step-images">
                        <img src={Step7} className="step-image" />
                        <img src={Step8} className="step-image" />
                        <img src={Step9} className="step-image" />
                        <img src={Step10} className="step-image" />
                        <img src={Step11} className="step-image" />
                    </div>
                </div>
            </div>
            <div className="steps-card">
                <div className="step-head">
                    <span className="step-number">Step 4</span> : Verify your account using <span className="steps-underline">Kerberos mail (IITD)</span>.
                </div>
                <div className="step-images-outer">
                    <div className="step-images">
                        <img src={Step12} className="step-image" />
                        <img src={Step13} className="step-image" />
                        <img src={Step14} className="step-image" />
                        <img src={Step15} className="step-image" />
                    </div>
                </div>
            </div>
            <div className="steps-card">
                <div className="step-head">
                    <span className="step-number">Step 5</span> : Login to Tryst'24 website using Kerberos mail (IITD).
                </div>
            </div>
            <div className="steps-card">
                <div className="step-head">
                    <span className="step-number">Step 6</span> : Book passes.
                </div>
            </div>
        </div>
    );
};

export default Steps;