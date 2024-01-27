import React, { useState } from 'react';
import styled from 'styled-components';

export default function AddedFieldRadio({ additionalFieldData, onChange, onDelete }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (option) => {
    onChange(option);
    setSelectedOption(option);
  };

  return (
    <Container>
      <p>{additionalFieldData.fieldTitle}</p>
      <div className="added-field-radio-btns">
        {additionalFieldData.fetchedData.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name={additionalFieldData.fieldTitle}
              value={option}
              checked={selectedOption === option}
              onChange={() => handleRadioChange(option)}
            />
            <label>{option.option}</label>
          </div>
        ))}
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
  .added-field-radio-btns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1vh;
    div {
      display: flex;
      align-items: center;
      gap: 1vh;
      input {
        margin-right: 1vh;
        height: 1rem;
        width: 1rem;
      }
      label {
        background-color: #293749;
        border: none;
        border-left: 1px solid #acebf6;
        padding: 1vh 1vh;
        width: 15rem;
        color: ${props => (selectedOption === option ? '#acebf6' : '#fff')};
      }
    }
  }

  .delete {
    background-color: #ff6961; /* Red color for delete button */
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 1vh;
  }
`;
