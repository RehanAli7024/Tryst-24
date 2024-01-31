import { useState } from 'react';
import RadioButtons from './field-types/RadioButtons';
import TextField from './field-types/Textfield';
import "./addNewField.css"

export default function EditField({ onClose, callbackFormData, dataToEdit, indexToEdit, formData }) {

    const [fieldType, setFieldType] = useState(dataToEdit.type);
    const [isMandatory, setIsMandatory] = useState(dataToEdit.isMandatory);

    const handleEditFieldPopupClose = () => {
        onClose();
    };
    const editFileType = (value) => {
        setFieldType(value);
    };
    const handleMandatoryChange = (value) => {
        setIsMandatory(value === 'yes');
    };
    const callback = (payload) => {
        callbackFormData({
            ...formData, formFields: formData.formFields.map((field, index) => {
                if (index === indexToEdit) {
                    return { ...payload, isMandatory: isMandatory };
                }
                return field;
            })
        });
    };

    return (
        <div className='popup-container'>
            <div className='addfield-container'>
                <button className='btn-close' onClick={handleEditFieldPopupClose}>X</button>
                <h3>EDIT FIELD</h3>
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
                            <select onChange={(e) => editFileType(e.target.value)}
                                defaultValue={dataToEdit.type}>
                                <option value="text">Text</option>
                                <option value="radio">Radio Button</option>
                                <option value="checkbox">Checkbox</option>
                                <option value="upload">File Upload</option>
                                <option value="team">Team Member</option>
                            </select>
                        </div>
                        <div>
                            {(fieldType === "radio" || fieldType === "checkbox") && <RadioButtons callback={callback} onClose={onClose} dataToEdit={dataToEdit} fieldtype={fieldType} />}
                            {(fieldType === "upload" || fieldType === "text" || fieldType === "team") && <TextField callback={callback} onClose={onClose} dataToEdit={dataToEdit} fieldtype={fieldType} />}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
