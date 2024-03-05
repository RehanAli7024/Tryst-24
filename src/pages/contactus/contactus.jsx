import React from "react";
import "./contactus.css";
import Placeholder from "./placeholder";
import data from "./data";

const ContactUs = () => {
  const itemCount = data.ocs.length;
  return (
    <div className="contact-parent">
      <div className="text-3xl md:text-5xl flex justify-center items-center pb-12 pt-8" id="contact_us_heading">
        Contact US
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 m-auto mb-10 overall">
        <div className="overflow-hidden p-2">
          <Placeholder data={data.ocs[0]} />
        </div>
        <div className="overflow-hidden p-2">
          <Placeholder data={data.ocs[1]} />
        </div>
        <div className="overflow-hidden p-2">
          <Placeholder data={data.ocs[2]} />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 w-11/12 m-auto mb-10">
        {data.ctms.map((item, key) => (
          <div className="overflow-hidden p-2" key={key}>
            <Placeholder data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
