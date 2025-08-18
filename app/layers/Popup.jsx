"use client";

import PopupImg from "@/public/popup.svg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../components/Container";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after page load
    setIsVisible(true);

    // No automatic timeout, only close on click

    // No timer cleanup needed
    return () => {};
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Container>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="popup_box fixed top-[40%]
             lg:top-1/2 lg:translate-y-[-85%] left-1/2 translate-x-[-50%] w-[96%] md:w-[677px] bg-[var(--color-white-solid)] text-black rounded-[12px] z-50 p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={PopupImg} alt="Popup Image" className="popup_image" />
            <h2 className="popup_heading mt-5 mb-2">
              Currently a Work In Progress
            </h2>
            <p className="popup_paragraph">
              My portfolio is currently a work in progress. Real-world projects
              will be added here soon. In the meantime, you can explore other
              concept-based designs on my
            </p>
            <Link
              href="https://www.behance.net/shahzahidnewaz"
              className="popup_link mt-6 my-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance profile: https://www.behance.net/shahzahidnewaz
            </Link>

            <p className="popup_thankyou">Thank you!</p>
            <button
              onClick={handleClose}
              className="popup_button mt-6 w-full bg-[#ffff] hover:bg-[var(--color-chartreuse-green-60)] py-[10px] rounded-[8px] cursor-pointer active:scale-95 transition-all"
            >
              I Understand
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Popup;
