import React from "react";
import './Login.css'
import eventimage from '../assets/event 1.png' 
import trystlogo from '../assets/trystlogo.png'
import loginlogo from '../assets/login.png'
const Login =() => {
    return(
        <div className="login">
           <div className="header">
            <img className="trystlogo" src={trystlogo} />
           </div>
           <div className="containor">
           <div className="inputs">
           <div className="heading">
            ADMIN LOGIN
           </div>
           <div className="inputfields">
           <input className="inputfield" type="text" placeholder="ID"></input>
           </div>
            <div className="inputfields">
            <input className="inputfield" type = 'password' placeholder="Password"></input>
            </div>
            <div className="loginbutton">
                <img className="loginelement" src={loginlogo}/>
                <button className="loginelement">Login</button>
            </div>
           </div>
           <div className="eventimg">
            <img src={eventimage}/>
            </div>
           </div>
            <div className="footer">©TRYST’24, IIT Delhi</div>
        </div>
    )
}
export default Login