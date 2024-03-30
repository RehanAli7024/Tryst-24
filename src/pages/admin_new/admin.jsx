import React, { useState } from 'react';
import axios from 'axios';
import './admin.css';
import { DOMAIN } from '../../domain';

function AdminLoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${DOMAIN}passes/internal/`, {
                username,
                password,
            });

            // Assuming your backend sends back a token upon successful authentication
            const token = response.data.token;

            // Store the token in localStorage or handle it as needed
            localStorage.setItem('adminToken', token);

            // Redirect to admin dashboard or the next page
            window.location.href = '/divyansh/ctm/dashboard/';
        } catch (error) {
            // Handle login error (e.g., invalid credentials)
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                setLoginError(error.response.data.error || 'Login failed');
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        }
    };

    return (
        <div className="login-form">
            <h2>Admin Login</h2>
            {loginError && <p className="error">{loginError}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLoginPage;
