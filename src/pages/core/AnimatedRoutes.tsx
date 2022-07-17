import Home from "pages/home/Home";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Loading from "pages/shared/Loading";
import Projects from "pages/projects/Projects";
import SingleProject from "pages/single-project/SingleProject";
import About from "pages/about/About";
import Skills from "pages/skills/Skills";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<SingleProject />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </AnimatePresence>
  );
}
