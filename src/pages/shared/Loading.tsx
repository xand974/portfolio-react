import { motion } from "framer-motion";
import {
  loadingContainerVariant,
  loadingTextTopVariant,
  loadingTextBottomVariant,
  boxTopVariant,
  boxBottomVariant,
} from "../../variants/loading.variants";
import { useNavigate } from "react-router";

export default function Loading() {
  const router = useNavigate();

  return (
    <motion.div
      variants={loadingContainerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-[#141414] w-screen h-screen flex justify-center flex-col items-center fixed top-0 left-0 z-30"
      onAnimationComplete={() =>
        setTimeout(() => {
          router("/home");
        }, 500)
      }
    >
      <motion.div
        variants={boxTopVariant}
        className="bg-gray-100 w-full flex-1 "
      ></motion.div>
      <motion.div
        variants={boxBottomVariant}
        className="bg-black w-full flex-1"
      ></motion.div>
      <motion.div className="mix-blend-difference absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.h1
          variants={loadingTextTopVariant}
          className="inline-block text-5xl text-gray-200 font-light spacing tracking-wider mr-3"
        >
          Malet's
        </motion.h1>
        <motion.h1
          variants={loadingTextBottomVariant}
          className=" inline-block text-5xl text-gray-200 font-light spacing tracking-wider "
        >
          portfolio
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
