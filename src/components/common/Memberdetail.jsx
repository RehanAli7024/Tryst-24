
import "./Memberdetail.css";

export default function Memberdetail({ serialNo, id }) {
  return (
    <div>
      <div className="contact-details-container">
        <div className="serial-no">
          <p>{serialNo}.</p>
        </div>
        <div className="name-of-contact-person">
          <input
            id={`contactPersonName_${id}`}  // Added unique ID
            className="input"
            type="text"
            placeholder="Name of Contact Person"
          />
        </div>
        <div className="contact-number">
          <input
            id={`contactPersonNumber_${id}`}  // Added unique ID
            className="input"
            type="text"
            placeholder="Contact Number"
          />
        </div>
      </div>
    </div>
  );
}
