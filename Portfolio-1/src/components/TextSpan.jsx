import { motion as m, useAnimationControls } from "framer-motion";
import { PropTypes } from "prop-types";
import { useState } from "react";

function TextSpan({ children }) {
  const controls = useAnimationControls();

  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.55, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.5, 0.7, 0.8, 0.8, 1],
      },
    });
    setIsPlaying(true);
  };

  return (
    <m.span
      className="text-6xl font-[Inter] inline-block"
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          rubberBand();
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </m.span>
  );
}

TextSpan.prototypes = {
  children: PropTypes.node.isRequired,
};

export default TextSpan;
