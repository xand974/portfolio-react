import { Canvas } from "canvas/canvas";
import { IMG } from "mock/data";
import { RefObject, useEffect, useState } from "react";

export const useCanvas = (ref: RefObject<HTMLCanvasElement>) => {
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = ref.current.getContext("2d");
    if (!ctx) return;
    setCanvas(new Canvas(ctx, IMG, ref.current.width, ref.current.height));
  }, [ref.current]);

  return [canvas];
};
