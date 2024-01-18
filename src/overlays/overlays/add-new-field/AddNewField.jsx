import  { useState } from 'react';
import styled from 'styled-components';
import RadioButtons from './field-types/RadioButtons';
import Checkbox from './field-types/Checkbox';
import Upload from './field-types/Upload';
import TeamMember from './field-types/TeamMember';
import "./addNewField.css"

export default function AddNewField({ handleClose }) {
    const [fieldType, setFieldType] = useState('text');
    const [isMandatory, setIsMandatory] = useState(true);
    const [fieldTitle, setFieldTitle] = useState('');
    const [fetchedData, setFetchedData] = useState([]);   

    const handleGetOptionsData = (data) => {
        setFetchedData(data);
      };

    const editFileType = (value) => {
        setFieldType(value);
    };

    const handleMandatoryChange = (value) => {
        setIsMandatory(value === 'yes');
    };

    const handleFieldTitleChange = (e) => {
        setFieldTitle(e.target.value);
    };

    const handleDoneButtonClick = () => {
        console.log("Input:", {
          fieldType,
          isMandatory,
          fieldTitle,
        //   radioTextValues: currentRadioTextValues,
        //   TeamMembers: teamMembers,
            fetchedData: fetchedData,
        });
      };
    

    return (
        <div className='popup-container'>
        <Container>
            <button className='btn-close' onClick={handleClose}>X</button>
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
                        {
                            fieldType === "team" && <TeamMember onGetOptionsData={handleGetOptionsData} />
                        }
                    </div>

                    <div className="field-title">
                        <p>FIELD TITLE: </p>
                        <input
                            type="text"
                            placeholder='Text'
                            value={fieldTitle}
                            onChange={handleFieldTitleChange}
                        />
                    </div>

                    <div>
                        {
                            fieldType === "radio" && <RadioButtons onGetOptionsData={handleGetOptionsData} />
                        }
                        {
                            fieldType === "checkbox" && <Checkbox onGetOptionsData={handleGetOptionsData} />
                        }
                        {
                            fieldType === "upload" && <Upload onGetOptionsData={handleGetOptionsData} />
                        }
                    </div>

                </form>
            </div>
            <div className='add-field-btn'>
                <button type="button" onClick={handleDoneButtonClick}>Done</button>
            </div>
        </Container>
        </div>
    );
}

const Container = styled.div`
    position: relative;
    margin: 100px auto;
    background-color: #041429;
    color: #fff;
    padding: 1rem;
    border: #ACEBF6 solid 1px;
    width: 30%;
    .btn-close {
        color: #ACEBF6;
        cursor: pointer;
        position: fixed;
        right: calc(50% - 240px);
        top: 110px;
        border: none;
        outline: none;
        background-color: transparent;
    }
    h3 {
        color: #ACEBF6;
    }
    .new-field-container {
        display: flex;
        flex-direction: column;
        .mandatory-field {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            .mandatory {
                display: flex;
                flex-direction: row;
                label {
                display: flex;
                align-items: center;
            }
            }
        }
        .input-field-type {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            align-items: center;
            select {
                border: none;
                border-left: 1px solid #ACEBF6;
                background-color: #293749;
                color: #fff;
                padding: 0 1rem;
                height: 2rem;
                width: 50%;
                outline: none;
            }
        }
        .field-title {
            input {
                border: none;
                border-left: 1px solid #ACEBF6;
                background-color: #293749;
                color: #fff;
                padding: 0 1rem;
                margin-bottom: 1rem;
                height: 2rem;
                width: 80%;
            }
        }
    }
    .add-field-btn {
        display: flex;
        justify-content: center;
        padding: 2rem 0 1rem 0;
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: #ACEBF6;
            border: none;
            cursor: pointer;
            width: 25%;
        }
    }
`;
