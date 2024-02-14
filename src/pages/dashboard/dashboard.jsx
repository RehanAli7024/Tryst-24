import "./dashboard.css";
import React, { useEffect, useState } from "react";
import edit_button from "./btn.png";
import logoutbutton from "./Button.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DOMAIN } from "../../domain";
import userLoggedInNavigator from "../../pages/routes/userLoggedInNavigator";
import defaultdp from "./Assets_dashboard/defaultimage.jpg";
import logouthov from "../../assets/Dashboard/logouthover.svg";

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

  // const handlephotochange = () => {
  //   axios.post(`${DOMAIN}profile/`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  //     },
  //     data: {
  //       photo: photo,
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       alert("Photo changed");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  const [photo, setPhoto] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const editButtonRef = useRef(null);
  const photoexists = photo !== "";

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
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                  transformStyle: isHovered ? "preserve-3d" : "preserve-3d",
                  transition: isHovered ? "all 0.3s ease" : "all 0.3s ease",
                }}
              >
                <img src={isHovered ? logouthov : logoutbutton} alt="" />
              </button>
            </div>
            <div className="email_phone">
              <div className="email_label">E-MAIL:</div>
              <div className="user_email">{user.email_id}</div>
              <div className="phone_label">PHONE:</div>
              <div className="user_email">{user.phone_number}</div>
            </div>
            <div className="user_ID">
              <div className="email_label">UID:</div>
              <div className="user_email">{user.user_id}</div>
            </div>
            <div className="college_details">
              <div className="email_label">college details :</div>
              <div className="actual_details">
                <div className="detail_info">
                  <div className="info_label">Name:</div>
                  <div className="info_data">{user.college}</div>
                </div>
                <div className="detail_info">
                  <div className="info_label">State:</div>
                  <div className="info_data">{user.state}</div>
                </div>
                <div className="detail_info">
                  <div className="info_label">City:</div>
                  <div className="info_data">{user.city}</div>
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
              activeButton === "PRONITES" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("PRONITES")}
          >
            PRONITES
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
    </>
  );
};

export default Dashboard;
