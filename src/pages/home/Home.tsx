import { motion } from "framer-motion";
import { ME, PROJECT_IMG } from "mock/data";
import { parentLetter, letterAppearAnimation } from "animations/home.animation";
import { pageVariant } from "../../variants/app.variant";
import SliderImg from "./slider-img/SliderImg";

export default function Home() {
  const [lastName, firstName] = ME;
  return (
    <motion.section
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full grid grid-cols-2 overflow-hidden"
    >
      <motion.div className=" p-6">
        <motion.div
          variants={parentLetter}
          initial="initial"
          animate="animate"
          className="text-5xl text-gray-100 font-light font-[Lato]"
        >
          {lastName.split("").map((item, index) => (
            <motion.p
              variants={letterAppearAnimation}
              key={index}
              className="inline-block hero glitch layers"
              data-text={item}
              style={{
                marginRight: index === lastName.length - 1 ? "10px" : 0,
              }}
            >
              {item}
            </motion.p>
          ))}

          {firstName.split("").map((item, index) => (
            <motion.p
              className="inline-block hero glitch layers"
              data-text={item}
              variants={letterAppearAnimation}
              key={index}
            >
              {item}
            </motion.p>
          ))}
        </motion.div>
        <motion.p className="mt-5 w-9/12 text-gray-500 leading-7 font-thin">
          <motion.span
            variants={letterAppearAnimation}
            initial="initial"
            animate="animate"
            className="text-gray-200"
          >
            Fullstack Web Developer{" "}
          </motion.span>{" "}
          specialized in{" "}
          <motion.span
            variants={letterAppearAnimation}
            animate="animate"
            initial="initial"
            className="text-gray-200 line-through"
          >
            javascript
          </motion.span>{" "}
          <motion.span
            variants={letterAppearAnimation}
            animate="animate"
            initial="initial"
            className="text-gray-200"
          >
            typescript
          </motion.span>{" "}
          and
          <motion.span
            variants={letterAppearAnimation}
            animate="animate"
            initial="initial"
            className="text-gray-200"
          >
            {" "}
            .NET C#
          </motion.span>
        </motion.p>
      </motion.div>
      <SliderImg />
    </motion.section>
  );
}
