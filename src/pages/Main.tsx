import { useRef, useEffect, useState } from "react";
import "../sass/app.scss";
import Sidebar from "./shared/Sidebar";
import { motion } from "framer-motion";
import { useCanvas } from "../hooks/use-canvas";
import { appVariant, mainSectionVariant } from "../variants/app.variant";
import { useAppSelector } from "../hooks/use-selector";
import { Effect } from "canvas/class/Effect";
import { useLocation } from "react-router";

type AppType = {
  children: JSX.Element;
};
function Main({ children }: AppType) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas] = useCanvas(canvasRef);
  const { loading , enableCanvas} = useAppSelector((state) => state.app);
  const [reqId, setReqId] = useState(0);
  const location = useLocation();

  useEffect(() => {   
    if(!canvas )return 
    
    const effect = new Effect(canvas.width, canvas.height);

    const ctx = canvas.ctx
    function animate(){
      ctx.fillStyle = "rgba(0,0,0,0.2)"
      ctx.fillRect(0,0,canvas.width , canvas.height)
      for (const symbol of effect.symbols) {

        symbol.draw(ctx , effect);
      }
     const id = requestAnimationFrame(animate);
     setReqId(id)
    }

    animate();
  
  }, [canvas]);

  // useEffect(() => {
  //  if(!location.pathname.includes("home")) {
  //   cancelAnimationFrame(reqId);
  //  }
    
  // }, [reqId, location])

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
          {
            enableCanvas ? 
            <canvas className="w-full h-full relative -z-10" ref={canvasRef}></canvas>
          :
          <></>
          }
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
