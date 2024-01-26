import React from 'react';
import styled from 'styled-components';

export default function AddedFieldCheckbox({ additionalFieldData, onChange }) {
  const handleCheckboxChange = (option, isChecked) => {
    const updatedOptions = additionalFieldData.fetchedData.map((o) =>
      o === option ? { option, isChecked } : o
    );

    onChange(updatedOptions);
  };

  return (
    <Container>
      <p>{additionalFieldData.fieldTitle}</p>
      <div className="added-field-checkbox-btn">
        {additionalFieldData.fetchedData.map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name={additionalFieldData.fieldTitle}
              checked={option.isChecked || false}
              onChange={(e) => handleCheckboxChange(option, e.target.checked)}
            />
            <label>{option.option}</label>
          </div>
        ))}
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
  .added-field-checkbox-btn {
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
      }
    }
  }
`;
