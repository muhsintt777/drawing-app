import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");

  const [canvasData, setCanvasData] = useState([]);
  const [redoData, setRedoData] = useState([]);
  const indexRef = useRef(-1);

  const clearRedo = () => {
    setRedoData([]);
  };

  const onUndo = () => {
    if (!canvasData.length) {
      return;
    }
    if (canvasData.length <= 1) {
      const currCanData = canvasData;
      setRedoData([...redoData, ...currCanData]);
      onClear();
    } else {
      indexRef.current -= 1;
      const currData = canvasData;
      const imageData = currData.pop();
      setRedoData([...redoData, imageData]);
      setCanvasData(currData);
      ctxRef.current.putImageData(canvasData[indexRef.current], 0, 0);
    }
  };

  const onRedo = () => {
    console.log("redo");
    const currData = redoData;
    if (!currData.length) {
      return;
    }
    ctxRef.current.putImageData(currData[currData.length - 1], 0, 0);
    const imageData = currData.pop();
    indexRef.current += 1;
    setCanvasData([...canvasData, imageData]);
    setRedoData(currData);
  };

  const onStart = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const onClear = () => {
    ctxRef.current.fillStyle = "white";
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    ctxRef.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    setCanvasData([]);
    indexRef.current = -1;
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

    if (isDrawing || e.type !== "mouseout") {
      setCanvasData((prev) => {
        return [
          ...prev,
          ctxRef.current.getImageData(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          ),
        ];
      });
      indexRef.current += 1;
    }
    setIsDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.lineCap = "round";
    ctx.linejoin = "round";
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineWidth, lineColor]);

  return (
    <div className="App">
      <Header
        clearRedo={clearRedo}
        onRedo={onRedo}
        onUndo={onUndo}
        onClear={onClear}
        setLineWidth={setLineWidth}
        setLineColor={setLineColor}
      />
      <canvas
        onMouseDown={onStart}
        onMouseMove={onDraw}
        onMouseUp={onEnd}
        onMouseOut={onEnd}
        ref={canvasRef}
        className="app-canvas"
        width={`1280px`}
        height={`600px`}
      />
    </div>
  );
}

export default App;
