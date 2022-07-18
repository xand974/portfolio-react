import { motion } from "framer-motion";
import { ME } from "mock/data";
import { parentLetter, letterAppearAnimation } from "animations/home.animation";
import { pageVariant } from "../../variants/app.variant";

export default function Home() {
  const [lastName, firstName] = ME;
  return (
    <motion.section
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full grid grid-cols-2"
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
              className="inline-block"
              style={{
                marginRight: index === lastName.length - 1 ? "10px" : 0,
              }}
            >
              {item}
            </motion.p>
          ))}

          {firstName.split("").map((item, index) => (
            <motion.p
              variants={letterAppearAnimation}
              key={index}
              className="inline-block"
            >
              {item}
            </motion.p>
          ))}
        </motion.div>
        <motion.p
          className="mt-5 w-9/12 text-gray-500 leading-7 font-thin"
          variants={letterAppearAnimation}
        >
          <span className="text-gray-200">Fullstack Web Developer </span>{" "}
          specialized in{" "}
          <span className="text-gray-200 line-through">javascript</span>{" "}
          <span className="text-gray-200">typescript</span> and
          <span className="text-gray-200"> .NET C#</span>
        </motion.p>
      </motion.div>
      <div className=""></div>
    </motion.section>
  );
}
