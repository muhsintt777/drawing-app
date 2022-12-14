import { useEffect, useRef } from "react";
import "./App.css";
import Canvas from "./components/canvas/Canvas";

function App() {
  const canvasRef = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log({ x: e.clientX, y: e.clientY });
    });
  }, []);
  return (
    <div className="App">
      <Canvas width={"200 px"} height={"200 px"} />
      <canvas
        ref={canvasRef}
        style={{ border: "1px solid black", marginLeft: "30px" }}
      />
    </div>
  );
}

export default App;
