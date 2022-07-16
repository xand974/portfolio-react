import { CUBIC, LOW_CUBIC } from "./global.transition";

export const loadingContainerVariant = {
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    duration: 1.4,
    ease: LOW_CUBIC,
  },
};

export const loadingTextTopVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: CUBIC,
      duration: 1,
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        ease: CUBIC,
        duration: 0.9,
      },
    },
  },
};

export const loadingTextBottomVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: CUBIC,
      duration: 1,
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        ease: CUBIC,
        duration: 0.9,
      },
    },
  },
};

export const boxTopVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      ease: CUBIC,
      duration: 1,
    },
    exit: {
      y: "100vh",
      transition: {
        ease: CUBIC,
        duration: 2,
      },
    },
  },
};

export const boxBottomVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      ease: CUBIC,
      duration: 1,
    },
    exit: {
      y: "-100vh",
      transition: {
        ease: CUBIC,
        duration: 2,
      },
    },
  },
};
