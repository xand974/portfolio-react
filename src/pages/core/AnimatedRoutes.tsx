import Home from "pages/home/Home";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Loading from "../shared/Loading";
import Projects from "pages/projects/Projects";
import SingleProject from "../single-project/SingleProject";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<SingleProject />} />
        <Route path="/about" element={<></>} />
        <Route path="/skills" element={<></>} />
      </Routes>
    </AnimatePresence>
  );
}
