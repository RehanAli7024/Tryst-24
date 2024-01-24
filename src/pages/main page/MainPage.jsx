import EventOptions from "./EventOptions";
import styled from "styled-components";

export default function MainPage() {
  return (
    <Container>
      <EventOptions />
    </Container>
  );
}

const Container = styled.div`
  background-color: #041429;
  padding: 0 10rem;
`;
