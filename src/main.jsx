import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="341020391186-0gu7s6bon409295ifvv0uqr2n2o8sadi.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
)
