import React from 'react'
import './Error404.css'
import { Navigate } from 'react-router-dom'

export default function Error404() {
  return (
    <div className='error404-page'>
        <div className='error404-container'>
            <h1 className='error-code'>404</h1>
            <h3>Page not found</h3>
            <p>Uh oh, we can't seem to find the page you're looking for. Try going back to the previous page or <a href='/'>home page.</a></p>
            {/* <button onClick={Navigate("/")}>Go to Home page</button> */}
        </div>
    </div>
  )
}
