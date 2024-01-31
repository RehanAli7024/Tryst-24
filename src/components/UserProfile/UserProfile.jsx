import React from "react";
import './UserProfile.css';
import UserImage from '../../assets/Dashboard/UserImage.png';
import logout from '../../assets/Dashboard/Logoutdb.png'
function UserProfile(){
  return <div className="profilecontainor">
            <div className="dashboardheading">Profile</div>
            <div className="dashboarduserdata">
                <div >
                    <img className="userimagedb" src={UserImage}></img>
                </div>
                <div className="Dashboarduserinfo">
                        <div className="Dashboardname">
                            <div className="namedb">Walter White</div>
                            <button className="dblogout"><img src={logout}></img></button>
                        </div>
                        <div className="Dashboarduserrow">
                            <div className="dbques"> E-MAIL:</div>
                            <div className="dbans"> abcc@gmail.com</div>
                            <div className="dbques"> PHONE:</div>
                            <div className="dbans"> 1234567890</div>
                        </div>
                        <div className="Dashboarduserrow">
                        <div className="dbques"> UID:</div>
                        <div className="dbans"> abcdsed</div>
                        </div>
                        <div className="Dashboarduserrow">
                            <div className="dbques">
                                COLLEGE DETAILS:
                            </div>
                            <div className="Dashboardcollegedetails">
                               <div className="dbclgrow">
                                <div className="dbques">Name:</div>
                                <div className="dbans">Rehan Ali</div>
                               </div>
                               <div className="dbclgrow">
                               <div className="dbques">State:</div>
                                <div className="dbans">New Delhi</div>
                               </div>
                               <div className="dbclgrow">
                               <div className="dbques">City:</div>
                                <div className="dbans">New Delhi</div>
                               </div>
                            </div>
                        </div>
                </div>
            </div>
  </div>
}
export default UserProfile;
