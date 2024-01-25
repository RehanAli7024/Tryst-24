// RulebookEntry.js

const RulebookEntry = ({ serialNo, id }) => {
  return (
    <div className="rulebook-container">
      <div className="serial-no">
        <p>{serialNo}.</p>
      </div>
      <div className="rule">
        <input
          id={`rule_${id}`}  // Added unique ID
          className="input"
          type="text"
          placeholder="Type point to note here before the participant registers for the event"
        />
      </div>
    </div>
  );
};

export default RulebookEntry;
