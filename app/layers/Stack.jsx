"use client";

import Canva from "@/public/canva.webp";
import Figma from "@/public/figma.webp";
import Framer from "@/public/framer.webp";
import Jira from "@/public/jira.webp";
import Notion from "@/public/notion.webp";
import Image from "next/image";
import Container from "../components/Container";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stackItems = [
  {
    src: Figma,
    alt: "figma",
    title: "Figma",
    subtitle: "Design Tool",
    description:
      "My go-to tool for UI/UX design, from wireframes to high-fidelity prototypes and also for graphic designing",
    imgClass: "h-full w-[70%] bg-cover",
  },
  {
    src: Canva,
    alt: "canva",
    title: "Canva",
    subtitle: "Design Tool",
    description:
      "I use it for fast, clean, and effective graphic design, especially for social media",
    imgClass: "w-full h-full bg-cover",
  },
  {
    src: Notion,
    alt: "notion",
    title: "Notion",
    subtitle: "For Note-taking and Documentation",
    description: "I rely on it for note-taking, and documenting design systems",
    imgClass: "w-full h-full bg-cover",
  },
  {
    src: Framer,
    alt: "framer",
    title: "Framer",
    subtitle: "Visual Design",
    description: "Currently learning it for no-code web development",
    imgClass: "w-[60%] h-full bg-cover",
  },
  {
    src: Jira,
    alt: "jira",
    title: "Jira",
    subtitle: "Project Management",
    description:
      "I use it for project management, tracking tasks and time, and organizing notes",
    imgClass: "w-full h-full bg-cover",
  },
];

const Stack = () => {
  const headingRef = useRef(null); // Sticky heading ref

  return (
    <>
      <Container className="pt-[60px] xs:pt-[70px] sm:pt-[90px] md:pt-[100px] lg:pt-[120px] pb-[60px] xs:pb-[70px] sm:pb-[80px] md:pb-[90px] lg:pb-[96px] flex flex-col md:flex-row items-start gap-x-[15px] sm:gap-x-[20px] md:gap-x-[25px] lg:gap-x-[30px] relative z-0">
        {/* Heading - sticky on md and above, normal on smaller screens */}
        <h2
          ref={headingRef}
          className="motivation_heading text-[45px] xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] md:sticky md:top-[100px] lg:top-[120px] z-20 mb-[40px] xs:mb-[50px] sm:mb-[60px] md:mb-0"
        >
          Favourite stack
        </h2>

        <div className="mt-0 md:mt-[200px] lg:mt-[290px] flex flex-col gap-y-[40px] xs:gap-y-[45px] sm:gap-y-[50px] md:gap-y-[56px] lg:gap-y-[64px] w-full md:w-auto">
          {stackItems.map((item, index) => {
            const itemRef = useRef(null);

            const { scrollYProgress } = useScroll({
              target: itemRef,
              offset: ["start center", "end start"], // triggers when passing the heading area
            });

            const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

            return (
              <motion.div
                key={item.title}
                ref={itemRef}
                style={{ opacity }}
                className="flex flex-col xs:flex-row items-start gap-x-4 xs:gap-x-5 sm:gap-x-6 md:gap-x-8 lg:gap-x-10"
              >
                <div className="flex-shrink-0 w-[40px] h-[40px] xs:w-[45px] xs:h-[45px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px] overflow-hidden flex items-center justify-center mb-3 xs:mb-0">
                  <Image
                    className={item.imgClass}
                    src={item.src}
                    alt={item.alt}
                    priority
                  />
                </div>
                <div>
                  <h3 className="stack_heading text-[22px] xs:text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px]">{item.title}</h3>
                  <h4 className="stack_subheading mt-[6px] xs:mt-[8px] sm:mt-[10px] mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                    {item.subtitle}
                  </h4>
                  <p className="story_pragraph text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[130%] xs:leading-[135%] sm:leading-[140%] md:leading-[145%] lg:leading-[150%]">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Stack;
