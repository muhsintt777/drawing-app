import { useRef } from "react";

export const useOnDraw = () => {
  const canvasRef = useRef(null);

  const setCanvasRef = (ref) => {
    if (!ref) {
      return;
    }
    canvasRef.current = ref;
    initMouseMoveListner();
  };

  const initMouseMoveListner = () => {
    const mouseMoveListner = (e) => {
      //   console.log({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMoveListner);
  };

  return setCanvasRef;
};
