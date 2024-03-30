import React, { useState } from "react";

const RightArrowButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseDown = () => {
    setIsPressed(true);
    triggerKeyDownEvent();
    const id = setInterval(triggerKeyDownEvent, 100); // Dispatch every 100ms
    setIntervalId(id);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    clearInterval(intervalId);
    triggerKeyUpEvent();
  };

  const handleTouchStart = (event) => {
    event.preventDefault(); // Prevent default touch behavior
    handleMouseDown();
  };

  const handleTouchEnd = (event) => {
    event.preventDefault(); // Prevent default touch behavior
    handleMouseUp();
  };

  const triggerKeyDownEvent = () => {
    const event = new KeyboardEvent("keydown", {
      key: "ArrowRight",
      keyCode: 39,
      which: 39,
      code: "ArrowRight",
    });
    window.dispatchEvent(event);
  };

  const triggerKeyUpEvent = () => {
    const event = new KeyboardEvent("keyup", {
      key: "ArrowRight",
      keyCode: 39,
      which: 39,
      code: "ArrowRight",
    });
    window.dispatchEvent(event);
  };

  return (
    <button
      className="leftArrowIcon"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {">"}
    </button>
  );
};

export default RightArrowButton;
