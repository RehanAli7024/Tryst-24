import React from 'react'
import styled from 'styled-components';

export default function AddedFieldRadio({additionalFieldData}) {
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
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
    </Container>
  )
}


const Container = styled.div`
  padding: 0 4vh;
  margin-bottom: 4vh;
  p {
    color: #ACEBF6;
    margin: 0 0 0.5rem 0;
  }
  .added-field-radio-btns{
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
        border-left: 1px solid #ACEBF6;
        padding: 1vh 1vh;
        width: 15rem;
      }
    }
  }
`;