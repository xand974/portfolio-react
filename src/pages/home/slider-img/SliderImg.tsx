import "./slider-img.scss";
import { PROJECT_IMG } from "mock/data";
import { useRef } from "react";
import { motion } from "framer-motion";
export default function SliderImg() {
  const sliderWrapperRef = useRef<HTMLDivElement>(null);

  const slideImg = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = sliderWrapperRef.current;
    if (!element) return;
    const xAxis = Math.floor((window.innerWidth / e.pageX) * 13);
    const yAxis = Math.floor((window.innerHeight / e.pageY) * 0.9);
    element.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  };

  return (
    <div
      className="h-full flex flex-col justify-center overflow-hidden slider"
      onMouseMove={slideImg}
    >
      <div className="h-full w-10/12 mx-auto">
        <div
          className="h-full slider__img--glitch origin-center transition-all"
          ref={sliderWrapperRef}
        >
          <motion.img
            src={PROJECT_IMG}
            alt=""
            className="w-full h-full my-12 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
