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
      <div className="pt-[120px] pb-[96px]">
        <div className="flex items-start justify-between gap-[58px]">
          <h2 className="work_heading">Selected WORK</h2>
          <p className="work_pragraph mt-2">
            A few highlights from my recent work. Each one helped me grow and
            brought new insights into creating meaningful design.
          </p>
        </div>

        <motion.div
          style={{ opacity }}
          className="mt-[80px] flex items-start justify-between gap-[58px]"
        >
          <motion.div
            className="work_item cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-[580px] h-[398px] overflow-hidden rounded-[3px] work_img">
              <Image className="w-full h-full bg-cover" src={Work1} alt="aa" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <h3 className="work_subtitle">Wholesale business software</h3>
              <p className="work_number">01</p>
            </div>
          </motion.div>
          <motion.div
            className="work_item cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-[580px] h-[398px] overflow-hidden rounded-[3px] work_img">
              <Image className="w-full h-full bg-cover" src={Work2} alt="aa" />
            </div>
            <div className="mt-4 flex justify-between items-center">
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
