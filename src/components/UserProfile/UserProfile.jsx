import React, { useEffect } from "react";
import "./UserProfile.css";
import UserCard_Registration from "../userCard/UserCard_Registration";
import { DOMAIN } from "../../domain";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const loadUser = () => {
    setIsLoading(true);
    axios
      .get(`${DOMAIN}profile/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        setIsLoading(false);
        console.log(response);
        if (response.data.error) {
          alert("User not found");
          return;
        } else {
          setUser(response.data);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
        console.log(error);
      });
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    loadUser();
    console.log("User", user);
  }, [10]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="profilecontainor ">
            <div className="dashboardheading pronites-heading my-10">
              Profile
            </div>
            <div className="dashboarduserdata  grid grid-cols-6 gap-4">
              <div className="col-span-6 md:col-span-2 flex justify-center items-center">
                <img className="userimagedb" src={user.photo}></img>
              </div>
              <div className="col-span-6 md:col-span-4  Dashboarduserinfo">
                <div className="Dashboardname flex flex-col md:flex-row justify-center items-center md:justify-around my-6">
                  <div className="namedb text-[1.5rem] md:text-[2rem]">
                    {user.name}
                  </div>
                  <button className="action-btn" onClick={logout}>
                    <i className="fas fa-sign-out mr-2 fa-xs"></i>Log Out
                  </button>
                </div>
                <div className="mx-10">
                  <div className="Dashboarduserrow">
                    <div className="dbques"> E-MAIL:</div>
                    <div className="dbans"> {user.email_id}</div>
                    <div className="dbques hidden md:block"> PHONE:</div>
                    <div className="dbans hidden md:block">
                      {" "}
                      {user.phone_number}
                    </div>
                  </div>
                  <div className="Dashboarduserrow">
                    <div className="dbques"> UID:</div>
                    <div className="dbans"> {user.user_id}</div>
                  </div>
                  <div className="Dashboarduserrow flex flex-col md:flex-row">
                    <div className="dbques">COLLEGE DETAILS:</div>
                    <div className="Dashboardcollegedetails">
                      <div className="dbclgrow">
                        <div className="dbques">Name:</div>
                        <div className="dbans">{user.state}</div>
                      </div>
                      <div className="dbclgrow">
                        <div className="dbques">State:</div>
                        <div className="dbans">{user.city}</div>
                      </div>
                      <div className="dbclgrow">
                        <div className="dbques">City:</div>
                        <div className="dbans">{user.college}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="mx-20 mb-16">
            <UserCard_Registration />
          </div>
        </div>
      )}
    </div>
  );
}
export default UserProfile;
