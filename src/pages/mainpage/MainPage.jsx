import EventOptions from "./EventOptions";
import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import adminLoggedInNavigator from "../routes/adminLoggedInNavigator";

export default function MainPage() {
  React.useEffect(adminLoggedInNavigator(useNavigate()));
  return (
    <div className="events-admin">
      <Container>
        <EventOptions />
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            margin: "auto",
          }}
          onClick={() => {
            localStorage.removeItem("admin_access_token");
            localStorage.removeItem("admin_refresh_token");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding: 0 auto;
`;
