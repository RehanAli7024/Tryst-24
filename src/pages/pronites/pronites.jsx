import "./pronites.css";
import Meetup1 from "../../assets/meetup1.webp";
import { useState } from "react";
import { DOMAIN } from "../../domain";
import axios from "../../axios";

const Pronites = () => {
    const [available, setAvailable] = useState(false);
    const [slots, setSlots] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [inSlot, setInSlot] = useState(false);
    const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
    };

    const proniteIDs = [1]
    const checkSlots = async () => {
        axios.get(`${DOMAIN}slot/`, { headers })
            .then((res) => {
                console.log(res.data);
                setSlots(res.data.slots);
                setAvailable(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const bookSlot = async (slot) => {
        axios.post(`${DOMAIN}pass/${proniteIDs}/`, { slot }, { headers })
            .then((res) => {
                console.log(res.data);
                alert("Slot booked successfully");
            })
            .catch((err) => {
                console.log(err);
                alert("Slot booking failed, try again later!");
            });
        // if (data.status === "success") {
        //     alert("Slot booked successfully");
        // } else {
        //     alert("Slot booking failed, try again later!");
        //     <div className="pronite-container">
        //         <div className="pronite-card">
        //             <img className="pronite1-image" src={Meetup1} alt="pronite card" />
        //             <div className="pronite-name">
        //             </div>
        //         </div>
        //         <div className="pronite-details">
        //             <div className="pronite-number">
        //                 Pronite 1
        //             </div>
        //             <div className="pronite-date">
        //                 1st February 2024
        //             </div>
        //             <div className="pronite-event-details">
        //                 Get ready for an unforgettable evening as Bollywood stars Shahid Kapoor and Kriti Sanon grace the stage at Tryst'24, IIT Delhi! This is your chance to witness the magic of their performances and make memories that will last a lifetime. Don't miss out on this star-studded event – register for passes now and secure your spot for a fun-filled night of entertainment and glamour at IIT Delhi's Tryst!</div>
        //             <div className="pronite-register-button">
        //                 <button className="action-btn" onClick={() => bookSlot(1)}><i className="fas fa-download mr-2 fa-xs"></i>Register</button>
        //             </div>
        //         </div>
        //     </div>
        // }
    };

    return (
        <div>
            <div className="pronites-heading">
                PRONITES
            </div>
            <div className="pronites">
                <div className="pronite-container">
                    <div className="pronite-card">
                        <div className="pronite-card-inner">
                            <div className="pronite-card-top">CINETECH</div>
                            <img className="pronite1-image" src={Meetup1} alt="pronite card" />
                            <div className="pronite-card-bottom">
                                SHAHID KAPOOR <br />
                                AND KRITI SANON
                            </div>
                        </div>
                    </div>
                    <div className="pronite-details">
                        <div className="pronite-number">
                            Pronite 1
                        </div>
                        <div className="pronite-date">
                            30th March 2024
                        </div>
                        <div className="pronite-event-details">
                            Are you ready for a night of endless laughter and entertainment? Tryst has in store renowned comedians Mr. Manik Mahna and Mr. Aashish Solanki, who are all set to take the stage and leave you in splits with their hilarious jokes and quick wit. <br />
                            To make this night unforgettable we have the ultimate star of ‘Tu Jhoothi, Main Makkaar’, Ms. Shraddha Kapoor! This night of glamour, entertainment, and excitement promises to be a once-in-a-lifetime experience that you don't want to miss.<br />
                            Get your passes now and immerse yourself in the excitement of seeing your favourite star up close and personal. It's the perfect chance to soak up the energy of the crowd and create indelible memories. See you there!
                        </div>
                        <div className="pronite-register-button">
                            <button className="action-btn" onClick={() => bookSlot(1)}><i className="fas fa-download mr-2 fa-xs"></i>Register</button>
                        </div>
                    </div>
                </div>
                <div className="pronite-container">
                    <div className="pronite-card">
                        <div className="pronite-card-inner">
                            <div className="pronite-card-top">CINETECH</div>
                            <img className="pronite1-image" src={Meetup1} alt="pronite card" />
                            <div className="pronite-card-bottom">
                                SHAHID KAPOOR <br />
                                AND KRITI SANON
                            </div>
                        </div>
                    </div>
                    <div className="pronite-details">
                        <div className="pronite-number">
                            Pronite 2
                        </div>
                        <div className="pronite-date">
                            31st March 2024
                        </div>
                        <div className="pronite-event-details">
                            Are you ready for a night of endless laughter and entertainment? Tryst has in store renowned comedians Mr. Manik Mahna and Mr. Aashish Solanki, who are all set to take the stage and leave you in splits with their hilarious jokes and quick wit. <br />
                            To make this night unforgettable we have the ultimate star of ‘Tu Jhoothi, Main Makkaar’, Ms. Shraddha Kapoor! This night of glamour, entertainment, and excitement promises to be a once-in-a-lifetime experience that you don't want to miss.<br />
                            Get your passes now and immerse yourself in the excitement of seeing your favourite star up close and personal. It's the perfect chance to soak up the energy of the crowd and create indelible memories. See you there!
                        </div>
                        <div className="pronite-register-button">
                            <button className="action-btn" onClick={() => bookSlot(1)}><i className="fas fa-download mr-2 fa-xs"></i>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pronites;
