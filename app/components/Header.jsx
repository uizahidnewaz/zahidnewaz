"use client";

import { Menu, X } from "lucide-react";
// import * as motion from "motion/react-client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import AnimatedLink from "../layers/AnimatedLink";
import Container from "./Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1], delay: 0 }}
    >
      <Container className="flex justify-between items-center py-5 relative">
        {/* Left Side */}
        <ul className="flex sm:space-x-[56px] items-center">
          <li>
            {/* <Link className="navigation_text uppercase" href="/">
              ZAHID NEWAZ
            </Link> */}
            <AnimatedLink href="/">Zahid Newaz</AnimatedLink>
          </li>
          <li className="hidden md:block">
            <p className="navigation_text uppercase cursor-default">
              DHAKA, BANGLADESH
            </p>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4 md:space-x-[56px]">
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-[56px]">
            {/* <li>
              <Link className="navigation_text uppercase" href="#about">
                About
              </Link>
            </li> */}
            <li>
              <AnimatedLink href="//#about">About</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/projects">Projects</AnimatedLink>
            </li>
          </ul>

          {/* Menu Toggle - Mobile Only */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Download CV - Always Visible */}
          <a
            className="navigation_text uppercase !text-[var(--primary)] pt-[10px] pb-3 px-4 bg-[#fff] hover:bg-[#B8FF34] rounded-[8px] inline-block"
            href="/zahidnewaz.pdf"
            download="Zahid_Newaz_CV.pdf"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.95 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5,
              }}
              className="absolute top-full right-0 w-full bg-white px-6 py-5 shadow-lg rounded-md z-40 md:hidden"
            >
              <ul className="space-y-4 text-center">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <Link
                    className="navigation_text uppercase block !text-[var(--primary)]"
                    href="//#about"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Link
                    className="navigation_text uppercase block !text-[var(--primary)]"
                    href="/projects"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.div>
  );
};

export default Header;
