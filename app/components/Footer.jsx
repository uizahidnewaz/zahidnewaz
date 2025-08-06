"use client";

import Arrow from "@/public/arrow.png";
import Newazls from "@/public/newazls.svg";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Container className="pt-[180px]">
      <motion.h2
        className="footer_heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Let’s connect
      </motion.h2>

      <motion.p
        className="footer_pagaraph mt-6 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Thank you for exploring my work and learning a bit about my journey. I’m
        always open to new opportunities, creative collaborations, or simply
        chatting about design, tech, or ideas
      </motion.p>

      <motion.div
        className="mb-[72px] flex items-center justify-center gap-x-[30px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {[
          ["Linkedin", "https://www.linkedin.com/in/shah-md-zahid-newaz/"],
          ["Behance", "https://www.behance.net/shahzahidnewaz"],
          ["Dribbble", "https://dribbble.com/Zahid_Newaz_25"],
          ["Instagram", "https://www.instagram.com/zahid_newaz?igsh=MTF0Y3Uyc2VwcWN4NA=="],
          ["Facebook", "https://www.facebook.com/shah.zahid.newaz"],
        ].map(([name, url]) => (
          <Link
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex item items-center gap-x-2"
          >
            <h3 className="footer_link">{name}</h3>
            <Image src={Arrow} alt="arrow" />
          </Link>
        ))}
      </motion.div>

      <hr />

      <motion.div
        className="py-8 flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="footer_copyright">©2025 design</div>
        <div className="flex items-center gap-x-2">
          <div>
            <Image src={Newazls} alt="Newazls" />
          </div>
          <Link href="#top" className="footer_copyright">
            BACK TO TOP
          </Link>
        </div>
      </motion.div>
    </Container>
  );
};

export default Footer;
