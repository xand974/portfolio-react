import { useRef, useEffect } from "react";
import "../sass/app.scss";
import Sidebar from "./shared/Sidebar";
import { motion } from "framer-motion";
import { useCanvas } from "../hooks/use-canvas";
import { appVariant } from "../variants/app.variant";

type AppType = {
  children: JSX.Element;
};
function Main({ children }: AppType) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas] = useCanvas(canvasRef);
  useEffect(() => {
    // if (!canvas) return;
    // canvas.draw();
    // const infos = canvas.getImgInfos();
    // const scanned = infos.data;
    // for (let i = 0; i < scanned.length; i += 4) {
    //   const grayScale = scanned[i] + scanned[i + 1] + scanned[i + 2];
    //   const middle = grayScale / 3;
    //   scanned[i] = middle;
    //   scanned[i + 1] = middle;
    //   scanned[i + 2] = middle;
    // }
    // const image = new ImageData(scanned, canvas.width, canvas.height);
    // canvas.setImageFilter(image);
  }, []);

  return (
    <motion.div className="w-screen h-screen overflow-hidden p-7 bg-[#141414]">
      <div className="w-full h-full flex items-center">
        <Sidebar />
        <section className="main__right flex-[6]  w-full h-full">
          <canvas className="w-full h-full" ref={canvasRef}></canvas>
          <motion.div
            className="main__right__wrapper"
            variants={appVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

export default Main;
