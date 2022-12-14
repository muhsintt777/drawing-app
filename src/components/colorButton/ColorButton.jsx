import React from "react";
import "./ColorButton.css";

const ColorButton = ({ color }) => {
  return (
    <button
      title={color}
      style={{ background: color }}
      className="colorButton"
    ></button>
  );
};

export default ColorButton;
