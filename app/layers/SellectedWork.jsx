"use client";
import Work1 from "@/public/work1.webp";
import Work2 from "@/public/work2.webp";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Container from "../components/Container";

const SellectedWork = () => {
  const sellectedref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sellectedref,
    offset: ["start end", "end start"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1.2, 1]), {
    stiffness: 200,
    damping: 30,
  });

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
    { stiffness: 200, damping: 30 }
  );
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <Container ref={sellectedref}>
      <div className="pt-[30px] xs:pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[30px] xs:pb-[40px] sm:pb-[50px] md:pb-[70px] lg:pb-[96px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-start text-left lg:text-left justify-between lg:gap-[58px]">
          <h2 className="work_heading text-[45px] xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] mb-4 xs:mb-5 sm:mb-6 lg:mb-0">
            Selected WORK
          </h2>
          <p className="work_pragraph text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[130%] xs:leading-[135%] sm:leading-[140%] md:leading-[145%] lg:leading-[150%] max-w-[95%] xs:max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[576px]">
            A few highlights from my recent work. Each one helped me grow and
            brought new insights into creating meaningful design.
          </p>
        </div>

        <motion.div
          style={{ opacity }}
          className="mt-[24px] xs:mt-[28px] sm:mt-[40px] md:mt-[60px] lg:mt-[80px] flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-[24px] xs:gap-[28px] sm:gap-[30px] md:gap-[35px] lg:gap-[30px] w-full"
        >
          <motion.div
            className="work_item cursor-pointer w-full lg:w-[48%]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-full aspect-[1.46/1] lg:h-[398px] overflow-hidden rounded-[3px] work_img">
              <Image
                className="w-full h-full object-contain lg:object-cover"
                src={Work1}
                alt="Wholesale business software"
              />
            </div>
            <div className="mt-2 xs:mt-2.5 sm:mt-3 lg:mt-4 flex justify-between items-center w-full">
              <h3 className="work_subtitle">Wholesale business software</h3>
              <p className="work_number">01</p>
            </div>
          </motion.div>
          <motion.div
            className="work_item cursor-pointer w-full lg:w-[48%]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-full aspect-[1.46/1] lg:h-[398px] overflow-hidden rounded-[3px] work_img">
              <Image
                className="w-full h-full object-contain lg:object-cover"
                src={Work2}
                alt="Hospital management system"
              />
            </div>
            <div className="mt-2 xs:mt-2.5 sm:mt-3 lg:mt-4 flex justify-between items-center w-full">
              <h3 className="work_subtitle">Hospital management system</h3>
              <p className="work_number">02</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default SellectedWork;
