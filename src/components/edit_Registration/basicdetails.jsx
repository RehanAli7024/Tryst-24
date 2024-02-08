import React from 'react';

const BasicDetails = () => {
    return (
        <>
            <div className="inputfieldcontainor">
                <div className="inputfield">
                    <label className="titleoffield">Your Name*</label>
                    <input
                        className="box"
                        type="text"
                        placeholder='Enter your name'
                    />
                </div>
                <div className="inputfield">
                    <label className="titleoffield">Phone Number*</label>
                    <input
                        className="box"
                        type="text"
                        placeholder='Enter your phone number'
                    />
                </div>
                <div className="inputfield">
                    <label className="titleoffield">E-Mail ID</label>
                    <input
                        className="box"
                        type="email"
                        placeholder='Enter your email id'
                    />
                </div>
            </div>
            <div className="inputfieldcontainor">
                <div className="inputfield">
                    <label className="titleoffield">College State*</label>
                    <select
                        className="box"
                        placeholder='Select your option'
                    />
                </div>
                <div className="inputfield">
                    <label className="titleoffield">College City*</label>
                    <select
                        className="box"
                        placeholder='Select your option'
                    />
                </div>
                <div className="inputfield">
                    <label className="titleoffield">College Name*</label>
                    <select
                        className="box"
                        placeholder='Select your option'
                    />
                </div>
            </div>
            <div className="inputfield referral">
                <label className="titleoffield referral">CA Referral ID*</label>
                <input
                    className="box"
                    type="text"
                    placeholder=''
                />
            </div>
        </>
    )
}

export default BasicDetails;