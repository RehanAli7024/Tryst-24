// RulebookEntry.js

const RulebookEntry = ({ serialNo }) => {
  return (
    <div className="rulebook-container">
      <div className="serial-no">
        <p>{serialNo}.</p>
      </div>
      <div className="rule">
        <input
          className="input"
          type="text"
          placeholder="Type point to note here before the participant registers for the event"
        />
      </div>
    </div>
  );
};

export default RulebookEntry;
