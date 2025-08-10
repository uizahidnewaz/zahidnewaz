"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import StackImages from "@/public/stack.webp";
import Image from "next/image";
import { useRef } from "react";

const StackImage = () => {
  const stackRef = useRef(null);

  // Scroll-based image scale animation
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start end", "end start"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1.2, 1]), {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  });

  return (
    <>
      {/* Final image section */}
      <motion.div
        ref={stackRef}
        style={{ scale }}
        className="py-4 xs:py-5 sm:py-6 md:py-7 lg:py-8 h-[300px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[736px] xl:h-[870px]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          className="w-full h-full object-cover bg-cover"
          src={StackImages}
          alt="stack"
          priority
        />
      </motion.div>
    </>
  );
};

export default StackImage;
