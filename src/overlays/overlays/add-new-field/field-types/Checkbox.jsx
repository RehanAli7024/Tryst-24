import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';

export default function RadioButtons({ onGetOptionsData }) {

  const [radioCount, setRadioCount] = useState(2);
  const [radioTextValues, setRadioTextValues] = useState(Array(2).fill(''));

  useEffect(() => {
    // Initialize radioTextValues when radioCount changes
    setRadioTextValues((prevValues) => [
      ...prevValues,
      ...Array(radioCount - prevValues.length).fill(''),
    ]);
  }, [radioCount]);

  const addNewRadioButton = (event) => {
    event.preventDefault();
    setRadioCount((prevCount) => prevCount + 1);
  };

  const handleTextChange = (index, value) => {
    setRadioTextValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  useEffect(() => {
    // Send data to parent when radioTextValues changes
    onGetOptionsData(radioTextValues);
  }, [onGetOptionsData, radioTextValues]);

  // const [radioCount, setRadioCount] = useState(2);

  // const addNewRadioButton = (event) => {
  //   event.preventDefault();
  //   setRadioCount((prevCount) => {
  //     onAddNewRadioButton(prevCount + 1);
  //     return prevCount + 1;
  //   });
  // };

  return (
    <Container>
      <div className="add-checkbox">
        {[...Array(radioCount)].map((_, index) => (
          <div className="checkbox" key={index}>
          <input
              type="checkbox"
              name="radioGroup"
            />
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              value={radioTextValues[index]}
              onChange={(e) => handleTextChange(index, e.target.value)}
            />
            <br />
          </div>
        ))}
      </div>
      <div className="add-new-btn">
        <button onClick={addNewRadioButton}>
          <BiPlus /> Add New
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .add-checkbox {
    display: flex;
        flex-direction: column;
        gap: 1rem;
    .checkbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        input[type=checkbox] {
            height: 1rem;
            width: 1rem;
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
