import { useState } from 'react';
import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';

export default function Checkbox({ callback, onClose, fieldtype }) {
  const [checkboxCount, setCheckboxCount] = useState(2);
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(Array(2).fill(''));

  const addNewRadioButton = (event) => {
    event.preventDefault();
    setCheckboxCount(prevCount => prevCount + 1);
  };

  const handleTextChange = (index, value) => {
    setOptions(prevOptions => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };

  const handleCallback = () => {
    const newData = {
      title,
      options: options.filter(option => option.trim() !== ''), // Filter out empty options
      type: fieldtype
    };
    callback(newData);
    if (onClose) onClose();
  };

  return (
    <Container>
      <div className="field-title">
        <p>FIELD TITLE: </p>
        <input
          type="text"
          placeholder='Text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="add-radio-btns">
        {[...Array(checkboxCount)].map((_, index) => (
          <div className="radio-btns" key={index}>
            <input type="checkbox" name="radioGroup" />
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              value={options[index]}
              onChange={(e) => handleTextChange(index, e.target.value)}
            />
            <br />
          </div>
        ))}
        <button onClick={addNewRadioButton}>
          <BiPlus /> Add New
        </button>
      </div>
      <div className='add-field-btn'>
        <button type="button" onClick={handleCallback}>Done</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .add-radio-btns {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .radio-btns {
      display: flex;
      flex-direction: row;
      align-items: center;
      input[type=radio] {
        height: 0.9rem;
        width: 0.9rem;
        margin-right: 0.5rem;
      }
      input[type=text] {
        display: flex;
        align-items: center;
        border: none;
        border-left: 1px solid #ACEBF6;
        background-color: #293749;
        color: #fff;
        padding: 0 1rem;
        height: 2rem;
        width: 50%;
      }
    }
  }
  .add-new-btn {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: #ACEBF6;
      border: none;
      cursor: pointer;
      width: 25%;
      margin-top: 1rem;
    }
  }
`;
