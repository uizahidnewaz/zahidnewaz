"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const images = [
  "/img1.webp",
  "/img2.webp",
  "/img3.webp",
  "/img4.webp",
  "/img5.webp",
  "/img6.webp",
  "/img7.webp",
];

const ScrollTriggeredDoubleSlider = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const isTopInView = useInView(topRef, { once: true });
  const isBottomInView = useInView(bottomRef, { once: true });

  const [topAnimate, setTopAnimate] = useState(false);
  const [bottomAnimate, setBottomAnimate] = useState(false);

  useEffect(() => {
    if (isTopInView) setTopAnimate(true);
    if (isBottomInView) setBottomAnimate(true);
  }, [isTopInView, isBottomInView]);

  return (
    <div className="w-full overflow-hidden pt-[120px] pb-[96px] space-y-[48px]">
      {/* Top Slider: Right to Left */}
      <div ref={topRef}>
        <motion.div
          initial={{ x: 0 }}
          animate={
            topAnimate
              ? {
                  x: ["0%", "-50%"],
                  transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }
              : {}
          }
          className="flex gap-x-[56px] w-max"
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={`top-${index}`}
              className="w-[600px] h-[385px] rounded-xl overflow-hidden shadow-md flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Top Image ${index}`}
                width={600}
                height={385}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Slider: Left to Right */}
      <div ref={bottomRef}>
        <motion.div
          initial={{ x: "-50%" }}
          animate={
            bottomAnimate
              ? {
                  x: ["-50%", "0%"],
                  transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }
              : {}
          }
          className="flex gap-x-[56px] w-max"
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={`bottom-${index}`}
              className="w-[600px] h-[385px] rounded-xl overflow-hidden shadow-md flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Bottom Image ${index}`}
                width={600}
                height={385}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollTriggeredDoubleSlider;
