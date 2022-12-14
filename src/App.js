import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");

  const onStart = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const onDraw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  const onEnd = (e) => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.linejoin = "round";
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineWidth, lineColor]);

  return (
    <div className="App">
      <Header setLineWidth={setLineWidth} setLineColor={setLineColor} />
      <canvas
        onMouseDown={onStart}
        onMouseMove={onDraw}
        onMouseUp={onEnd}
        ref={canvasRef}
        className="app-canvas"
        width={`1280px`}
        height={`600px`}
      />
    </div>
  );
}

export default App;
