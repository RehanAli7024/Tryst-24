import React from 'react';
import styled from 'styled-components'

export default function AddNewField() {
    return (
        <Container>
            <h3>ADD NEW FIELD</h3>
            <div className='new-field-container'>
                <form>
                    <div className='field-mandatory'>
                        <p>MANDATORY: </p>
                        <div className='mandatory'>
                            <input type="radio" />
                            <label>Yes</label><br />
                        </div>
                        <div className='mandatory'>
                            <input type="radio" />
                            <label>No</label><br />
                        </div>
                    </div>
                    <div className="input-field-type">
                        <p>FIELD TYPE: </p>
                        <select>
                            <option value="text">Text</option>
                            <option value="radio">Radio Button</option>
                            <option value="checkbox">Checkbox</option>
                            <option value="upload">File Upload</option>
                            <option value="team">Team Member</option>
                        </select>
                    </div>
                </form>
            </div>
        </Container>
    );
}



const Container = styled.div`
    background-color: #041429;
    color: #fff;
    padding: 1rem;
    border: #ACEBF6 solid 1px;
    width: 30%;
    h3 {
        color: #ACEBF6;
    }
    .new-field-container {
        display: flex;
        flex-direction: column;
        .field-mandatory {
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
            p {
                display: flex;
                align-items: center;
            }
            select {
                width: 100%;
                height: 2rem;
                border: #ACEBF6 solid 1px;
                background-color: #041429;
                color: #fff;
                padding-left: 1rem;
            }
        }
    }
`;