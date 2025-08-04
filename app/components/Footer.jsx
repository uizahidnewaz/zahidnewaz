import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-[180px]">
      <h2 className="footer_heading">Let’s connect</h2>
      <p className="footer_pagaraph">
        Thank you for exploring my work and learning a bit about my journey. I’m
        always open to new opportunities, creative collaborations, or simply
        chatting about design, tech, or ideas
      </p>
      <div className="flex items-center justify-center gap-x-[20px]">
        <Link className="footer_link" href="/" className="">
          a
        </Link>
        <Link className="footer_link" href="/" className="">
          a
        </Link>
        <Link className="footer_link" href="/" className="">
          a
        </Link>
        <Link className="footer_link" href="/" className="">
          a
        </Link>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <div className="footer_copyright">design</div>
        <div className="flex items-center gap-x-2">
          <div className="">a</div>
          <p className="footer_copyright">BACK TO TOP</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
