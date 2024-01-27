

import "./Navbar.css";
import trystlogo from "../../assets/Navbar/TrystLogo.png";
import Tryst24 from "../../assets/Navbar/TRYST.png";
import profileicon from "../../assets/Navbar/IconButton.png";
import navbarmenu from "../../assets/Navbar/navbarmenu.png";
import crossmenu from '../../assets/Navbar/crossmenu.png';
import { useState } from "react";
import styled from "styled-components";
function Navbar() {

  const [showNavOptions, setShowNavOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("About"); // Default selected option

  const handleShowNavbar = () => {
    setShowNavOptions(!showNavOptions);
  };

  const handleNavbarOptionClick = (option) => {
    setSelectedOption(option);
    // You can add any other logic here if needed
  };
  return (
    <Container>
      <div className="navbarheader">
        <div className="navbartrystlogo">
          <img className="trystlogoimg" src={trystlogo}></img>
          <img className="tryst2024img" src={Tryst24}></img>
        </div>
        <div className="navbaricons">
        {["About", "Guests", "Pronites", "Events", "Sponsors", "Contact Us"].map((option) => (
          <div
            key={option}
            className={`navbaroption ${selectedOption === option ? "navbaroption-selected" : ""}`}
            onClick={() => handleNavbarOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
        <div className="navbarprofile">
          <img src={profileicon}></img>
        </div>
        <button className="navbarmenu" onClick={handleShowNavbar}>

          <img src={showNavOptions ? crossmenu : navbarmenu}></img>
        </button>
      </div>
      <div className={showNavOptions ? 'navbariconsmobile' : 'hiddenmobiletoggle'}>
        {["About", "Guests", "Pronites", "Events", "Sponsors", "Contact Us"].map((option) => (
          <div
            key={option}
            className={`navbaroption ${selectedOption === option ? "navbaroption-selected" : ""}`}
            onClick={() => {
              handleNavbarOptionClick(option);
              handleShowNavbar(); 
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </Container>
  );
}
export default Navbar;


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
