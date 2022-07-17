import { motion } from "framer-motion";
import { LINKS } from "mock/data";

export default function Sidebar() {
  return (
    <motion.section className="main__left h-full flex-1">
      <motion.div className="flex flex-col items-start w-10/12 mx-auto justify-center h-full">
        {LINKS.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.1, originX: 0 }}
            className="text-gray-400  mb-7 font-light text-[11px]"
            key={index}
          >
            <a href={item.link}>{item.title}</a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
