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
  },
  animate: {
    times: [0, 0.2, 0.5, 0.8, 1],
    opacity: [0.1, 0.6, 1],
    y: [-1, 0],
    x: [3, 0],
    transition: {
      duration: 0.7,
      staggerChildren: 0.34,
      ease: CUBIC,
    },
  },
  exit: {
    times: [0, 0.2, 0.5, 0.8, 1],
    opacity: [0.9, 0.5, 0],
    y: 10,
    transition: {
      duration: 0.7,
      ease: CUBIC,
    },
  },
};

export const projectVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    zIndex: [10, -10, 10, -10],
    times: [0, 0.2, 0.5, 0.8, 1],
    opacity: [0.1, 1],
    y: [-1, 0],
    x: [3, 0],
    transition: {
      duration: 0.7,
      ease: CUBIC,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: CUBIC,
    },
  },
};

export const mainSectionVariant = {
  reduce: {
    width: "0",
    x: 0,
  },
  expand: {
    width: "100%",
    x: 0,
  },
};
