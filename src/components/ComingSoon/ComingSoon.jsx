import React from 'react'
import './ComingSoon.css'
import video from '../../assets/planetpeek7.mp4'
import comingsoonimg from '../../assets/comingsoon.png'

export default function ComingSoon() {
    return (
        <div className="fullscreen-video-container">
              <div className="coming-soon-text-overlay">
                  <h1 className='coming-soon-text-h1'>COMING SOON...</h1>
              </div>
              <div className="coming-soon-bg"></div>

          <video autoPlay loop muted className="fullscreen-video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
        </div>
      );
}
