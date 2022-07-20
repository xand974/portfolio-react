import { useRef, useEffect } from "react";
import "../sass/app.scss";
import Sidebar from "./shared/Sidebar";
import { motion } from "framer-motion";
import { useCanvas } from "../hooks/use-canvas";
import { appVariant, mainSectionVariant } from "../variants/app.variant";
import { useAppSelector } from "../hooks/use-selector";

type AppType = {
  children: JSX.Element;
};
function Main({ children }: AppType) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas] = useCanvas(canvasRef);
  const { loading } = useAppSelector((state) => state.app);
  useEffect(() => {
    if (!canvas) return;
    canvas.draw();
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
      <div className="absolute top-[8px] right-[3%] font-extralight text-sm flex items-center text-gray-200">
        <button className="background-none border-none">FR</button>
        <span className="mx-2">/</span>
        <button className="background-none border-none">EN</button>
      </div>
      <div className="w-full h-full flex items-center">
        {loading ? <></> : <Sidebar />}
        <motion.section
          className="main__right flex-[6] w-full h-full"
          animate={loading ? "expand" : "reduce"}
          variants={mainSectionVariant}
        >
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
        </motion.section>
      </div>
    </motion.div>
  );
}

export default Main;
