import Arrow from "@/public/arrow.png";
import Newazls from "@/public/newazls.svg";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <Container className="pt-[180px]">
      <h2 className="footer_heading">Let’s connect</h2>
      <p className="footer_pagaraph mt-6 mb-10">
        Thank you for exploring my work and learning a bit about my journey. I’m
        always open to new opportunities, creative collaborations, or simply
        chatting about design, tech, or ideas
      </p>
      <div className="mb-[72px] flex items-center justify-center gap-x-[30px]">
        <Link href="/" className="flex item items-center gap-x-2">
          <h3 className="footer_link">Linkedin</h3>
          <Image src={Arrow} alt="arrow" />
        </Link>
        <Link href="/" className="flex item items-center gap-x-2">
          <h3 className="footer_link">Behance</h3>
          <Image src={Arrow} alt="arrow" />
        </Link>
        <Link href="/" className="flex item items-center gap-x-2">
          <h3 className="footer_link">Dribbble</h3>
          <Image src={Arrow} alt="arrow" />
        </Link>
        <Link href="/" className="flex item items-center gap-x-2">
          <h3 className="footer_link">Instagram</h3>
          <Image src={Arrow} alt="arrow" />
        </Link>
        <Link href="/" className="flex item items-center gap-x-2">
          <h3 className="footer_link">Facebook</h3>
          <Image src={Arrow} alt="arrow" />
        </Link>
      </div>
      <hr />
      <div className="py-8 flex items-center justify-between">
        <div className="footer_copyright">©2025 design</div>
        <div className="flex items-center gap-x-2">
          <div className="">
            <Image src={Newazls} alt="Newazls" />
          </div>
          <Link href="#top" className="footer_copyright">BACK TO TOP</Link>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
