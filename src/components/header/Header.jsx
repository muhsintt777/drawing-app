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
        title="Choose Color"
        className="header-colorInp"
        type="color"
        name="color"
      />
      <input min="1" max="100" type="range" name="range" />
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
