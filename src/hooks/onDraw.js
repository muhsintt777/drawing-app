import { useRef } from "react";

export const useOnDraw = () => {
  const canvasRef = useRef(null);

  const setCanvasRef = (ref) => {
    if (!ref) {
      return;
    }
    canvasRef.current = ref;
  };

  return setCanvasRef;
};
