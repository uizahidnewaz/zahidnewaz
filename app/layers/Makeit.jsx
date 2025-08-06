"use client";

import MakeitImg from "@/public/makeit.webp";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Makeit = () => {
  const makeitRef = useRef(null);

  // Scroll-based image scale animation
  const { scrollYProgress } = useScroll({
    target: makeitRef,
    offset: ["start end", "end start"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1.2, 1]), {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  });

  return (
    <motion.div
      ref={makeitRef}
      style={{ scale }}
      className="makeit py-18 h-[736px] lg:h-[820px]"
    >
      {/* <Makeit /> */}
      <Image className="w-full h-full bg-cover" src={MakeitImg} alt="makeit" />
    </motion.div>
  );
};

export default Makeit;
