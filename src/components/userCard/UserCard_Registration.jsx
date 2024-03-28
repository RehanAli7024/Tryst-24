import React from "react";
import userCardSvg from "../../assets/user-card.svg";
import { format } from "date-fns";
import location from '../../assets/Dashboard/location.svg';
import schedule from '../../assets/Dashboard/schedule.svg';
import calender from '../../assets/Dashboard/calender.svg';
import "./UserCard_Registration.css";

export default function UserCard_Registration({ props }) {
  function string_modifier(str){
    if(str == "IIT DELHI"){
      str =  "IIT-DELHI";
    }
    else{
      str = str.replace(", IIT-Delhi","")
    }
    if (str.length>=15){
      const str1 = str.slice(0,15)+"...";
      return str1;
    }
    return str;
  }

  return (
    <div className="user-card-container ">
      <img src={userCardSvg} alt="comps-pic" className="usercard-img" />

      <div className="user-card-content">
        <img src={props.image} alt="comps-pic" className="comps-pic-img" />
        <div className="user-card-text">
          <h2 className="user-card-title"> {props.name}</h2>
          <div className="user-card-details">
            <div className="user-card-label">
              <img src={calender} alt="calender" className="ucardsvg" />
              <p>{format(new Date(props.date), 'dd-MMM-yyyy')}</p>
            </div>
            <div className="user-card-label">
              <img src={schedule} alt="schedule" className="ucardsvg" />
              <p>{new Date(`1970-01-01T${props.time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <div className="user-card-label">
              <img src={location} alt="location" className="ucardsvg"/>
              <p> {string_modifier(props.venue)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
