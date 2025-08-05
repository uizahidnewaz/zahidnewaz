"use client";
import Makeit from "@/public/makeit.webp";
import Work1 from "@/public/work1.webp";
import Work2 from "@/public/work2.webp";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect } from "react";
import Container from "./components/Container";
import Experience from "./layers/Experience";
import Hero from "./layers/Hero";
import Motivation from "./layers/Motivation";
import Stack from "./layers/Stack";
// import Makeit from "./assets/Makeit";
import { useScroll } from "framer-motion";
import "lenis/dist/lenis.css";

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
      <Hero />
      {/* <Container id="top" className="py-24 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-0">
        <div className="mt-10 lg:mt-[235px] text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-x-2">
            <Image className="h-[30px] w-[30px]" src={Hi} alt="Hi" />
            <h3 className="hero_title text-xl sm:text-2xl">Hi, I am</h3>
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
            className="mt-3"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="hero_heading text-4xl sm:text-5xl font-bold"
            >
              Zahid
            </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.8, 0.25, 1],
                delay: 0.2,
              }}
              className="flex items-end justify-center lg:justify-start gap-x-2"
            >
              <h1 className="hero_heading text-4xl sm:text-5xl font-bold">
                Newaz
              </h1>
              <Image
                src={Newazls}
                alt="Newazls"
                className="inline-block w-[80px] h-[40px] sm:w-[100px] sm:h-[50px]"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full max-w-sm">
          <div className="w-[296px] h-[192px] aspect-video rounded-md overflow-hidden">
            <video
              src="/works.mp4"
              poster="/place1.png"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <Link
            href="/"
            className="hero_click inline-block py-3 px-4 bg-[var(--color-chartreuse-green-60)] rounded-md mt-6 text-center w-full lg:w-auto"
          >
            SEE ALL PROJECTS
          </Link>
        </div>
      </Container> */}

      <Container>
        <div className="pt-[120px] pb-[96px]">
          <div className="flex items-start justify-between gap-[58px]">
            <h2 className="work_heading">Selected WORK</h2>
            <p className="work_pragraph mt-2">
              A few highlights from my recent work. Each one helped me grow and
              brought new insights into creating meaningful design.
            </p>
          </div>

          <div className="mt-[80px] flex items-start justify-between gap-[58px]">
            <div className="">
              <div className="w-[580px] h-[398px] overflow-hidden rounded-[3px] work_img">
                <Image
                  className="w-full h-full bg-cover"
                  src={Work1}
                  alt="aa"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="work_subtitle">Wholesale business software</h3>
                <p className="work_number">01</p>
              </div>
            </div>
            <div className="">
              <div className="w-[580px] h-[398px] overflow-hidden rounded-[3px] work_img">
                <Image
                  className="w-full h-full bg-cover"
                  src={Work2}
                  alt="aa"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="work_subtitle">Hospital management system</h3>
                <p className="work_number">02</p>
              </div>
            </div>
          </div>
        </div>
        <div className="story pt-[120px] pb-[96px]">
          <h2 className="story_heading">My Side of the Story</h2>
          <div className="mt-[84px] flex justify-between items-start gap-x-[80px]">
            <div className="flex items-center gap-x-[12px]">
              <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full !bg-[#fff]"></div>
              <h3 className="story_title flex-shrink-0">About me</h3>
            </div>
            <div className="">
              <p className="story_pragraph">
                I'm Shah Md. Zahid Newaz. I studied at Rajuk Uttara Model
                College, then went on to complete my BSc in Computer Science and
                Engineering from North South University. For a long time, I
                thought my path was already set, lines of code, system design,
                maybe software development.
              </p>
              <p className="story_pragraph mt-[30px]">
                {" "}
                My journey into design began at the end of 2023, when I
                discovered a deep interest in creating user-friendly and
                visually engaging digital experiences. Since then, I’ve been
                learning and growing every day, exploring UI/UX principles,
                studying real-world products, and building designs that solve
                real problems. I believe in continuous learning, and thoughtful
                design.
              </p>
            </div>
          </div>
          <div className="mt-[84px] flex justify-between items-start gap-x-[80px]">
            <div className="flex items-center gap-x-[12px]">
              <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full !bg-[#fff]"></div>
              <h3 className="story_title flex-shrink-0">My mission</h3>
            </div>
            <p className="story_pragraph">
              My mission is to make people’s lives easier through thoughtful
              design and to create experiences that users genuinely enjoy
            </p>
          </div>
        </div>
      </Container>
      <div className="makeit py-18 h-[800px]">
        {/* <Makeit /> */}
        <Image className="w-full h-full bg-cover" src={Makeit} alt="makeit" />
      </div>
      <Motivation />
      <Experience />
      <Stack />
    </>
  );
};

export default Page;
