import React from "react";

export const Bubble = ({ clicked, coordinates, onClose }) => {
  const bubbleStyle = {
    position: "absolute",
    top: coordinates.y + "px",
    left: coordinates.x + "px",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={bubbleStyle}>
      <p>{`You felt ${clicked.text} for ${clicked.count} times!`}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
