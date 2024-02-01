import "./pronites.css";
import Meetup1 from "../../assets/meetup1.webp";
import RegisterButton from "../../assets/register.png";

const Pronites = () => {
  return (
    <div>
        <div className="pronites-heading">
            PRONITES
        </div>
        <div className="pronite-container">
            <div className="pronite-card">
                <img className="pronite1-image" src = {Meetup1} alt="pronite card"/> 
                <div className="pronite-name">
                    Prateek
                </div>
            </div>
            <div className="pronite-details">
                <div className="pronite-number">
                    Pronite 1
                </div>
                <div className="pronite-date">
                    5th March 2024
                </div>
                <div className="pronite-event-details">
                Get ready for an unforgettable evening as Bollywood stars Shahid Kapoor and Kriti Sanon grace the stage at Tryst'24, IIT Delhi! This is your chance to witness the magic of their performances and make memories that will last a lifetime. Don't miss out on this star-studded event – register for passes now and secure your spot for a fun-filled night of entertainment and glamour at IIT Delhi's Tryst!</div>
                <div className="pronite-register-button">
                    <button className="action-btn" ><i className="fas fa-download mr-2 fa-xs"></i>Register</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Pronites;
