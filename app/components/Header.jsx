"use client";

import { Menu, X } from "lucide-react";
// import * as motion from "motion/react-client";
import { motion } from "framer-motion";
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
        <ul className="flex space-x-[56px] items-center">
          <li>
            <Link className="navigation_text uppercase" href="/">
              ZAHID NEWAZ
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              className="navigation_text uppercase cursor-default"
              href="/projects"
            >
              DHAKA, BANGLADESH
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4 md:space-x-[56px]">
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-[56px]">
            <li>
              <Link className="navigation_text uppercase" href="#about">
                About
              </Link>
            </li>
            <li>
              <Link className="navigation_text uppercase" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <AnimatedLink href="#about">About 2</AnimatedLink>
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
          <Link
            className="navigation_text uppercase !text-[var(--primary)] pt-[10px] pb-3 px-4 bg-[#fff] rounded-[8px]"
            href="/projects"
          >
            Download CV
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            className="absolute top-full right-0 w-full bg-white px-6 py-5 shadow-lg rounded-md z-40 md:hidden"
          >
            <ul className="space-y-4 text-center">
              <li>
                <Link
                  className="navigation_text uppercase block !text-[var(--primary)]"
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="navigation_text uppercase block !text-[var(--primary)]"
                  href="/projects"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </Container>
    </motion.div>
  );
};

export default Header;
