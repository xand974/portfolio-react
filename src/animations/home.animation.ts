import { CUBIC } from "../variants/global.transition";
export const parentLetter = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const letterAppearAnimation = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: CUBIC,
      duration: 0.3,
    },
  },
};
