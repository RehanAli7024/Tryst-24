import { useState } from 'react';
import RadioButtons from './field-types/RadioButtons';
import TextField from './field-types/Textfield';
import "./addNewField.css"

export default function AddNewField({ onClose, callbackpayload, dataToEdit }) {

    const [fieldType, setFieldType] = useState('text');
    const [isMandatory, setIsMandatory] = useState(true);
    if (dataToEdit) {
        setIsMandatory(dataToEdit.isMandatory);
    }
    const handleAddFieldPopupClose = () => {
        onClose();
    };
    const editFileType = (value) => {
        setFieldType(value);
    };
    const handleMandatoryChange = (value) => {
        setIsMandatory(value === 'yes');
    };
    const callback = (payload) => {
        callbackpayload({ ...payload, isMandatory: isMandatory });
    };

    return (
        <div className='popup-container'>
            <div className='addfield-container'>
                <button className='btn-close' onClick={handleAddFieldPopupClose}>X</button>
                <h3>ADD NEW FIELD</h3>
                <div className='new-field-container'>
                    <form>
                        <div className='mandatory-field'>
                            <p>MANDATORY: </p>
                            <div className='mandatory'>
                                <input
                                    type="radio"
                                    id="yes"
                                    name="mandatory"
                                    value="yes"
                                    checked={isMandatory}
                                    onChange={() => handleMandatoryChange('yes')}
                                    required
                                />
                                <label htmlFor="yes">Yes</label><br />
                            </div>
                            <div className='mandatory'>
                                <input
                                    type="radio"
                                    id="no"
                                    name="mandatory"
                                    value="no"
                                    checked={!isMandatory}
                                    onChange={() => handleMandatoryChange('no')}
                                    required
                                />
                                <label htmlFor="no">No</label><br />
                            </div>
                        </div>

                        <div className="input-field-type">
                            <p>FIELD TYPE: </p>
                            <select onChange={(e) => editFileType(e.target.value)}>
                                <option value="text">Text</option>
                                <option value="radio">Radio Button</option>
                                <option value="checkbox">Checkbox</option>
                                <option value="upload">File Upload</option>
                                <option value="team">Team Member</option>
                            </select>
                        </div>
                        <div>
                            {(fieldType === "radio" || fieldType === "checkbox") && <RadioButtons callback={callback} onClose={onClose} fieldtype={fieldType} />}
                            {(fieldType === "upload" || fieldType === "text" || fieldType === "team") && <TextField callback={callback} onClose={onClose} fieldtype={fieldType} />}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
