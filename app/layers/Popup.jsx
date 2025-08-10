"use client";

import Link from "next/link";
import PopupImg from "@/public/popup.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after page load
    setIsVisible(true);

    // Set a timer to hide the popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // 10 seconds

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="popup_box fixed bottom-10 left-10 w-[677px] bg-[var(--color-white-solid)] text-black rounded-[12px] z-50 p-6 shadow-lg"
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
          >
            Behance profile: https://www.behance.net/shahzahidnewaz
          </Link>

          <p className="popup_thankyou">Thank you!</p>
          <button
            onClick={handleClose}
            className="popup_button mt-6 w-full bg-[var(--color-chartreuse-green-60)] py-[10px] rounded-[8px] cursor-pointer border-1 border-transparent hover:border-[black] transition-colors"
          >
            I Understand
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
