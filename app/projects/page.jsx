"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import ExperienceGallery from "../layers/ExperienceGallery";
import getProjects from "../lib/getProjects";

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

  // Project data array
  // const projects = [
  //   {
  //     id: "01",
  //     title: "Wholesale business software",
  //     image: Work1,
  //     alt: "Wholesale business software",
  //     link: "/projects/wholesale",
  //   },
  //   {
  //     id: "02",
  //     title: "Hospital management system",
  //     image: Work2,
  //     alt: "Hospital management system",
  //     link: "/",
  //   },
  //   {
  //     id: "03",
  //     title: "E-commerce dashboard",
  //     image: Project1,
  //     alt: "E-commerce dashboard",
  //     link: "/",
  //   },
  //   {
  //     id: "04",
  //     title: "Mobile application UI",
  //     image: Img1,
  //     alt: "Mobile application UI",
  //     link: "/",
  //   },
  //   {
  //     id: "05",
  //     title: "SaaS platform redesign",
  //     image: Img2,
  //     alt: "SaaS platform redesign",
  //     link: "/",
  //   },
  //   {
  //     id: "06",
  //     title: "Fintech app design",
  //     image: Img3,
  //     alt: "Fintech app design",
  //     link: "/",
  //   },
  // ];
  let [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjects();
      console.log(projects);
      setProjects(projects);
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <h2 className="work_heading py-[96px] md:py-[80px] sm:py-[64px] xs:py-[48px]">
          Projects
        </h2>
        <div className="gallery" ref={sellectedref}>
          <div className="">
            <motion.div
              style={{ opacity }}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-[24px] xs:gap-[28px] sm:gap-[30px] md:gap-[35px] lg:gap-[30px] w-full flex-wrap"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="work_item cursor-pointer w-full lg:w-[48%]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  variants={childVariants}
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="block w-full aspect-[1.46/1] lg:h-[398px] md:h-[350px] sm:h-[300px] xs:h-[240px] overflow-hidden rounded-[3px] work_img"
                  >
                    <Image
                      className="w-full h-full object-fit-contain"
                      src={project?.image}
                      alt={project?.id}
                      quality={100}
                      width={1920}
                      height={1080}
                      priority={project.id === "01" || project.id === "02"}
                    />
                  </Link>
                  <div className="mt-2 xs:mt-2.5 sm:mt-3 lg:mt-4 flex justify-between items-center w-full">
                    <h3 className="work_subtitle">{project?.name}</h3>
                    <p className="work_number">
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
      <ExperienceGallery />
    </>
  );
};

export default page;
