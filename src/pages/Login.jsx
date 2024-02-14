import React, { useState } from "react";
import "./Login.css";
import eventimage from "../assets/event 1.png";
import trystlogo from "../assets/trystlogo.png";
import loginlogo from "../assets/login.png";
import axios from "axios";
import { DOMAIN } from "../domain";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "react-google-login";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    axios
      .post(`${DOMAIN}login/`, { username: userId, password: password })
      .then((res) => {
        console.log(res.data.tokens);
        localStorage.setItem("token", res.data.tokens.access);
        navigate("/admin/events");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      axios
        .post(`${DOMAIN}api/users/google/`, {
          token: tokenResponse.access_token,
        })
        .then((response) => {
          if (response.data.error) {
            alert("Google login is unsuccessful.");
            return;
          } else if (response.data.message === "Logged in") {
            localStorage.setItem("access_token", response.data.tokens.access);
            localStorage.setItem("refresh_token", response.data.tokens.refresh);
            navigate("/user/dashboard");
          } else if (response.data.message === "New User Created") {
            localStorage.setItem("response", JSON.stringify(response));
            navigate("/signup");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <div className="login">
      <div className="header">
        <img className="trystlogo" src={trystlogo} alt="Tryst Logo" />
      </div>
      <div className="containor">
        <div className="inputs">
          <div className="heading">ADMIN LOGIN</div>
          <div className="inputfields">
            <input
              className="inputfield"
              type="text"
              placeholder="ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="inputfields">
            <input
              className="inputfield"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="loginbutton">
            <img className="loginelement" src={loginlogo} alt="Login Logo" />
            <button className="loginelement" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
        <div className="eventimg">
          <img src={eventimage} alt="Event Image" />
        </div>
      </div>
      <div className="footer">©TRYST’24, IIT Delhi</div>
    </div>
  );
};


export default Login;
