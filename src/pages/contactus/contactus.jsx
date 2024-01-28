import React from "react";
import "./contactus.css";
// import { motion } from "framer-motion";
import oc1 from "../../assets/oc1.png";
import { useState } from "react";

import Placeholder from "./placeholder";

import data from "./data";

const ContactUs = () => {
  return (
    <div className="contact-parent">
      <div className="text-3xl md:text-5xl flex justify-center items-center pb-12 pt-8">
        Contact US
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 m-auto mb-10 overall">
        <Placeholder data={data.ocs[0]} />
        <Placeholder data={data.ocs[1]} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 w-11/12 m-auto mb-10">
        {data.ctms.map((item, key) => (
          <Placeholder
            data={item}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
