import * as motion from "motion/react-client";
import Link from "next/link";
import Container from "./Container";
const Header = () => {
  return (
    <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <Container className="flex justify-between items-center py-5">
        <ul className="flex space-x-[56px]">
          <li>
            <Link className="navigation_text uppercase" href="/about">
              ZAHID NEWAZ
            </Link>
          </li>
          <li>
            <Link className="navigation_text uppercase" href="/projects">
              DHAKA, BANGLADESH
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-[56px]">
          <li>
            <Link className="navigation_text uppercase" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navigation_text uppercase" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="navigation_text !text-[var(--primary)] pt-[10px] pb-3 px-4 bg-[#fff] rounded-[8px]" href="/projects">
              Download CV
            </Link>
          </li>
        </ul>
      </Container>
    </motion.div>
  );
};

export default Header;
