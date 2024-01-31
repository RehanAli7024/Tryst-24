import { useState } from 'react';

export default function TextField({ callback, onClose, fieldtype, dataToEdit=null }) {
  const [title, setTitle] = useState(dataToEdit ? dataToEdit.title : '');

  const handleCallback = () => {
    const newRadioData = {
      title,
      type: fieldtype
    };
    callback(newRadioData);
    if (onClose) onClose();
  };

  return (
    <div className='textfield-container'>
      <div className="field-title">
        <p>FIELD TITLE: </p>
        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='add-field-btn'>
        <button type="button" onClick={handleCallback}>Done</button>
      </div>
    </div>
  );
}
