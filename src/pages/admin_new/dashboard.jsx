import React, { useState } from 'react';
import axios from 'axios';
import { DOMAIN } from '../../domain';

function InputFieldSubmit() {
    const [inputValue, setInputValue] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Sending a POST request to the server
            const response = await axios.post(`${DOMAIN}passes/internal/`, {
                data: inputValue
            });
            console.log(response.data);
            setSubmitStatus('Submitted successfully!');
        } catch (error) {
            console.error('Error submitting data:', error);
            setSubmitStatus('Failed to submit.');
        }
    };  

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {submitStatus && <p>{submitStatus}</p>}
        </div>
    );
}

export default InputFieldSubmit;
