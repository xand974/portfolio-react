export const sliderVariant = {
  initial: {
    filter: ["initial"],
  },
  animate: {
    filter: ["revert", "revert-layer", "initial"],
    transition: {
      yoyo: Infinity,
      duration: 2,
      ease: [0.34, 0.23, 0.45, 0.49],
    },
  },
  exit: {},
};
