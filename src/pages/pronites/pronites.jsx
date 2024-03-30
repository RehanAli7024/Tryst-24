import "./pronites.css";
import Meetup1 from "../../assets/meetup1.webp";
import { useEffect, useState } from "react";
import { DOMAIN } from "../../domain";
import axios from "../../axios";

const Pronites = () => {
    const [available, setAvailable] = useState(false);
    const [slots, setSlots] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [inSlot, setInSlot] = useState(false);
    const [signedUp, setSignedUp] = useState(true);
    const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
    };
    useEffect(() => {
        const user = localStorage.getItem("user");
        const parsed_user = JSON.parse(user);
        if (localStorage.getItem("access_token")) {
            const postData = {
                password: "u2beC2lMnr51y64rKpZIGkXf9EoEdyc5XBNAObs5Ur5tPaOG7TsJqwZCtknRIHHqNczIAKDKJpKuCSMyqlIWbx6dDVRg9d3yASTEU4uLcunbzrDutpq0AEdDwR1dMNqguI5cyUza6WqskGcH7SM17h7TmIx5NcgZrjIPerUaYeKJlIBmVytRsVQmDn6nxkZsa046RkziTzHXcqMNS7xSILMoDc7b9G285zvjP7byytG2y1cVN1FVszx6DBjlT024CTlyCpWD6ew4bNBjghtpgQNbR3YGxg8ehJ7cLS3TtBzTQGr8z0hvi6DhkZTaeKK2TIh6ovAGQlUddcMxRTgILOwN2mw3aKTPTU1RkjybQ5LEWrYZknj1Vicb0AeO3RTRMF6xNsEEYLT9Kkg7lBcmL7QF4VgWif3KyO1y9ntK77dOaT634TEgIbU52LVqABJxlxVWsoyct1rGnOUSBPYCRAoj8wj3un09EKCuDz6Hl8Iv8wPs9S4k",
                emails: [
                    parsed_user.email_id
                ],
                numbers: [
                    parsed_user.phone_number
                ]
            };
            axios.post('https://sapi.slickapp.co/app/Ijx16k0fzCmPKzFEuaj5pepfClOpogLP9eZXJrRzleymjZ2MYVzPQfnwjaf7QZ4z9LLk3cmPFryJxvrAvRgDcCHaU35PpOLQs9yMl44PPCUQ5Cy6UvdqWNMNyHVj5RqnvOGl6EU1xBlNBdOuEojwmNTZrMkbzEi6UsPOnBq3YatzwtdMkLZto88GqP9D5P444lpZAP25/r1/1', postData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    console.log(response.data);
                    if (response.data.email_resp === true || response.data.number_resp === true) {
                        setSignedUp(true);
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
    }, []);
    const checkSlots = async (DOMAIN, proniteID, headers) => {
        try {
            const url = `${DOMAIN}slot/?proniteID=${proniteID}`;
            const response = await axios.get(url, { headers });
            console.log(response.data);
            setSlots(response.data);
            setAvailable(true);
        } catch (err) {
            console.error(err);
        }
    };

    const bookSlot = async (slot) => {
        checkSlots(DOMAIN, slot, headers);
        if (!available) {
            alert("No Slot is available currently!");
            return;
        }
        axios.post(`${DOMAIN}pass/${slot}/`, { slot }, { headers })
            .then((res) => {
                console.log(res.data);
                alert("Pass booked successfully");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                if (err.response.status === 403) {
                    alert(err.response.data.error);
                } else {
                    alert("Slot booking failed!, please try again later");
                }
                window.location.reload();
            });
    };

    useEffect(() => {
        checkSlots(DOMAIN, 2, headers);
    }, []);

    useEffect(() => {
        console.log(slots);
        if (slots[0]) {
            console.log(slots[0].id);
        }
    }, [slots]);
    useEffect(() => {
        console.log(signedUp);
    }, [signedUp]);
    return (
        <div>
            {signedUp ? (
                <div>
                    <div className="pronite-container">
                        <div className="pronite-card">
                            <img className="pronite1-image" src={Meetup1} alt="pronite card" />
                            <div className="pronite-name">
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
                                <button className="action-btn" onClick={() => bookSlot(slots[0].id)}><i className="fas fa-download mr-2 fa-xs"></i>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    Hello everyone
                </div>
            )}
        </div>
    );
};

export default Pronites;
