import { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import '../addNewField.css';

export default function RadioButtons({ callback, onClose, fieldtype, dataToEdit = null }) {
  const [radioCount, setRadioCount] = useState(dataToEdit && dataToEdit.options ? dataToEdit.options.length : 2);
  const [title, setTitle] = useState(dataToEdit ? dataToEdit.title : '');
  const [options, setOptions] = useState(dataToEdit && dataToEdit.options ? dataToEdit.options : ['', '']);

  const addNewRadioButton = (event) => {
    event.preventDefault();
    setRadioCount(prevCount => prevCount + 1);
  };

  const deleteRadioButton = (index) => {
    setOptions(prevOptions => {
      const newOptions = [...prevOptions];
      newOptions.splice(index, 1);
      return newOptions;
    });
  };

  useEffect(() => {
    // prevent Default behaviour
    event.preventDefault();
    console.log(options);
    setRadioCount(options.length);
  }, [options]);

  const handleTextChange = (index, value) => {
    setOptions(prevOptions => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };

  const handleCallback = () => {
    const newRadioData = {
      title: title,
      options: options.filter(option => option.trim() !== ''), // Filter out empty options
      type: fieldtype
    };
    callback(newRadioData);
    if (onClose) onClose();
  };

  return (
    <div className='radio-container'>
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
        {[...Array(radioCount)].map((_, index) => (
          <div className="radio-btns" key={index}>
            <input type="radio" name="radioGroup" />
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              value={options[index]}
              onChange={(e) => handleTextChange(index, e.target.value)}
            />
            <button className="delete" onClick={() => deleteRadioButton(index)}> <i className="fa fa-trash"></i> </button>
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
    </div>
  );
}