import "./dashboard.css";
import photo from "../Events/poster.webp";
import react, { useState } from "react";
import edit_button from "./btn.png";

import UserCard from "../../components/userCard/UserCard_Registration"

const Dashboard = () => {


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
          <div className="profile_details">Rajarshee</div>
        </div>

        <div className="dashboard-nav">
          <button className="dashboard-nav-button">REGISTERED EVENTS</button>
          <button className="dashboard-nav-button">PRONITES</button>
          <button className="dashboard-nav-button">YOUR ORDERS</button>
          <button className="dashboard-nav-button">ACCOMODATION</button>
        </div>
        <div className="dashboard-nav-details">
          <UserCard className="dashboard-nav-details-card" />
          <UserCard className="dashboard-nav-details-card" />
          <UserCard className="dashboard-nav-details-card" />
          <UserCard className="dashboard-nav-details-card" />
          <UserCard className="dashboard-nav-details-card" />
          <UserCard className="dashboard-nav-details-card" />
          <UserCard className="dashboard-nav-details-card" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
