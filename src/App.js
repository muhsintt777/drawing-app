import { useEffect, useRef } from "react";
import "./App.css";
// import Canvas from "./components/canvas/Canvas";

function App() {
  const canvasRef = useRef();
  const point = useRef(0);
  const ctx = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log({ x: e.clientX, y: e.clientY });
      const boundingRect = canvasRef.current.getBoundingClientRect();
      ctx.current = canvasRef.current.getContext("2d");
      point.current = {
        x: e.clientX - boundingRect.left,
        y: e.clientY - boundingRect.top,
      };
      console.log(point.current);
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
