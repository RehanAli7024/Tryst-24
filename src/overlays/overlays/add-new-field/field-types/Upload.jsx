import  { useState } from 'react';
import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';

export default function Upload(onGetOptionsData) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Container>
      <div className="upload-container">
        <label htmlFor="file-input">
          <BiPlus /> Add File
        </label>
        <input id="file-input" type="file" onChange={handleFileChange} />
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .upload-container {
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: #acebf6 solid 1px;
    border-radius: 5px;
    background-color: #acebf6;
    color: #333;
    width: 30%;

    label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    input {
      display: none;
    }

    p {
      margin-top: 10px;
    }
  }
`;
