import "./pronites.css";
import Meetup1 from "./pronite.jpg";
import Meetup2 from "./meetup2.png";
import { useEffect, useState } from "react";
import { DOMAIN } from "../../domain";
import axios from "../../axios";
import PassPDF from "./passpdf";
import QRCode from "qrcode";
import { pdf, BlobProvider } from "@react-pdf/renderer";
import Steps from "./steps";

const generateQRCode = async (text) => {
  try {
    const qrUrl = await QRCode.toDataURL(text);
    return qrUrl;
  } catch (err) {
    console.error(err);
    return "";
  }
};

const Pronites = () => {
  const [slots, setSlots] = useState([]);
  const [signedUp, setSignedUp] = useState(false);
  const [downloadLinkData, setDownloadLinkData] = useState(null);
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (downloadLinkData) {
      const documentElement = <PassPDF {...downloadLinkData} />;

      pdf(documentElement)
        .toBlob()
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "Pronite_day1.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        })
        .catch((err) => {
          console.error("Error generating PDF", err);
        });
    }
  }, [downloadLinkData]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    const parsed_user = JSON.parse(user);
    if (localStorage.getItem("access_token")) {
      const postData = {
        password:
          "u2beC2lMnr51y64rKpZIGkXf9EoEdyc5XBNAObs5Ur5tPaOG7TsJqwZCtknRIHHqNczIAKDKJpKuCSMyqlIWbx6dDVRg9d3yASTEU4uLcunbzrDutpq0AEdDwR1dMNqguI5cyUza6WqskGcH7SM17h7TmIx5NcgZrjIPerUaYeKJlIBmVytRsVQmDn6nxkZsa046RkziTzHXcqMNS7xSILMoDc7b9G285zvjP7byytG2y1cVN1FVszx6DBjlT024CTlyCpWD6ew4bNBjghtpgQNbR3YGxg8ehJ7cLS3TtBzTQGr8z0hvi6DhkZTaeKK2TIh6ovAGQlUddcMxRTgILOwN2mw3aKTPTU1RkjybQ5LEWrYZknj1Vicb0AeO3RTRMF6xNsEEYLT9Kkg7lBcmL7QF4VgWif3KyO1y9ntK77dOaT634TEgIbU52LVqABJxlxVWsoyct1rGnOUSBPYCRAoj8wj3un09EKCuDz6Hl8Iv8wPs9S4k",
        emails: [
          parsed_user.email_id,
          // parse the 9 characters from email from the start
          parsed_user.email_id.substring(0, 9) + "@iitd.ac.in",
        ],
        numbers: [parsed_user.phone_number],
      };
      axios
        .post(
          "https://sapi.slickapp.co/app/Ijx16k0fzCmPKzFEuaj5pepfClOpogLP9eZXJrRzleymjZ2MYVzPQfnwjaf7QZ4z9LLk3cmPFryJxvrAvRgDcCHaU35PpOLQs9yMl44PPCUQ5Cy6UvdqWNMNyHVj5RqnvOGl6EU1xBlNBdOuEojwmNTZrMkbzEi6UsPOnBq3YatzwtdMkLZto88GqP9D5P444lpZAP25/r1/1",
          postData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);

          if (
            response.data.email_resp[`${parsed_user.email_id}`] === true ||
            response.data.number_resp === true ||
            response.data.email_resp[
              `${parsed_user.email_id.substring(0, 9) + "@iitd.ac.in"}`
            ] === true
          ) {
            setSignedUp(true);
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  }, []);
  const checkSlots = async (DOMAIN, proniteID, headers) => {
    try {
      const url = `${DOMAIN}slot/?proniteID=${proniteID}`;
      const response = await axios.get(url, { headers });
      console.log(response.data);
      setSlots(response.data);
      if (response.data.length > 0) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const bookSlot = async (slot) => {
    try {
      const res = await axios.post(
        `${DOMAIN}pass/${slot}/`,
        { slot },
        { headers }
      );
      console.log(res.data);
      alert("Pass booked successfully");

      const qrUrl = await generateQRCode(res.data.passCode);
      const user = JSON.parse(localStorage.getItem("user"));

      setDownloadLinkData({
        name: user.name,
        trystid: user.user_id,
        qrCodeUrl: qrUrl,
      });
    } catch (err) {
      console.log(err);
      if (err.response && err.response.status === 403) {
        alert(err.response.data.error);
      } else {
        alert("Pass booking failed, please try again later");
      }
    }
  };

  useEffect(() => {
    checkSlots(DOMAIN, 2, headers);
  }, []);
  
  return (
    <>
      {signedUp ? (
        <div
          className="parent"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {downloadLinkData && (
            <BlobProvider document={<PassPDF {...downloadLinkData} />}>
              {({ blob, url, loading, error }) => {
                if (url && !pdfBlobUrl) {
                  setPdfBlobUrl(url); // This will trigger the effect to download the PDF
                }
                return null; // BlobProvider expects a render, return null since we don't need to render anything
              }}
            </BlobProvider>
          )}
          <div className="pronite-container">
            <div className="pronite-card">
              <div className="pronite-card-inner">
                <div className="pronite-card-top">SPECTAL</div>
                <img
                  className="pronite1-image"
                  src={Meetup1}
                  alt="pronite card"
                />
                <div className="pronite-card-bottom">SAMAY RAINA</div>
              </div>
            </div>
            <div className="pronite-details">
              <div className="pronite-number">Technite 1</div>
              <div className="pronite-date">30th March 2024</div>
              <div className="pronite-event-details">
                Get ready for a night of non-stop laughs and entertainment!
                Tryst presents the hilarious Mr. Samay Raina, geared up to crack
                you up with his witty jokes and lightning-fast humor. Don't miss
                out on this fantastic opportunity for an unforgettable evening
                packed with fun and excitement. Secure your passes now and join
                in the lively atmosphere for a night of laughter and memories
                that you won't soon forget!
              </div>
              <div className="pronite-register-button">
                <button
                  className="action-btn"
                  onClick={() => bookSlot(slots[0].id)}
                  disabled
                >
                  No slots available
                </button>
              </div>
            </div>
          </div>
          <div className="pronite-container">
            <div className="pronite-card">
              <div className="pronite-card-inner">
                <div className="pronite-card-top">SPECTAL</div>
                <img
                  className="pronite1-image"
                  src={Meetup2}
                  alt="pronite card"
                />
                <div className="pronite-card-bottom">Karan Kanchan</div>
              </div>
            </div>
            <div className="pronite-details">
              <div className="pronite-number">Technite 2</div>
              <div className="pronite-date">31st March 2024</div>
              <div className="pronite-event-details">
                Get ready to immerse yourself in an electrifying experience as
                the stage comes alive with the unparalleled energy of India's
                hip-hop sensation, Divine! Join us for an exhilarating concert
                where Divine will ignite the crowd with his infectious beats and
                electrifying performances. Hosted by Tryst, this event promises
                an unforgettable evening filled with pulsating rhythms and raw
                talent. Grab your tickets now and be part of a night that
                celebrates the essence of Indian music and culture. Don't miss
                out on this incredible opportunity to witness Divine in action
                and create memories that will last a lifetime!
              </div>
              <div className="pronite-register-button">
                <button
                  className="action-btn"
                  onClick={() => bookSlot(slots[0].id)}
                  disabled={!available}
                >
                  {available ? (
                    <>
                      <i className="fas fa-download mr-2 fa-xs"></i>Register
                    </>
                  ) : (
                    <>No slots available</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Steps />
      )}
    </>
  );
};

export default Pronites;
