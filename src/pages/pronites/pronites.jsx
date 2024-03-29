import "./pronites.css";
import Meetup1 from "../../assets/meetup1.webp";
import { useState } from "react";
import { DOMAIN } from "../../domain";
import axios from "../../axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PassPDF from "./passpdf";

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
    };

    return (
        <div>
            <div className="pronites-heading">
                TECHNITES
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
                            Technite 1
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
                            <button className="action-btn" onClick={() => bookSlot(1)}><i className="fas fa-download mr-2 fa-xs register-button-icon"></i>Register</button>
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
                            Technite 2
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
                            <button className="action-btn" onClick={() => bookSlot(2)}><i className="fas fa-download mr-2 fa-xs register-button-icon"></i>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pronites;
