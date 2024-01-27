import React from 'react';
import styled from 'styled-components';

export default function AddedFieldText({ additionalFieldData, onChange, onDelete }) {
  return (
    <Container>
      <p>{additionalFieldData.fieldTitle}</p>
      <div className="added-field-text-input">
        <input
          type="text"
          name={additionalFieldData.fieldTitle}
          value={additionalFieldData.fetchedData}
          onChange={(e) => onChange(e.target.value)}
        />
        <button className="delete" onClick={onDelete}>
          Delete
        </button>
      </div>
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
  .added-field-text-input {
    display: flex;
    align-items: center;
    gap: 1vh;
    input {
      flex: 1;
      margin-right: 1vh;
      padding: 0.5vh;
    }
    button {
      background-color: #ff5c5c; /* Set the desired background color */
      color: #fff;
      border: none;
      padding: 0.5vh 1vh;
      cursor: pointer;
    }
  }
`;
