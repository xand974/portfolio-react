import { ArrowForwardOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import { PROJECT_IMG } from "mock/data";
import Tab from "./tab/Tab";
import { projectVariant } from "../../variants/app.variant";
import { useInView } from "../../hooks/use-in-view";
import { useRef } from "react";
import { CUBIC } from "../../variants/global.transition";

export default function SingleProject() {
  const nextTextRef = useRef<HTMLSpanElement>(null);
  const [isInView] = useInView(nextTextRef);

  return (
    <motion.div
      variants={projectVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full flex flex-col overflow-scroll"
    >
      <div className=" h-32 w-full py-6 flex-1">
        <div className="w-9/12 mx-auto h-full flex items-center font-extralight">
          <motion.span
            ref={nextTextRef}
            className={`text-gray-400 mr-3 uppercase`}
          >
            Next{" "}
          </motion.span>
          <ArrowForwardOutlined className="text-gray-400" />
        </div>
      </div>
      <div className="h-[50vh] w-7/12 mx-auto relative">
        <motion.h2 className="text-[3rem] absolute top-[-50px] right-[-40px] font-[cursive] text-indigo-100 z-20">
          1.0
        </motion.h2>
        <motion.img
          initial={{ filter: "grayscale(0)" }}
          animate={{
            filter: "grayscale(1)",
            transition: { duration: 3, ease: "backOut" },
          }}
          layoutId="single-project-img"
          src={PROJECT_IMG}
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        <motion.h2 className="text-[9rem] font-[cursive] absolute bottom-[-100px] left-[-90px] mt-10 text-indigo-100 z-20">
          Cetadire
        </motion.h2>
      </div>
      <div className="h-screen w-full mt-28 flex-[2]">
        <div className="w-8/12 mx-auto">
          <h2 className="text-gray-50 text-4xl uppercase mb-5">
            About the project
          </h2>
          <p className="text-gray-50 text-sm leading-8 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            rerum animi tempore culpa repellat ipsam a consequuntur. Voluptas
            explicabo dolorum, officia provident commodi omnis, vitae magni
            quidem tempore eligendi nesciunt velit perspiciatis quisquam ab
            soluta quam eos id porro ad laborum rerum saepe doloribus expedita
            esse? Fuga impedit error culpa delectus est eaque dolores placeat
            nam. Commodi unde autem consectetur culpa reprehenderit ipsam omnis
            et praesentium, enim distinctio beatae sunt esse modi dolorum dolor
            consequatur soluta? Minima fugiat laborum deserunt beatae
            consequuntur accusamus illum repellendus debitis sapiente eum
            veritatis delectus, recusandae praesentium distinctio illo libero,
            architecto cumque ea, velit unde.
          </p>
        </div>
      </div>
      <div className="mt-28 w-1/2 mx-auto">
        <Tab />
      </div>
      {!isInView && (
        <motion.p
          className="text-gray-400 mr-3 uppercase absolute font-extralight left-[-80px] bottom-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.3, ease: CUBIC } }}
        >
          Next <ArrowForwardOutlined className="text-gray-400" />
        </motion.p>
      )}
    </motion.div>
  );
}
