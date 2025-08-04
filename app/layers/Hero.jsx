"use client";

import Hi from "@/public/hi.svg";
import Newazls from "@/public/newazls.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";

// Motion variants for staggering effect
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

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
  return (
    <Container
      id="top"
      className="py-24 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-0"
    >
      {/* Left Text Content */}
      <div className="mt-10 lg:mt-[235px] text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-x-2">
          <Image className="h-[30px] w-[30px]" src={Hi} alt="Hi" />
          <h3 className="hero_title text-xl sm:text-2xl">Hi, I am</h3>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="mt-3"
        >
          <motion.div variants={childVariants} className="hero_heading text-4xl sm:text-5xl font-bold">
            Zahid
          </motion.div>

          <motion.div
            variants={childVariants}
            className="flex items-end justify-center lg:justify-start gap-x-2"
          >
            <h1 className="hero_heading text-4xl sm:text-5xl font-bold">
              Newaz
            </h1>
            <Image
              src={Newazls}
              alt="Newazls"
              className="inline-block w-[80px] h-[40px] sm:w-[100px] sm:h-[50px]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Video Content */}
      <div className="w-full max-w-sm">
        <div className="w-[296px] h-[192px] aspect-video rounded-md overflow-hidden">
          <video
            src="/works.mp4"
            poster="/place1.png"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <Link
          href="/"
          className="hero_click inline-block py-3 px-4 bg-[var(--color-chartreuse-green-60)] rounded-md mt-6 text-center w-full lg:w-auto"
        >
          SEE ALL PROJECTS
        </Link>
      </div>
    </Container>
  );
};

export default Hero;
