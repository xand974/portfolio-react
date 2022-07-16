import React from "react";
import { useRef } from "react";
import "../sass/app.scss";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

type AppType = {
  children: JSX.Element;
};
function Main({ children }: AppType) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <motion.div className="w-screen h-screen overflow-hidden p-7 bg-[#141414]">
      <div className="w-full h-full flex items-center">
        <Sidebar />
        <section className="main__right flex-[6]  w-full h-full">
          <canvas
            className="border-red-800 w-full h-full"
            ref={canvasRef}
          ></canvas>
          <div className="main__right__wrapper">{children}</div>
        </section>
      </div>
    </motion.div>
  );
}

export default Main;
