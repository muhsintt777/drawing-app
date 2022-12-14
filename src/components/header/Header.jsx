import React from "react";
import ColorButton from "../colorButton/ColorButton";
import "./Header.css";

const Header = ({ setLineWidth, setLineColor }) => {
  return (
    <header>
      <ColorButton setLineColor={setLineColor} color={"red"} />
      <ColorButton setLineColor={setLineColor} color={"green"} />
      <ColorButton setLineColor={setLineColor} color={"blue"} />
      <ColorButton setLineColor={setLineColor} color={"yellow"} />

      <input
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
        title="Choose Color"
        className="header-colorInp"
        type="color"
        name="color"
      />
      <input
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
        min="1"
        max="10"
        type="range"
        name="range"
      />
      <button style={{ color: "blue" }} className="header-undoBtn">
        undo
      </button>
      <button style={{ color: "red" }} className="header-clearBtn">
        clear
      </button>
    </header>
  );
};

export default Header;
