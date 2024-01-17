
import "./Memberdetail.css";

export default function Memberdetail({ serialNo }) {
  return (
    <div>
      <div className="contact-details-container">
        <div className="serial-no">
          <p>{serialNo}.</p>
        </div>
        <div className="name-of-contact-person">
          <input
            className="input"
            type="text"
            placeholder="Name of Contact Person"
          />
        </div>
        <div className="contact-number">
          <input
            className="input"
            type="text"
            placeholder="Contact Number"
          />
        </div>
      </div>
    </div>
  );
}
