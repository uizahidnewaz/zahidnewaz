"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const swipeVariants = {
  initial: (direction) => ({
    y: direction > 0 ? 20 : -20,
    opacity: 0,
  }),
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction) => ({
    y: direction > 0 ? -20 : 20,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.55, 0.06, 0.68, 0.19] },
  }),
};

const AnimatedLink = ({ href, children }) => {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = up, -1 = down

  const handleMouseEnter = () => {
    setDirection(1);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setDirection(-1);
    setHovered(false);
  };

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden"
        style={{ display: "inline-block" }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.span
            key={hovered ? "hover" : "normal"}
            custom={direction}
            variants={swipeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="block navigation_text uppercase"
          >
            {children}
          </motion.span>
        </AnimatePresence>
      </a>
    </Link>
  );
};

export default AnimatedLink;
