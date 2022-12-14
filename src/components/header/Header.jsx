import React from "react";
import ColorButton from "../colorButton/ColorButton";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <ColorButton color={"red"} />
      <ColorButton color={"green"} />
      <ColorButton color={"blue"} />
      <ColorButton color={"yellow"} />

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
