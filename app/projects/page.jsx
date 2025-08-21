"use client";
import Work1 from "@/public/work1.webp";
import Work2 from "@/public/work2.webp";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Container from "../components/Container";

const page = () => {
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
    <Container>
      <h2 className="work_heading py-[96px]">Projects</h2>
      <div className="gallery" ref={sellectedref}>
        <div className="">
          <motion.div
            style={{ opacity }}
            className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-[24px] xs:gap-[28px] sm:gap-[30px] md:gap-[35px] lg:gap-[30px] w-full"
          >
            <motion.div
              className="work_item cursor-pointer w-full lg:w-[48%]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link
                href="/projects/wholesale"
                className="block w-full aspect-[1.46/1] lg:h-[398px] overflow-hidden rounded-[3px] work_img"
              >
                <Image
                  className="w-full h-full object-contain lg:object-cover"
                  src={Work1}
                  alt="Wholesale business software"
                />
              </Link>
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
              <Link
                href="/"
                className="block w-full aspect-[1.46/1] lg:h-[398px] overflow-hidden rounded-[3px] work_img"
              >
                <Image
                  className="w-full h-full object-contain lg:object-cover"
                  src={Work2}
                  alt="Hospital management system"
                />
              </Link>
              <div className="mt-2 xs:mt-2.5 sm:mt-3 lg:mt-4 flex justify-between items-center w-full">
                <h3 className="work_subtitle">Hospital management system</h3>
                <p className="work_number">02</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default page;
