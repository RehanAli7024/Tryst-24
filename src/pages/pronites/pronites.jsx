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
                Are you ready for a night of endless laughter and entertainment? Tryst has in store renowned comedians Mr. Manik Mahna and Mr. Aashish Solanki, who are all set to take the stage and leave you in splits with their hilarious jokes and quick wit. <br/>
                To make this night unforgettable we have the ultimate star of ‘Tu Jhoothi, Main Makkaar’, Ms. Shraddha Kapoor! This night of glamour, entertainment, and excitement promises to be a once-in-a-lifetime experience that you don't want to miss.<br/>
                Get your passes now and immerse yourself in the excitement of seeing your favourite star up close and personal. It's the perfect chance to soak up the energy of the crowd and create indelible memories. See you there!
                </div>
                <div className="pronite-register-button">
                    <img src={RegisterButton} alt="register" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Pronites;