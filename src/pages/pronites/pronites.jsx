import "./pronites.css";
import Meetup1 from "../../assets/meetup1.webp";
import RegisterButton from "../../assets/register.png";
import { useEffect, useState } from "react";

const Pronites = () => {
  const [available, setAvailable] = useState(false);
  const [slots, setSlots] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const checkSlots = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/slot/");
    const data = await res.json();
    console.log(data);
    setSlots(data);
  };

  const checkToken = async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  };

  const bookSlot = async (slot) => {
    const res = await fetch(
      "http://" + process.env.REACT_APP_SERVER_IP + "/slot/book",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slot: slot }),
      }
    );
    const data = await res.json();
    console.log(data);

    if (data.status === "success") {
      alert("Slot booked successfully");
    } else {
      alert("Slot booking failed, try again later!");
    }
  };

  useEffect(() => {
    checkToken();
    checkSlots();
  }, []);
  return (
    <div>
        <div className="pronites-heading">
            PRONITES
        </div>
        <div className="pronite-container">
            <div className="pronite-card">
                <img className="pronite1-image" src = {Meetup1} alt="pronite card"/> 
                <div className="pronite-name">
                    {/* Prateek */}
                </div>
            </div>
            <div className="pronite-details">
                <div className="pronite-number">
                    Pronite 1
                </div>
                <div className="pronite-date">
                    1st February 2024
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
