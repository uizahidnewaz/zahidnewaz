"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const swipeVariants = {
  initial: (direction) => ({
    y: direction > 0 ? 25 : -25,
    opacity: 0,
    scale: 0.98,
  }),
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1], // More dramatic easing
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction) => ({
    y: direction > 0 ? -25 : 25,
    opacity: 0,
    scale: 0.98,
    transition: { 
      duration: 0.3, 
      ease: [0.7, 0, 0.84, 0],
    },
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
    <Link href={href} >
      <motion.a
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden cursor-pointer"
        style={{ display: "inline-block" }}
        whileHover={{ 
          scale: 1.01,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ 
          scale: 0.99,
          transition: { duration: 0.1, ease: "easeInOut" }
        }}
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
              willChange: "transform, opacity"
            }}
          >
            {children}
          </motion.span>
        </AnimatePresence>
        
        {/* Subtle underline effect */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-current"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: hovered ? 1 : 0,
            opacity: hovered ? 0.6 : 0,
            transition: { 
              duration: hovered ? 0.4 : 0.2,
              ease: hovered ? [0.16, 1, 0.3, 1] : [0.7, 0, 0.84, 0],
            }
          }}
          style={{ 
            width: "100%",
            transformOrigin: hovered ? "left" : "right"
          }}
        />
      </motion.a>
    </Link>
  );
};

export default AnimatedLink;
