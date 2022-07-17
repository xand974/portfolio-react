import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { useSmoothScroll } from "../hooks/use-smooth-scroll";
import { useRef } from "react";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  // const [position] = useSmoothScroll(scrollRef);

  return (
    <motion.div className="w-full h-full flex flex-col">
      <div className="flex-1 flex items-center w-10/12 m-auto ">
        <h1 className="text-gray-200 text-4xl font-thin tracking-wider relative">
          PROJECTS
          <span className="absolute text-[0.6rem] top-[-25px] right-[-20px] text-white font-extralight">
            1011
          </span>
        </h1>
      </div>
      <div className="flex-[6] overflow-x-hidden overflow-y-scroll transition-all">
        <div className="w-10/12 m-auto h-full" id="scroll-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </motion.div>
  );
}
