import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import trystlogo from "../../assets/Navbar/TrystLogo.png";
import Tryst24 from "../../assets/Navbar/TRYST.png";
import profileicon from "../../assets/Navbar/IconButton.png";
import navbarmenu from "../../assets/Navbar/navbarmenu.png";
import crossmenu from "../../assets/Navbar/crossmenu.png";
import NavEffect from "../../assets/Navbar/nav-mobile-effect.png";
import NavSelector from "../../assets/Navbar/selector.png";
import NavMobileBg from "../../assets/Navbar/Mobile Version_Nav Expanded.png";
import { useEffect, useState } from "react";
import styled from "styled-components";
function Navbar() {
  const navigate = useNavigate();
  const [showNavOptions, setShowNavOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(undefined); // Default selected option
  const [selectedMobileOption, setSelectedMobileOption] =
    useState(selectedOption); // Mobile view selected option
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleShowNavbar = () => {
    setShowNavOptions(!showNavOptions);
  };

  const handleNavbarOptionClick = (option) => {
    setSelectedOption(option);
    navigate(`/${option}`);
    if (showNavOptions) {
      setSelectedMobileOption(option);
      handleShowNavbar();
    }
    // You can add any other logic here if needed
  };

  const handleScroll = () => {
    setIsNavbarVisible(window.scrollY < 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
  if (showNavOptions) {
    document.body.classList.add('no-scroll'); // Add class to disable scrolling
  } else {
    document.body.classList.remove('no-scroll'); // Remove class to enable scrolling
  }

  return () => {
    document.body.classList.remove('no-scroll'); // Clean up by removing the class when component unmounts
  };
}, [showNavOptions]);

  return (
    <Container
      className={`navbar ${
        isNavbarVisible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
        <div className={showNavOptions ? "nav-mobile-bg" : "hidden-nav-mobile-bg"}>
        <img src={NavMobileBg} alt="" className="nav-effect-back" />
      </div>

      <div className="navbarheader">
        <div
          className="navbartrystlogo"
          onClick={() => handleNavbarOptionClick("")}
        >
          <img className="trystlogoimg" src={trystlogo}></img>
          <img className="tryst2024img" src={Tryst24}></img>
        </div>
        <div className="navbaroptions-container">
          <div className="navbaricons">
            <a
              className={`navbaroption ${
                selectedOption === "CAP" ? "navbaroption-selected" : ""
              }`}
              href="https://cap.tryst-iitd.org/"
              target="_blank"
              rel="noreferrer"
            >
              CAP
            </a>
            {[
              "About",
              "Guests",
              "Pronites",
              "Events",
              "Sponsors",
              "Contact Us",
            ].map((option) => (
              <div
                key={option}
                className={`navbaroption ${
                  selectedOption === option ? "navbaroption-selected" : ""
                }`}
                onClick={() => handleNavbarOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="navbarprofile">
            <Link to="/login">
              <img src={profileicon}></img>
            </Link>
          </div>
          <button className="navbarmenu" onClick={handleShowNavbar}>
            <img src={showNavOptions ? crossmenu : navbarmenu}></img>
          </button>
        </div>
      </div>
      <div
        className={showNavOptions ? "navbariconsmobile" : "hiddenmobiletoggle"}
      >

        {[
          "About",
          "Guests",
          "Pronites",
          "Events",
          "Sponsors",
          "Contact Us",
        ].map((option) => (
          <div
            key={option}
            className={`navbaroption ${
              selectedMobileOption === option
                ? "navbaroption-selected-mobile"
                : ""
            }`}
            onClick={() => handleNavbarOptionClick(option)}
          >
            {selectedMobileOption === option && (
              <img src={NavSelector} alt="" className="nav-effect-front" />
            )}{" "}
            {/* Render NavEffect only if the option is selected */}
            {option}
            {selectedMobileOption === option && (
              <img src={NavEffect} alt="" />
            )}{" "}
            {/* Render NavEffect only if the option is selected */}
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
