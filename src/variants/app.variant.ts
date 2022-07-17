import { CUBIC } from "./global.transition";
export const appVariant = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const pageVariant = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: CUBIC,
    },
  },
  exit: {
    y: "100vh",
  },
};
