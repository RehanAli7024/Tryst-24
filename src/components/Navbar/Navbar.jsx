import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import trystlogo from "../../assets/Navbar/Navlogo.png";
import profileicon from "../../assets/Navbar/IconButton.png";
import navbarmenu from "../../assets/Navbar/navbarmenu.png";
import crossmenu from "../../assets/Navbar/crossmenu.png";
import NavEffect from "../../assets/Navbar/nav-mobile-effect.png";
import NavSelector from "../../assets/Navbar/selector.png";
import NavMobileBg from "../../assets/Navbar/Mobile Version_Nav Expanded.png";
import profilehov from "../../assets/Navbar/profilehov.svg";
import profileclicked from "../../assets/Navbar/profileClick.svg";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../axios";
import { DOMAIN } from "../../domain";

function Navbar() {
  const navigate = useNavigate();
  const [showNavOptions, setShowNavOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(undefined); // Default selected option
  const [selectedMobileOption, setSelectedMobileOption] =
    useState(selectedOption); // Mobile view selected option
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(true);
    setIsHovered(false);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

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
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showNavOptions, userProfile]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      axios
        .get(`${DOMAIN}profile/category/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUserProfile(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const options = [
    "About",
    "Guests",
    "Accomodation",
    "Events",
    "Sponsors",
    "Contact Us",
    "GameZone",
  ];

  if (userProfile && userProfile !== "general") {
    options.splice(3, 0, "Technites");
  }

  return (
    <Container
      className={`navbar ${isNavbarVisible ? "navbar-visible" : "navbar-hidden"
        }`}
    >
      <div
        className={showNavOptions ? "nav-mobile-bg" : "hidden-nav-mobile-bg"}
      >
        <img src={NavMobileBg} alt="" className="nav-effect-back" />
      </div>

      <div className="navbarheader">
        <div
          className="navbartrystlogo"
          onClick={() => handleNavbarOptionClick("")}
        >
          <img className="trystlogoimg" src={trystlogo}></img>
        </div>
        <div className="navbaroptions-container">
          <div className="navbaricons">
            <a
              className={`navbaroption ${selectedOption === "CAP" ? "navbaroption-selected" : ""
                }`}
              href="https://cap.tryst-iitd.org/"
              target="_blank"
              rel="noreferrer"
            >
              CAP
            </a>
            {
              options.map((option) => (
                <div
                  key={option}
                  className={`navbaroption ${selectedOption === option ? "navbaroption-selected" : ""
                    }`}
                  onClick={() => handleNavbarOptionClick(option)}
                >
                  {option}
                </div>
              ))
            }
          </div>
          <div
            className="navbarprofile"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
              transform: isHovered || isClicked ? "scale(1)" : "scale(1)",
              transformStyle:
                isHovered || isClicked ? "preserve-3d" : "preserve-3d",
              transition:
                isHovered || isClicked ? "all 0.3s ease" : "all 0.3s ease",
            }}
          >
            <Link to="/login">
              <img
                src={
                  isHovered
                    ? profilehov
                    : isClicked
                      ? profileclicked
                      : profileicon
                }
              ></img>
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
        {options.map(
          (option) =>
            option && (
              <div
                key={option}
                className={`navbaroption ${selectedMobileOption === option
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
            )
        )}
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
