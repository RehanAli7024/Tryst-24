import "./speakersoverlay.css"

function SpeakersOverlay({setShowOverlay, name, details}) {
    return (
        <>
            <div className="speakers-overlay-border-box">
                <div className="speakers-overlay-inner-box">
                    <div className="speaker-name-close-overlay">
                        <div className="speaker-name-overlay">
                            {name}
                        </div>
                        <div className="speaker-close-overlay" onClick={()=>setShowOverlay(false)}>
                            <svg class="cross-sign-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                                <path id="close_2" d="M17.9997 19.5807L10.3901 27.1903C10.1824 27.398 9.92136 27.5043 9.60694 27.5091C9.29254 27.5139 9.02669 27.4077 8.80939 27.1903C8.59206 26.973 8.4834 26.7096 8.4834 26.4C8.4834 26.0904 8.59206 25.8269 8.80939 25.6096L16.419 18L8.80939 10.3903C8.60169 10.1827 8.49544 9.92161 8.49064 9.60718C8.48581 9.29278 8.59206 9.02693 8.80939 8.80963C9.02669 8.5923 9.29014 8.48364 9.59974 8.48364C9.90934 8.48364 10.1728 8.5923 10.3901 8.80963L17.9997 16.4192L25.6094 8.80963C25.8171 8.60193 26.0781 8.49568 26.3925 8.49088C26.7069 8.48605 26.9728 8.5923 27.1901 8.80963C27.4074 9.02693 27.5161 9.29038 27.5161 9.59998C27.5161 9.90958 27.4074 10.173 27.1901 10.3903L19.5805 18L27.1901 25.6096C27.3978 25.8173 27.504 26.0784 27.5088 26.3928C27.5137 26.7072 27.4074 26.973 27.1901 27.1903C26.9728 27.4077 26.7093 27.5163 26.3997 27.5163C26.0901 27.5163 25.8267 27.4077 25.6094 27.1903L17.9997 19.5807Z" fill="#F0B537"/>
                            </svg>
                        </div>
                    </div>
                    <div className="speaker-details-overlay">
                        {details}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpeakersOverlay