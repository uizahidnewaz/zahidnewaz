"use client";

import Blinto from "@/public/blinto.webp";
import Btrac from "@/public/btrac.webp";
import Image from "next/image";
import Container from "../components/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    logo: Blinto,
    alt: "blinto",
    company: "Blinto llc",
    date: "March 2025 - July 2025",
    position: "UI/UX Designer",
    description:
      "I worked closely with developers and directly communicated with clients to design both websites and software. Beyond UI/UX, I also contributed by creating blog graphics that aligned with the company’s content strategy.",
  },
  {
    logo: Btrac,
    alt: "btrac",
    company: "b-trac solutions ltd",
    date: "November 2024 - January 2025",
    position: "Graphic & UI/UX Designer Intern",
    description:
      "I collaborated with the Business Development team to support product promotion through graphic design for social media and marketing materials. I also contributed to the UI/UX team, where I worked on improving digital interfaces.",
  },
];

const Experience = () => {
  const containerRef = useRef(null);

  return (
    <Container className="pt-[120px] pb-[96px] flex items-start gap-x-[80px]">
      {/* Sticky heading */}
      <div className="sticky top-[120px] z-10">
        <h2 className="motivation_heading">experience</h2>
      </div>

      {/* Experience items */}
      <div
        ref={containerRef}
        className="mt-[202px] flex flex-col gap-y-[64px] relative"
      >
        {experiences.map((exp, index) => {
          const itemRef = useRef(null);

          const { scrollYProgress } = useScroll({
            target: itemRef,
            offset: ["start center", "end start"],
          });

          const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

          return (
            <motion.div
              key={index}
              ref={itemRef}
              style={{ opacity }}
              className="flex items-start gap-x-8"
            >
              <div className="flex-shrink-0 w-[48px] h-[44px] overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={exp.logo}
                  alt={exp.alt}
                />
              </div>
              <div>
                <h3 className="experience_heading">
                  {exp.company}
                  <span className="experience_date"> | {exp.date}</span>
                </h3>
                <h4 className="experience_subheading mt-3 mb-6">
                  {exp.position}
                </h4>
                <p className="story_pragraph">{exp.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
};

export default Experience;
