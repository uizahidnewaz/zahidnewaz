"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Container from "../components/Container";

// Variants with smoother transitions
const containerVariants = {
  hidden: { opacity: 0.4, y: 50 },
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

const Story = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  // Track visibility with a more gentle threshold for smoother animations and better locking
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
    <Container id="about">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="story pt-[40px] sm:pt-[60px] md:pt-[120px] pb-[30px] sm:pb-[50px] md:pb-[96px]"
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          perspective: 1000,
        }}
        layoutId="storySection" // Helps Framer Motion track this component uniquely
      >
        <motion.h2
          variants={childVariants}
          className="story_heading text-left md:text-left text-[45px] xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]"
        >
          In A Few Words{" "}
        </motion.h2>

        {/* About Me */}
        <motion.div
          variants={childVariants}
          className="mt-[40px] sm:mt-[60px] md:mt-[84px] flex flex-col md:flex-row justify-between items-start md:items-start gap-y-1 sm:gap-y-2 md:gap-x-[80px]"
        >
          <div
            className="flex items-center gap-x-[8px] xs:gap-x-[10px] sm:gap-x-[12px] mb-1
           lg:mb-4 md:mb-0"
          >
            <div className="flex-shrink-0 w-[12px] h-[12px] xs:w-[14px] xs:h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] rounded-full !bg-[#fff]" />
            <h3 className="story_title text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] flex-shrink-0">
              About me
            </h3>
          </div>
          <div className="text-left md:text-left">
            <p className="story_pragraph text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[130%] xs:leading-[135%] sm:leading-[140%] md:leading-[145%] lg:leading-[150%]">
              I'm Shah Md. Zahid Newaz. I studied at Rajuk Uttara Model College,
              then went on to complete my BSc in Computer Science and
              Engineering from North South University. For a long time, I
              thought my path was already set, lines of code, system design,
              maybe software development.
            </p>
            <p className="story_pragraph text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[130%] xs:leading-[135%] sm:leading-[140%] md:leading-[145%] lg:leading-[150%] mt-[15px] xs:mt-[18px] sm:mt-[20px] md:mt-[25px] lg:mt-[30px]">
              My journey into design began at the end of 2023, when I discovered
              a deep interest in creating user-friendly and visually engaging
              digital experiences. Since then, I've been learning and growing
              every day, exploring UI/UX principles, studying real-world
              products, and building designs that solve real problems. I believe
              in continuous learning, and thoughtful design.
            </p>
          </div>
        </motion.div>

        {/* My Mission */}
        <motion.div
          variants={childVariants}
          className="mt-[40px] sm:mt-[60px] md:mt-[84px] flex flex-col md:flex-row justify-between items-start md:items-start gap-y-1 sm:gap-y-2
           md:gap-x-[80px]"
        >
          <div
            className="flex items-center gap-x-[8px] xs:gap-x-[10px] sm:gap-x-[12px] mb-1
           lg:mb-4 md:mb-0"
          >
            <div className="flex-shrink-0 w-[12px] h-[12px] xs:w-[14px] xs:h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] rounded-full !bg-[#fff]" />
            <h3 className="story_title text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] flex-shrink-0">
              My mission
            </h3>
          </div>
          <p className="story_pragraph text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[130%] xs:leading-[135%] sm:leading-[140%] md:leading-[145%] lg:leading-[150%] text-left md:text-left">
            My mission is to make people's lives easier through thoughtful
            design and to create experiences that users genuinely enjoy.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Story;
