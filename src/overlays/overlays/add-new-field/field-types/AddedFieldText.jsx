import React from 'react';
import styled from 'styled-components';

export default function AddedFieldText({ additionalFieldData, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <p>{additionalFieldData.fieldTitle}</p>
      <input
        type="text"
        name={additionalFieldData.fieldTitle}
        placeholder={`Enter ${additionalFieldData.fieldTitle}`}
        onChange={handleInputChange}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 4vh;
  margin-bottom: 4vh;
  p {
    color: #acebf6;
    margin: 0 0 0.5rem 0;
  }
  input {
    width: 100%;
    padding: 1vh;
    color: #acebf6;
    outline: none;
    border: none;
    border-left: 2px solid #acebf6;
    background: rgba(255, 255, 255, 0.12);
    height: 5vh;
    color: white;
    font-size: 14px;
  }
`;

