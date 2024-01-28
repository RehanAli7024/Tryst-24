
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
            id={`contactPersonName_${id}`}
            className="input"
            type="text"
            placeholder="Name of Contact Person"
          />
        </div>
        <div className="contact-number">
          <input
            id={`contactPersonNumber_${id}`}
            className="input"
            type="tel"
            placeholder="Contact Number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
        </div>
      </div>
    </div>
  );
}
