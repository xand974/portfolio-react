import { motion } from "framer-motion";
import { LINKS } from "mock/data";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { pageVariant } from "../../variants/app.variant";

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <motion.section
      className="main__left h-full flex-1 relative"
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Logo />
      <motion.div className="flex flex-col items-start w-10/12 mx-auto justify-center h-full">
        {LINKS.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.1, originX: 0 }}
            className="text-gray-400  mb-7 font-light text-[11px] flex items-center"
            key={index}
          >
            {item.crossOrigin ? (
              <a href={item.link} rel="noreferrer" target="_blank">
                {item.title}
              </a>
            ) : (
              <>
                <Link to={item.link}>{item.title}</Link>
                {path.includes(item.link) ? (
                  <p className="page-active"></p>
                ) : (
                  <></>
                )}
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute bottom-0 flex items-center">
        <a className="text-gray-300 mr-3">
          <GitHub className="text-xl" />
        </a>
        <a className="text-gray-300">
          <LinkedIn className="text-xl" />
        </a>
      </div>
    </motion.section>
  );
}
