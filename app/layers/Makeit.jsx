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
      className="makeit relative w-full"
    >
      {/* For screens below lg */}
      <div className="block lg:hidden w-full">
        <Image
          className="w-full h-auto"
          src={MakeitImg}
          alt="makeit"
          priority
        />
      </div>

      {/* For lg screens and above */}
      <div className="hidden lg:block h-[970px]">
        <Image
          className="w-full h-full object-cover"
          src={MakeitImg}
          alt="makeit"
          priority
        />
      </div>
    </motion.div>
  );
};

export default Makeit;
