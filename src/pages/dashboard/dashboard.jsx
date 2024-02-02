import "./dashboard.css";
import photo from "../Events/poster.webp";
import react, { useState } from "react";
import edit_button from "./btn.png";

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
      </div>
    </>
  );
};

export default Dashboard;
