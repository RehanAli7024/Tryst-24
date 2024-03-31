import "./dashboard.css";
import React, { useEffect, useState } from "react";
import edit_button from "./btn.png";
import logoutbutton from "./Button.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { DOMAIN } from "../../domain";
import userLoggedInNavigator from "../../pages/routes/userLoggedInNavigator";
import defaultdp from "./Assets_dashboard/defaultimage.jpg";
import logouthov from "../../assets/Dashboard/logouthover.svg";
import UserCard_Registration from "../../components/userCard/UserCard_Registration";
import PassPDF from "../pronites/passpdf2";
import { BlobProvider } from "@react-pdf/renderer";
import QRCode from "qrcode";

const Dashboard = () => {
  const navigate = useNavigate();
  React.useEffect(userLoggedInNavigator(useNavigate()));
  const [activeButton, setActiveButton] = useState("REGISTERED EVENTS");
  const [user, setUser] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    setIsClicked(!isClicked);
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`${DOMAIN}profile/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
        setPhoto(response.data.photo);
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        navigate("/login");
      });
  }, []);

  const [photo, setPhoto] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const editButtonRef = useRef(null);
  const photoexists = photo !== "";
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [pdfData, setPdfData] = useState(null);

  // Function to handle photo change
  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPhoto(e.target.result); // Assuming you want to store the image as base64
      };

      reader.readAsDataURL(e.target.files[0]);
      setIsEditing(false); // Close the file input after selecting the file
    }
  };

  // Function to open the file input dialog
  const openFileInput = () => {
    fileInputRef.current.click();
  };

  // Close the popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        fileInputRef.current &&
        !fileInputRef.current.contains(event.target) &&
        !editButtonRef.current.contains(event.target)
      ) {
        setIsEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [fileInputRef, editButtonRef]);
  useEffect(() => {
    axios
      .get(`${DOMAIN}registered/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        setRegisteredEvents(response.data.registered_events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${DOMAIN}profile/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [passDownloadStatus, setPassDownloadStatus] = useState(false);

  const handlepassdownload = () => {
    setPassDownloadStatus(true);
    axios
      .get(`${DOMAIN}pass/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(async (response) => {
        // Assuming response.data[0] contains the data you need
        // const passData = response.data[0];
        // how to convert string to int in js

        let pass_data;
        let pass_exists = false;
        for (let i = 0; i < response.data.length; i++) {
          if (parseInt(response.data[i].slotId) > 15) {
            pass_data = response.data[i];
            pass_exists = true;
            break;
          }
        }
        if (!pass_exists) {
          alert("You have not registered for Technite 2");
          return;
        }
        const qrCodeUrl = await generateQRCode(passData.code);
        const user = JSON.parse(localStorage.getItem("user"));
        // Prepare the data for the PassPDF component
        const downloadLinkData = {
          name: user.name,
          trystid: user.user_id,
          qrCodeUrl,
        };
        console.log(downloadLinkData);
        setPdfData(downloadLinkData);
        setPassDownloadStatus(false);
      })
      .catch((error) => {
        console.log(error);
        alert("You have not registered for Technite 2");
        setPassDownloadStatus(false);
      });
  };

  const generateQRCode = async (text) => {
    try {
      const qrUrl = await QRCode.toDataURL(text);
      return qrUrl;
    } catch (err) {
      console.error("Error generating QR code", err);
    }
  };
  return (
    <>
      <div className="dashboard">
        <div className="profile_heading">PROFILE</div>
        <div className="profile_box">
          {/* <div className="profile_photo">
            <img src={photo} alt="" className="userPhoto" />
            <button onClick={() => handlephotochange()}>
              <img src={edit_button} className="edit_photo" alt="" />
            </button>
          </div> */}
          {/* handle the photo change by the function and also using the input*/}
          {/* open the upload popup on clicking the edit button image and should get closed after cicking outside the popup or after submitting the photo */}

          <div className="profile_photo">
            <img
              src={photoexists ? photo : defaultdp}
              alt=""
              className="userPhoto"
            />
            {isEditing && (
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
            )}
            <button
              onClick={() => {
                setIsEditing(true);
                openFileInput();
              }}
              ref={editButtonRef}
            >
              <img src={edit_button} className="edit_photo" alt="" />
            </button>
          </div>

          <div className="profile_details">
            <div className="user_name_logout">
              <div className="user_name">{user.name}</div>
              <button
                className="logout_btn"
                onClick={logout}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: isHovered ? "scale(1)" : "scale(1)",
                  transformStyle: isHovered ? "preserve-3d" : "preserve-3d",
                  transition: isHovered ? "all 0.3s ease" : "all 0.3s ease",
                }}
              >
                <img src={isHovered ? logouthov : logoutbutton} alt="" />
              </button>
            </div>
            <div className="dashboard_details">
              <div className="dashboard_detail_group">
                <div className="dashboard_detail dashboard_detail_email">
                  <div className="user_label">E-MAIL:</div>
                  <div className="user_detail">{user.email_id}</div>
                </div>
                <div className="dashboard_detail dashboard_detail_email">
                  <div className="user_label">PHONE:</div>
                  <div className="user_detail">{user.phone_number}</div>
                </div>
              </div>
              <div className="dashboard_detail dashboard_detail_email">
                <div className="user_label">UID:</div>
                <div className="user_detail">{user.user_id}</div>
              </div>
            </div>
            <div className="dashboard_college_details">
              <div className="dashboard_college_details_heading">
                COLLEGE DETAILS :
              </div>
              <div className="dashboard_details">
                <div className="dashboard_detail">
                  <div className="user_label">Name:</div>
                  <div className="user_detail" id="college-name">
                    {user.college}
                  </div>
                </div>
                <div className="dashboard_detail">
                  <div className="user_label">State:</div>
                  <div className="user_detail">{user.state}</div>
                </div>
                <div className="dashboard_detail">
                  <div className="user_label">City:</div>
                  <div className="user_detail">{user.city}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-nav">
          <button
            className={`dashboard-nav-button ${
              activeButton === "REGISTERED EVENTS" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("REGISTERED EVENTS")}
          >
            REGISTERED EVENTS
          </button>
          <button
            className={`dashboard-nav-button ${
              activeButton === "TECHNITES" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("TECHNITES")}
          >
            TECHNITES
          </button>
          <button
            className={`dashboard-nav-button ${
              activeButton === "YOUR ORDERS" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("YOUR ORDERS")}
          >
            YOUR ORDERS
          </button>
          <button
            className={`dashboard-nav-button ${
              activeButton === "ACCOMODATION" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("ACCOMODATION")}
          >
            ACCOMODATION
          </button>
        </div>
      </div>
      <div className="dashboard-content">
        {activeButton === "REGISTERED EVENTS" && (
          <div>
            <div className="registered-events">
              {registeredEvents.map((event, index) => {
                return <UserCard_Registration key={index} props={event} />;
              })}
            </div>{" "}
          </div>
        )}
        {activeButton === "TECHNITES" && (
          <div>
            <button
              className="pass-download-button"
              onClick={handlepassdownload}
              disabled={passDownloadStatus}
            >
              Download Technite 2 Pass
            </button>
            {pdfData && (
              <BlobProvider document={<PassPDF {...pdfData} />}>
                {({ blob, url, loading, error }) => {
                  if (url) {
                    // Create a temporary link to trigger the download
                    const downloadLink = document.createElement("a");
                    downloadLink.href = url;
                    downloadLink.download = "Pass.pdf"; // The file name of the downloaded PDF
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                    URL.revokeObjectURL(url);
                    setPdfData(null); // Reset state to prevent repeated downloads
                  }
                  return null;
                }}
              </BlobProvider>
            )}
          </div>
        )}
        {activeButton === "YOUR ORDERS" && (
          <p
            style={{
              fontFamily: "Bender",
              fontSize: "1.5rem",
              textAlign: "center",
              color: "white",
              marginBottom: "2rem",
            }}
          >
            No Orders placed yet !
          </p>
        )}
        {activeButton === "ACCOMODATION" && (
          <p
            style={{
              fontFamily: "Bender",
              fontSize: "1.5rem",
              textAlign: "center",
              color: "white",
              marginBottom: "2rem",
            }}
          >
            No Accomodation request yet !
          </p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
