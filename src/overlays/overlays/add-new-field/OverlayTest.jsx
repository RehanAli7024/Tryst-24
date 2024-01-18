import { useState } from 'react';
import styled from 'styled-components';
import AddNewField from './AddNewField.jsx';

export default function Event() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

  return (
    <Container>
      <div>
      <button className='open-popup' onClick={togglePopup}>Click to open popup</button>
        {isOpen && <AddNewField handleClose={togglePopup} />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .open-popup {
    background-color: #acebf6;
    border: none;
    border-radius: 5px;
    color: #333;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;
    width: 100%;
  }
`;

const StyledModal = styled.div`
  position: relative;
  background-color: #fff; // Optional: Set modal background color
  padding: 20px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff; // Optional: Set close button color
`;