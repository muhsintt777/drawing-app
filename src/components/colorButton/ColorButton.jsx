import "./ColorButton.css";

const ColorButton = ({ color, setLineColor }) => {
  return (
    <button
      title={color}
      style={{ background: color }}
      className="colorButton"
      onClick={() => {
        setLineColor(color);
      }}
    ></button>
  );
};

export default ColorButton;
