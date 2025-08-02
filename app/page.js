"use client";
import Hi from "@/public/hi.svg";
import Newazls from "@/public/newazls.svg";
import Place1 from "@/public/place1.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./components/Container";
const page = () => {
  return (
    <Container className="py-[96px] flex justify-between items-start">
      <div className="mt-[218px]">
        <div className="flex items-center gap-x-2">
          <Image className="h-[30px] w-[30px]" src={Hi} alt="Hi" />
          <h3 className="hero_title">Hi, I am</h3>
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="mt-[12px]"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="hero_heading"
          >
            Zahid
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.8, 0.25, 1],
              delay: 0.3, // delay for stagger
            }}
            className="flex items-end"
          >
            <h1 className="hero_heading">Newaz</h1>
            <Image
              src={Newazls}
              alt="Newazls"
              className="inline-block w-[100px] h-[50px]"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="">
        <Image src={Place1} alt="Place1" className="" />
      </div>
    </Container>
  );
};

export default page;
