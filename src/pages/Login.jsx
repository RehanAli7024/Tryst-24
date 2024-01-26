import React, { useState } from "react";
import "./Login.css";
import eventimage from "../assets/event 1.png";
import trystlogo from "../assets/trystlogo.png";
import loginlogo from "../assets/login.png";
import axios from "axios";
import { DOMAIN } from "../domain";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    axios
      .post(`${DOMAIN}login/`, { username: userId, password: password })
      .then((res) => {
        console.log(res.data.tokens);
        localStorage.setItem("token", res.data.tokens.access);
        navigate("/mainpage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
