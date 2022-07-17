import { motion } from "framer-motion";
import React from "react";
import { pageVariant } from "variants/app.variant";

export default function Skills() {
  return (
    <motion.div
      variants={pageVariant}
      className="container w-full h-full flex flex-col"
    >
      <div className="flex-1 flex items-center w-10/12 m-auto ">
        <h1
          data-text="About me"
          className="hero glitch layers text-gray-200 text-4xl font-thin tracking-wider relative"
        >
          <span>Skills</span>
          <span className="absolute text-[0.6rem] top-[-25px] right-[-20px] text-white font-extralight">
            1011
          </span>
        </h1>
      </div>
      <div className="flex-[6] overflow-x-hidden overflow-y-scroll transition-all">
        <div className="w-10/12 m-auto h-full" id="scroll-container"></div>
      </div>
    </motion.div>
  );
}
