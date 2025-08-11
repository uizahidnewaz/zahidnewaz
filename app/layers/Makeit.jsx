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
      className="makeit relative w-full overflow-hidden py-[20px] sm:py-[30px] md:py-[40px] lg:py-[60px]"
    >
      {/* Responsive image display for all screen sizes */}
      <div className="w-full">
        <Image
          className="w-full h-auto object-contain sm:object-cover"
          src={MakeitImg}
          alt="makeit"
          width={2880}
          height={1472}
          sizes="100vw"
          priority
        />
      </div>
    </motion.div>
  );
};

export default Makeit;
