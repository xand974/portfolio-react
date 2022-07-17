import { CUBIC } from "./global.transition";
export const hoverCardVariant = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.36,
      delayChildren: 0.2,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: CUBIC,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.3,
      ease: CUBIC,
    },
  },
};

export const cardHoverImgVariant = {
  hidden: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      duration: 2,
      ease: CUBIC,
    },
  },
  exit: {
    y: 100,
    transition: {
      duration: 2,
      ease: CUBIC,
    },
  },
};
