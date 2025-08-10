"use client";

import Blinto from "@/public/blinto.webp";
import Btrac from "@/public/btrac.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Container from "../components/Container";

const experiences = [
  {
    logo: Blinto,
    alt: "blinto",
    company: "Blinto llc",
    date: "Mar 2025 - Jul 2025",
    position: "UI/UX Designer",
    description:
      "I worked closely with developers and directly communicated with clients to design both websites and software. Beyond UI/UX, I also contributed by creating blog graphics that aligned with the company’s content strategy.",
  },
  {
    logo: Btrac,
    alt: "btrac",
    company: "b-trac solutions ltd",
    date: "Nov 2024 - Jan 2025",
    position: "Graphic & UI/UX Designer Intern",
    description:
      "I collaborated with the Business Development team to support product promotion through graphic design for social media and marketing materials. I also contributed to the UI/UX team, where I worked on improving digital interfaces.",
  },
];

const Experience = () => {
  const containerRef = useRef(null);

  return (
    <Container className="pt-[40px] sm:pt-[60px] md:pt-[120px] pb-[30px] sm:pb-[50px] md:pb-[96px] flex flex-col md:flex-row items-center md:items-start gap-y-8 md:gap-x-[80px]">
      {/* Heading - sticky on md and up, normal on mobile */}
      <div className="md:sticky md:top-[120px] z-10 text-center md:text-left mb-8 md:mb-0">
        <h2 className="motivation_heading text-[45px] xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]">
          experience
        </h2>
      </div>

      {/* Experience items */}
      <div
        ref={containerRef}
        className="mt-0 md:mt-[202px] flex flex-col gap-y-[40px] md:gap-y-[64px] relative w-full md:w-auto"
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
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-y-4 sm:gap-x-6 md:gap-x-8"
            >
              <div className="flex-shrink-0 w-[40px] h-[36px] xs:w-[44px] xs:h-[40px] sm:w-[48px] sm:h-[44px] overflow-hidden mb-2 sm:mb-0">
                <Image
                  className="w-full h-full object-cover"
                  src={exp.logo}
                  alt={exp.alt}
                  priority
                />
              </div>
              <div>
                <h3 className="experience_heading text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] flex flex-col sm:flex-row items-center sm:items-baseline">
                  {exp.company}
                  <span className="experience_date text-[15px] xs:text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] block sm:inline mt-1 sm:mt-0">
                    {" "}
                    | {exp.date}
                  </span>
                </h3>
                <h4 className="experience_subheading text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-2 sm:mt-3 mb-4 sm:mb-6">
                  {exp.position}
                </h4>
                <p className="story_pragraph text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[130%] xs:leading-[135%] sm:leading-[140%] md:leading-[145%] lg:leading-[150%] max-w-[90%] sm:max-w-none mx-auto sm:mx-0">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
};

export default Experience;
