import React from "react";
import { PROJECT_IMG, PROJECT_IMG_TWO } from "../mock/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { hoverCardVariant } from "../variants/card-hover.variant";
import { useMousePosition } from "../hooks/use-mouse-position";

export default function ProjectCard() {
  const [show, setShow] = useState(false);
  const hoveredImageRef = useRef<HTMLDivElement>(null);
  const leftDividerRef = useRef<HTMLDivElement>(null);
  const rightDividerRef = useRef<HTMLDivElement>(null);
  const [{ x, y }] = useMousePosition();
  const randomNumRef = useRef(Math.floor(Math.random() * 100));

  useEffect(() => {
    if (!leftDividerRef.current || !rightDividerRef.current) return;
    leftDividerRef.current.style.width = `${randomNumRef.current}%`;
    rightDividerRef.current.style.width = `${Math.abs(
      100 - randomNumRef.current
    )}%`;
  }, []);

  useEffect(() => {
    if (!hoveredImageRef.current) return;
    const element = hoveredImageRef.current;
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
    element.style.transform = `translate(10%, 10%)`;
  }, [hoveredImageRef.current, x, y]);

  return (
    <AnimatePresence>
      <motion.div
        key="hover-card"
        className="flex items-center my-14"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show && (
          <motion.div
            initial="hidden"
            animate="animate"
            exit="exit"
            className="fixed z-50 w-72 h-auto transition-[all 1s ease-in-out]"
            variants={hoverCardVariant}
            ref={hoveredImageRef}
          >
            <img className="opacity-1" src={PROJECT_IMG} />
          </motion.div>
        )}

        <div ref={leftDividerRef} className="h-[1px] bg-gray-400"></div>
        <div className="flex-1 w-full">
          <h3 className="text-white whitespace-nowrap mx-10 font-extralight w-full text-2xl">
            MAISON MALET {randomNumRef.current}
          </h3>
        </div>
        <div ref={rightDividerRef} className="h-[1px] bg-gray-400"></div>
      </motion.div>
    </AnimatePresence>
  );
}
