"use client";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div>
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
      >
        <motion.span
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="block overflow-hidden"
        >
          Top part of text
        </motion.span>

        <motion.span
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.8, 0.25, 1],
            delay: 0.3, // delay for stagger
          }}
          className="block overflow-hidden"
        >
          Bottom part of text
        </motion.span>
      </motion.div>
    </div>
  );
};

export default page;
