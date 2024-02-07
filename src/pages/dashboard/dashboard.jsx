import "./dashboard.css";
import photo from "../Events/poster.webp";
import react, { useState } from "react";
import edit_button from "./btn.png";
import logoutbutton from "./Button.png";

import UserCard from "../../components/userCard/UserCard_Registration";

const Dashboard = () => {
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <div className="dashboard">
        <div className="profile_heading">PROFILE</div>
        <div className="profile_box">
          <div className="profile_photo">
            <img src={photo} alt="" className="userPhoto" />
            <button>
              <img src={edit_button} className="edit_photo" alt="" />
            </button>
          </div>
          <div className="profile_details">
            <div className="user_name_logout">
              <div className="user_name">Rajarshee</div>
              <button className="logout_btn" onClick={logout}>
                <img src={logoutbutton} alt="" />
              </button>
            </div>
            <div className="email_phone">
              <div className="email_label">E-MAIL:</div>
              <div className="user_email">rajarsheedas14@gmail.com</div>
              <div className="phone_label">PHONE:</div>
              <div className="user_email">9485074550</div>
            </div>
            <div className="user_ID">
              <div className="email_label">UID:</div>
              <div className="user_email">Raj8976</div>
            </div>
            <div className="college_details">
              <div className="email_label">college details :</div>
              <div className="actual_details">
                <div className="detail_info">
                  <div className="info_label">Name:</div>
                  <div className="info_data">IIT Delhi</div>
                </div>
                <div className="detail_info">
                  <div className="info_label">State:</div>
                  <div className="info_data">Delhi</div>
                </div>
                <div className="detail_info">
                  <div className="info_label">City:</div>
                  <div className="info_data">New Delhi</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-nav">
          <button className="dashboard-nav-button">REGISTERED EVENTS</button>
          <button className="dashboard-nav-button">PRONITES</button>
          <button className="dashboard-nav-button">YOUR ORDERS</button>
          <button className="dashboard-nav-button">ACCOMODATION</button>
        </div>
        {<div className="dashboard-nav-details">
          <div className="dashboardcardrow">
          <UserCard className="dashboard-nav-details-card" />
          <UserCard className="dashboard-nav-details-card" />
          </div>
          <div className="dashboardcardrow">
          <UserCard className="dashboard-nav-details-card" />
          <UserCard className="dashboard-nav-details-card" />
          </div>
          
        </div> }
      </div>
    </>
  );
};

export default Dashboard;
