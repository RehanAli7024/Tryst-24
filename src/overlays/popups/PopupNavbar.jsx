// Navbar.jsx
import React from "react";
import styled from "styled-components";

const PopupNavbar = ({ activeButton, setActiveButton, isEventSubmitted }) => {
  const handleRegistrationFormClick = () => {
    // Only set the active button if isEventSubmitted is true
    if (isEventSubmitted) {
      setActiveButton("registrationForm");
    }
  };

  return (
    <NavContainer>
      <NavItem
        onClick={() => setActiveButton("eventDetails")}
        className={activeButton === "eventDetails" ? "active" : ""}
      >
        Event Details
      </NavItem>
      <NavItem
        onClick={handleRegistrationFormClick}
        className={activeButton === "registrationForm" ? "active" : ""}
      >
        Registration Form
      </NavItem>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  background-color: #041429;
  padding: 10px;
`;

const NavItem = styled.div`
  margin-right: 20px;
  color: #fff;
  cursor: pointer;

  &.active {
    color: #acebf6;
    border-bottom: 2px solid #acebf6;
  }
`;

export default PopupNavbar;
