import React, { useState } from "react";
import './Login.css'
import eventimage from '../assets/event 1.png' 
import trystlogo from '../assets/trystlogo.png'
import loginlogo from '../assets/login.png'

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    console.log('ID:', userId);
    console.log('Password:', password);
    // Add logic for handling login, e.g., making an API request
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