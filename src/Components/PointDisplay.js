import React from "react";
import "./PointDisplay.css";

const PointDisplay = ({ points }) => {
  return (
    <div className="point-display">
      <span>Points: {points}</span>
    </div>
  );
};

export default PointDisplay;
