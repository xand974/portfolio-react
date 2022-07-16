import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
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
      <div className="flex-[6] overflow-x-hidden overflow-y-scroll">
        <div className="w-10/12 m-auto h-full">
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
