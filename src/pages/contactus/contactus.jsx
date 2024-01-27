import React from "react";
import './contactus.css'
import { motion } from "framer-motion";
import { useState } from "react";
import oc1 from '../../assets/oc1.png';
import Placeholder from "./placeholder";
import oc2 from '../../assets/oc2.png';

const ContactUs = () => {

    return (
        <div className="contactus">
            <div className="contactus-head">
                <Placeholder name='Harshit Mawandia' por='Overall Coordinator' image={oc1} />
                <Placeholder name='Shwinder Singh' por='Overall Coordinator' image={oc2} />
            </div>
        </div>
    )
}

export default ContactUs;