"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Faster and snappier swipe animation variants
const swipeVariants = {
  initial: (direction) => ({
    y: direction > 0 ? 20 : -20,
    opacity: 0,
    scale: 0.98,
  }),
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3, // faster
      ease: [0.33, 1, 0.68, 1], // standard ease-out
    },
  },
  exit: (direction) => ({
    y: direction > 0 ? -20 : 20,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: [0.7, 0, 0.84, 0],
    },
  }),
};

const AnimatedLink = ({ href, children }) => {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const handleMouseEnter = () => {
    setDirection(1);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setDirection(-1);
    setHovered(false);
  };

  return (
    <Link
      href={href}
      className="relative overflow-hidden cursor-pointer inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          style={{
            transformOrigin: "center",
            willChange: "transform, opacity",
          }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </Link>
  );
};

export default AnimatedLink;
