"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import Experience from "./layers/Experience";
import Hero from "./layers/Hero";
import Motivation from "./layers/Motivation";
import Stack from "./layers/Stack";
// import Makeit from "./assets/Makeit";
import "lenis/dist/lenis.css";
import ExperienceGallery from "./layers/ExperienceGallery";
import Makeit from "./layers/Makeit";
import SellectedWork from "./layers/SellectedWork";
import Story from "./layers/Story";
import StackImage from "./layers/StackImage";

const Page = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });
  });
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
      </div>
      <SellectedWork />
      <Story />
      <Makeit />
      <Motivation />
      <Experience />
      <ExperienceGallery />
      <Stack />
      <StackImage />
    </>
  );
};

export default Page;
