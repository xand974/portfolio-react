import Home from "pages/Home";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Loading from "../components/Loading";
import Projects from "pages/Projects";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<></>} />
        <Route path="/skills" element={<></>} />
      </Routes>
    </AnimatePresence>
  );
}
