import { useEffect, useRef } from "react";
import "./App.css";
// import Canvas from "./components/canvas/Canvas";

function App() {
  const canvasRef = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log({ x: e.clientX, y: e.clientY });
      const bondingRect = canvasRef.current.getBoundingClientRect();
      console.log({
        x: e.clientX - bondingRect.left,
        y: e.clientY - bondingRect.top,
      });
    });
  }, []);
  return (
    <div className="App">
      {/* <Canvas width={"200 px"} height={"200 px"} /> */}
      <canvas ref={canvasRef} className="app-canvas" />
    </div>
  );
}

export default App;
