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

const ExperienceGallery = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const isTopInView = useInView(topRef, { once: true });
  const isBottomInView = useInView(bottomRef, { once: true });

  const [topAnimate, setTopAnimate] = useState(false);
  const [bottomAnimate, setBottomAnimate] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(40);

  useEffect(() => {
    if (isTopInView) setTopAnimate(true);
    if (isBottomInView) setBottomAnimate(true);

    // Adjust animation speed based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAnimationDuration(30); // Adjusted speed for mobile
      } else {
        setAnimationDuration(50); // Slower, smoother animation for desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isTopInView, isBottomInView]);

  return (
    <div
      id="projects"
      className="w-full overflow-hidden pt-[60px] xs:pt-[70px] sm:pt-[90px] md:pt-[100px] lg:pt-[120px] pb-[60px] xs:pb-[70px] sm:pb-[80px] md:pb-[90px] lg:pb-[96px] space-y-[16px] xs:space-y-[20px] sm:space-y-[28px] md:space-y-[36px] lg:space-y-[48px] px-4 sm:px-6 md:px-8 lg:px-0"
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
                    duration: animationDuration,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0,
                  },
                }
              : {}
          }
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          className="flex gap-x-[24px] xs:gap-x-[32px] sm:gap-x-[40px] md:gap-x-[48px] lg:gap-x-[56px] w-max"
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={`top-${index}`}
              className="w-[200px] xs:w-[250px] sm:w-[320px] md:w-[400px] lg:w-auto h-[150px] xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[385px] rounded-lg sm:rounded-xl overflow-hidden shadow-md flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Top Image ${index}`}
                width={600}
                height={385}
                className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
                loading="eager"
                priority={index < 3}
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
                    duration: animationDuration,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0,
                  },
                }
              : {}
          }
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          className="flex gap-x-[24px] xs:gap-x-[32px] sm:gap-x-[40px] md:gap-x-[48px] lg:gap-x-[56px] w-max"
        >
          {[...images2, ...images2].map((src, index) => (
            <div
              key={`bottom-${index}`}
              className="w-[200px] xs:w-[250px] sm:w-[320px] md:w-[400px] lg:w-auto h-[150px] xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[385px] rounded-lg sm:rounded-xl overflow-hidden shadow-md flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Bottom Image ${index}`}
                width={600}
                height={385}
                className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
                loading="eager"
                priority={index < 3}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceGallery;
