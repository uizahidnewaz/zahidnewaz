"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  // Check if the current path matches the link
  const isActive =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href)) ||
    (href.includes("#") && pathname === "/" && href.startsWith("/#"));

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
      className={`relative overflow-hidden cursor-pointer inline-block ${
        isActive ? "active-link" : ""
      }`}
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
          className={`block navigation_text uppercase ${
            isActive ? "text-[var(--color-chartreuse-green-60)]" : ""
          }`}
          style={{
            transformOrigin: "center",
            willChange: "transform, opacity",
          }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
      {isActive && (
        <motion.div
          className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[var(--color-chartreuse-green-60)]"
          layoutId="navbar-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

export default AnimatedLink;
