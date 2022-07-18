import { PROJECT_IMG } from "mock/data";
import "./slider-img.scss";
import { SLIDER_IMAGES } from "mock/data";
import { useEffect, useState, useRef } from "react";

export default function SliderImg() {
  const [sliderItems, setSliderItems] = useState(SLIDER_IMAGES);
  const cachedRef = useRef([...sliderItems]);
  //   useEffect(() => {
  //     const id = setInterval(() => {
  //       const current = sliderItems.shift();
  //       if (!current) return setSliderItems([...cachedRef.current]);
  //       setSliderItems([...cachedRef.current, current]);
  //     }, 1000);
  //     return () => clearInterval(id);
  //   }, []);

  return (
    <div className="h-full flex flex-col justify-center overflow-hidden slider">
      <div className="h-full w-10/12 mx-auto">
        <div className="h-48 bg-black">
          {sliderItems.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              className="w-full h-full my-12 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
