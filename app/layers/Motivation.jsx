"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Container from "../components/Container";

// Variants for container and children with luxurious transitions
const containerVariants = {
  hidden: { opacity: 0.3, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.43, 0.13, 0.23, 0.96], // Advanced cubic bezier for luxurious motion
      staggerChildren: 0.12, // Slightly faster staggering for responsive feel
      delayChildren: 0.05, // Small delay for more natural sequence
    },
  },
};

const childVariants = {
  hidden: { opacity: 0.3, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.43, 0.13, 0.23, 0.96], // Advanced cubic bezier for luxurious motion
    },
  },
};

const Motivation = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  // Detect if component is in view with enhanced threshold for smoother animations and better locking
  const inView = useInView(ref, {
    margin: "-5% 0% -5% 0%", // Generous margin for earlier detection
    amount: 0.15, // Trigger when just 15% of element is visible for earlier animation start
    once: true, // Set to true to lock the animation state after first appearance
  });

  useEffect(() => {
    if (inView) {
      // Start the animation with a small delay for smoother transitions
      controls
        .start("visible", {
          duration: 1.2,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 0.05, // Small delay for more predictable loading
        })
        .then(() => {
          // This ensures the animation stays in its final state
          controls.set("visible");
        });
    }
  }, [inView, controls]);

  return (
    <Container className="pt-[40px] xs:pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[30px] xs:pb-[40px] sm:pb-[60px] md:pb-[80px] lg:pb-[96px]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-stretch gap-x-[80px]"
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          perspective: 1000,
        }}
        layoutId="motivationSection" // Helps Framer Motion track this component uniquely
      >
        {/* LEFT SIDE */}
        <motion.div
          variants={childVariants}
          className="flex flex-col justify-between w-full md:w-[40%]"
        >
          <div>
            <h2 className="motivation_heading">motivation</h2>
            <h3 className="motivation_subheading">
              THE JOURNEY OF CREATIVE INSPIRATION
            </h3>
          </div>

          <div className="hidden md:flex mb-1 lg:mb-[30px] items-center gap-x-[12px] mt-10 md:mt-0">
            <div className="w-[18px] h-[18px] rounded-full bg-white flex-shrink-0"></div>
            <h3 className="story_title flex-shrink-0">My motto</h3>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={childVariants}
          className="w-full md:w-[60%] flex flex-col justify-between"
        >
          <div className="mt-4 lg:mt-0 space-y-[15px] lg:space-y-[20px]">
            <p className="motivation_pagaraph mt-2">
              As a CSE student, I loved solving logical problems and writing
              code. But deep down, I felt something was missing. I wanted to
              create things people could see, feel, and connect with.
            </p>

            <p className="motivation_pagaraph">
              Then one day, a friend introduced me to Figma. At first, it seemed
              like just another tool. But once I started experimenting, moving
              shapes, playing with colors, aligning elements, something clicked.
              I didn’t realize how much time had passed. Designing felt natural,
              exciting, even therapeutic. I could sit for hours without noticing
              the clock, fully lost in the process.
            </p>

            <p className="motivation_pagaraph">
              That curiosity turned into something much bigger. I began learning
              everything I could about UI/UX. No formal classes. Just pure
              drive. I read articles, watched tutorials, downloaded design
              eBooks, followed designers I admired, and practiced almost daily.
              What started as an interest quickly grew into a passion, and that
              passion became my path. I’m still learning, still exploring, and
              still just as excited as I was that very first day I opened Figma.
            </p>
          </div>

          <div className="mb-1 md:hidden lg:mb-[30px] flex items-center gap-x-[12px] mt-10 md:mt-0">
            <div className="w-[18px] h-[18px] rounded-full bg-white flex-shrink-0"></div>
            <h3 className="story_title flex-shrink-0">My motto</h3>
          </div>

          <p className="motivation_italic md:mt-5 lg:mt-[46px] self-start">
            “Design is not just what it looks like and feels like. Design is how
            it works."
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Motivation;
