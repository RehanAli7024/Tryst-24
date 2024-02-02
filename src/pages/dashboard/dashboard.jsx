import "./dashboard.css";
import react, { useState } from "react";

import UserCard from "../../components/userCard/UserCard_Registration"

const Dashboard = () => {


  return (
    <>
      <div className="dashboard">
        <div className="profile_heading">
          PROFILE
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