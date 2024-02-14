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
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding: 0 auto;
`;
