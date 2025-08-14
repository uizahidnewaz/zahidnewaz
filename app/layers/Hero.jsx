"use client";

import Hi from "@/public/hi.svg";
import Newaz from "@/public/newaz.webp";
import Newazls from "@/public/newazls.svg";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Container from "../components/Container";

// Container animation (for staggering children)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Children animation variant
const childVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const Hero = () => {
  const heroref = useRef(null); // Main container ref (for scrollYProgress)
  const herotextRef = useRef(null); // Text container ref (for inView)

  // Scroll-based image scale animation
  const { scrollYProgress } = useScroll({
    target: heroref,
    offset: ["start start", "end start"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1.2, 1]), {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  });

  // Text animation on in-view
  const controls = useAnimation();
  const isInView = useInView(herotextRef, {
    margin: "-100px",
    once: false,
  });

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    } else {
      controls.start("hidden"); // Reset if out of view (optional)
    }
  }, [isInView, controls]);

  return (
    <>
      <Container
        id="top"
        ref={heroref}
        className="py-12 md:py-24 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 md:gap-12 lg:gap-0"
      >
        {/* Left Text Content */}
        <div className="mt-6 md:mt-10 lg:mt-[235px] text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-x-2">
            <Image
              className="h-[24px] w-[24px] md:h-[30px] md:w-[30px]"
              src={Hi}
              alt="Hi"
            />
            <h3 className="hero_title text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Hi, I am
            </h3>
          </div>

          {/* Animated Text Block */}
          <motion.div
            ref={herotextRef}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="mt-2 md:mt-3"
          >
            <motion.div
              variants={childVariants}
              className="hero_heading text-[50px] xs:text-[60px] sm:text-[70px] md:text-[100px] lg:text-[150px] font-bold leading-[0.9]"
            >
              Zahid
            </motion.div>

            <motion.div
              variants={childVariants}
              className="relative flex items-end justify-center lg:justify-start gap-x-2"
            >
              <h1 className="hero_heading text-[50px] xs:text-[60px] sm:text-[70px] md:text-[100px] lg:text-[150px] font-bold leading-[0.9]">
                Newaz
              </h1>
              <Image
                src={Newazls}
                alt="Newazls"
                className="absolute -right-[60px] sm:left-[320px] md:left-[420px] lg:static inline-block w-[60px] h-[30px] sm:w-[70px] sm:h-[35px] md:w-[80px] md:h-[40px]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Video Content */}
        <div className="w-full flex bg-red-500 justify-center lg:justify-end max-w-[280px] sm:max-w-sm mt-6 md:mt-0">
          <div className="flex flex-col items-center lg:items-end w-full">
            <div className="w-full max-w-[244px] h-[160px] sm:h-[192px] aspect-video rounded-md overflow-hidden">
              <video
                src="/works.mp4"
                poster="/place1.png"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-fit-contain"
              />
            </div>
            <Link
              href="#projects"
              className="hero_click inline-block py-2 md:py-3 px-3 md:px-4 bg-[var(--color-chartreuse-green-60)] rounded-md mt-4 md:mt-6 text-center max-w-[244px] w-full !hover:bg-[#A6FF00]"
            >
              SEE ALL PROJECTS
            </Link>
          </div>
        </div>
      </Container>

      {/* Scroll-based Image Animation */}
      <motion.div
        style={{ scale }}
        className="h-[400px] xs:h-[500px] sm:h-[600px] md:h-[736px] lg:h-[840px] w-full pt-4 md:pt-8 block"
      >
        <Image className="bg-cover" src={Newaz} alt="Zahid Newaz" />
      </motion.div>
    </>
  );
};

export default Hero;
