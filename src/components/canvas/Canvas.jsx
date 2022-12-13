import React from "react";
import { useOnDraw } from "../../hooks/onDraw";

const Canvas = ({ width, height }) => {
  const setCanvasRef = useOnDraw();

  return (
    <canvas
      width={width}
      height={height}
      ref={setCanvasRef}
      style={canvasStyle}
    />
  );
};

export default Canvas;

const canvasStyle = {
  border: "1px solid black",
};
