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
      <Container className="pt-[120px] pb-[96px] flex items-start gap-x-[15px] relative z-0">
        {/* Sticky heading */}
        <h2
          ref={headingRef}
          className="motivation_heading sticky top-[80px] z-20"
        >
          Favourite stack
        </h2>

        <div className="mt-[290px] flex flex-col gap-y-[64px]">
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
                className="flex items-start gap-x-8"
              >
                <div className="flex-shrink-0 w-[50px] h-[50px] overflow-hidden flex items-center justify-center">
                  <Image
                    className={item.imgClass}
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
                <div>
                  <h3 className="stack_heading">{item.title}</h3>
                  <h4 className="stack_subheading mt-[10px] mb-6">
                    {item.subtitle}
                  </h4>
                  <p className="story_pragraph">{item.description}</p>
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
