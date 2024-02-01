import React from "react";
import './UserProfile.css';
import UserImage from '../../assets/Dashboard/UserImage.png';
import logout from '../../assets/Dashboard/Logoutdb.png'
import UserCard_Registration from "../userCard/UserCard_Registration";
function UserProfile() {
    return (<div>
        <div className="profilecontainor ">
            <div className="dashboardheading pronites-heading my-10">Profile</div>
            <div className="dashboarduserdata  grid grid-cols-6 gap-4">
                <div className="col-span-6 md:col-span-2 flex justify-center items-center">
                    <img className="userimagedb" src={UserImage}></img>
                </div>
                <div className="col-span-6 md:col-span-4  Dashboarduserinfo">
                    <div className="Dashboardname flex flex-col md:flex-row justify-center items-center md:justify-around my-6">
                        <div className="namedb text-[1.5rem] md:text-[2rem]">Walter White</div>
                        <button className="action-btn" ><i className="fas fa-sign-out mr-2 fa-xs"></i>Log Out</button>
                    </div>
                    <div className="mx-10">
                        <div className="Dashboarduserrow">
                            <div className="dbques"> E-MAIL:</div>
                            <div className="dbans"> abcc@gmail.com</div>
                            <div className="dbques hidden md:block"> PHONE:</div>
                            <div className="dbans hidden md:block"> 1234567890</div>
                        </div>
                        <div className="Dashboarduserrow">
                            <div className="dbques"> UID:</div>
                            <div className="dbans"> abcdsed</div>
                        </div>
                        <div className="Dashboarduserrow flex flex-col md:flex-row">
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
                        </div></div >
                </div>
            </div>
        </div>
        <br></br>
        <div className="mx-20 mb-16"><UserCard_Registration /></div>
    </div>);
}
export default UserProfile;
