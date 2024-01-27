import React from "react";
import "./contactus.css";
// import { motion } from "framer-motion";
import { useState } from "react";

import Placeholder from "./placeholder";

import data from "./data";

const ContactUs = () => {
  return (
    <div>
      <div className="text-3xl md:text-5xl flex justify-center items-center bg-[#041429] py-16">
        Contact US
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.slice(0, 5).map((item) => (
          <div className="border-2 flex justify-center items-center">
            <Placeholder
              name={item.name}
              por={item.por}
              image={item.image}
              email={item.email}
              linkedin={item.linkedin}
            />
          </div>
        ))}
      </div>
    </div>

    // {/* <Placeholder name='Harshit Mawandia' por='Overall Coordinator' image={oc1} /> */}
  );
};

export default ContactUs;
