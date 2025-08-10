"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Container from "../components/Container";

// Variants
const containerVariants = {
  hidden: { opacity: 0.4, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0.3, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Story = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  // Track visibility every time it enters or leaves with smoother fade
  const inView = useInView(ref, { margin: "-30% 0% -30% 0%", once: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
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
      >
        <motion.h2
          variants={childVariants}
          className="story_heading text-center md:text-left text-[45px] xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]"
        >
          In A Few Words{" "}
        </motion.h2>

        {/* About Me */}
        <motion.div
          variants={childVariants}
          className="mt-[40px] sm:mt-[60px] md:mt-[84px] flex flex-col md:flex-row justify-between items-center md:items-start gap-y-6 md:gap-x-[80px]"
        >
          <div className="flex items-center gap-x-[8px] xs:gap-x-[10px] sm:gap-x-[12px] mb-4 md:mb-0">
            <div className="flex-shrink-0 w-[12px] h-[12px] xs:w-[14px] xs:h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] rounded-full !bg-[#fff]" />
            <h3 className="story_title text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] flex-shrink-0">
              About me
            </h3>
          </div>
          <div className="text-center md:text-left">
            <p className="story_pragraph text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[130%] xs:leading-[135%] sm:leading-[140%] md:leading-[145%] lg:leading-[150%]">
              I'm Shah Md. Zahid Newaz. I studied at Rajuk Uttara Model College,
              then went on to complete my BSc in Computer Science and
              Engineering from North South University. For a long time, I
              thought my path was already set—lines of code, system design,
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
          className="mt-[40px] sm:mt-[60px] md:mt-[84px] flex flex-col md:flex-row justify-between items-center md:items-start gap-y-6 md:gap-x-[80px]"
        >
          <div className="flex items-center gap-x-[8px] xs:gap-x-[10px] sm:gap-x-[12px] mb-4 md:mb-0">
            <div className="flex-shrink-0 w-[12px] h-[12px] xs:w-[14px] xs:h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] rounded-full !bg-[#fff]" />
            <h3 className="story_title text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] flex-shrink-0">
              My mission
            </h3>
          </div>
          <p className="story_pragraph text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[130%] xs:leading-[135%] sm:leading-[140%] md:leading-[145%] lg:leading-[150%] text-center md:text-left">
            My mission is to make people's lives easier through thoughtful
            design and to create experiences that users genuinely enjoy.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Story;
