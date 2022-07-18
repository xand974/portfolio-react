import { motion } from "framer-motion";
import { pageVariant } from "../../variants/app.variant";
import "./styles/about.scss";
import { PROJECT_IMG } from "../../mock/data";

export default function About() {
  return (
    <motion.div
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container w-full h-full flex flex-col"
    >
      <div className="flex-[6] overflow-x-hidden overflow-y-scroll transition-all mt-10">
        <div className="w-10/12 m-auto h-full flex" id="scroll-container">
          <div className=" flex-1 ">
            <h1
              data-text="PARCE QUE"
              className="hero glitch layers text-8xl font-extralight text-gray-100 leading-[1.2] whitespace-nowrap"
            >
              PARCE QUE
            </h1>

            <p className="w-6/12 text-gray-200 font-extralight mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              animi rerum nesciunt eaque aliquid vitae perspiciatis rem fuga?
              Tenetur illum animi error ratione? Minus expedita voluptate
              mollitia distinctio eligendi quibusdam iusto. Recusandae,
              aspernatur nam aperiam officiis saepe laudantium sunt nulla
              excepturi ratione neque accusantium quod mollitia voluptatem, hic
              corrupti veniam.
            </p>
          </div>
          <div className=" flex-1 flex items-center justify-end">
            <img src={PROJECT_IMG} className="w-10/12 h-auto" alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
