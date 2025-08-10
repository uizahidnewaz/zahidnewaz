"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "/img1.webp",
  "/img2.webp",
  "/img3.webp",
  "/img4.webp",
  "/img5.webp",
  "/img6.webp",
  "/img7.webp",
];

const images2 = [
  "/img8.webp",
  "/img9.webp",
  "/img10.webp",
  "/img11.webp",
  "/img12.webp",
  "/img13.webp",
  "/img14.webp",
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
    <div
      id="projects"
      className="w-full overflow-hidden pt-[60px] xs:pt-[70px] sm:pt-[90px] md:pt-[100px] lg:pt-[120px] pb-[60px] xs:pb-[70px] sm:pb-[80px] md:pb-[90px] lg:pb-[96px] space-y-[24px] xs:space-y-[32px] sm:space-y-[40px] md:space-y-[48px]"
    >
      {/* Top Slider: Right to Left */}
      <div ref={topRef}>
        <motion.div
          initial={{ x: 0 }}
          animate={
            topAnimate
              ? {
                  x: ["0%", "-50%"],
                  transition: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }
              : {}
          }
          className="flex gap-x-[56px] w-max"
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={`top-${index}`}
              className="w-auto h-[150px] xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[385px] rounded-lg sm:rounded-xl overflow-hidden shadow-md flex-shrink-0"
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
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }
              : {}
          }
          className="flex gap-x-[56px] w-max"
        >
          {[...images2, ...images2].map((src, index) => (
            <div
              key={`bottom-${index}`}
              className="w-auto h-[385px] rounded-xl overflow-hidden shadow-md flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Bottom Image ${index}`}
                width={600}
                height={385}
                className="w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollTriggeredDoubleSlider;
