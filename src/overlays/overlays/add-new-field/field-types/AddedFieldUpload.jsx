import React from 'react';
import styled from 'styled-components';

export default function AddedFieldUpload({ additionalFieldData, onChange, onDelete }) {
  return (
    <Container>
      <p>{additionalFieldData.fieldTitle}</p>
      <div className="added-field-upload-btns">
        <label htmlFor="file" className="custom-file-input-label">
          + Add File
        </label>
        <input type="file" name="file" id="file" className="inputfile" />
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
    margin: 0;
  }
  .added-field-upload-btns {
    display: flex;
    align-items: center;
    gap: 1vh;
    label {
      flex: 1;
      background-color: #a6d3fd; /* Set the desired background color */
      color: #293749;
      border: none;
      padding: 2vh 2vh;
      cursor: pointer;
    }
    input {
      display: none; /* Hide the default file input */
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
