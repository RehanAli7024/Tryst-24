import React from 'react';
import styled from 'styled-components';

export default function AddedFieldUpload({ additionalFieldData, onChange }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onChange(file);
  };

  return (
    <Container>
      <p>{additionalFieldData.fieldTitle}</p>
      <div className="added-field-upload-btns">
        <label htmlFor="file" className="custom-file-input-label">
          + Add File
        </label>
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          onChange={handleFileChange}
        />
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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1vh;
    label {
      background-color: #a6d3fd; /* Set the desired background color */
      color: #293749;
      border: none;
      padding: 2vh 2vh;
      cursor: pointer;
    }
    input {
      display: none; /* Hide the default file input */
    }
  }
`;
