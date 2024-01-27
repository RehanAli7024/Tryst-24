import { Link } from 'react-router-dom';
import "./Navbar.css";
import trystlogo from "../../assets/Navbar/TrystLogo.png";
import Tryst24 from "../../assets/Navbar/TRYST.png";
import profileicon from "../../assets/Navbar/IconButton.png";
import navbarmenu from "../../assets/Navbar/navbarmenu.png";
import crossmenu from '../../assets/Navbar/crossmenu.png';
import { useState } from "react";
function Navbar() {
  const [showNavOptions, setShowNavOPtions] = useState(false);
  const handleshownavbar = () => {
    setShowNavOPtions(!showNavOptions)
  }
  return (
    <div className="navbarcontainor">
      <div className="navbarheader">
        <div className="navbartrystlogo">
          <img className="trystlogoimg" src={trystlogo}></img>
          <img className="tryst2024img" src={Tryst24}></img>
        </div>
        <div className="navbaricons">
          <div className="navbaroption">About</div>
          <div className="navbaroption">Guests</div>
          <div className="navbaroption">Pronites</div>
          <div className="navbaroption">Events</div>
          <Link to="/sponsors" className="navbaroption">Sponsors</Link>
          <div className="navbaroption">Contact Us</div>
        </div>
        <div className="navbarprofile">
          <img src={profileicon}></img>
        </div>
        <button className="navbarmenu" onClick={handleshownavbar}>

          <img src={showNavOptions ? crossmenu : navbarmenu}></img>
        </button>
      </div>
      <div className={showNavOptions ? 'navbariconsmobile' : 'hiddenmobiletoggle'}>
        <div className="navbaroption">Home</div>
        <div className="navbaroption">About</div>
        <div className="navbaroption">Guests</div>
        <div className="navbaroption">Pronites</div>
        <div className="navbaroption">Events</div>
        <Link to="/sponsors" className="navbaroption">Sponsors</Link>
        <div className="navbaroption">Contact Us</div>
      </div>
    </div>
  );
}
export default Navbar;
