import * as motion from "motion/react-client";
import Link from "next/link";
import Container from "./Container";
const Header = () => {
  return (
    <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <Container className="flex justify-between items-center py-4">
        <ul className="flex space-x-[56px]">
          <li>
            <Link className="navigation_text" href="/about">
              ZAHID NEWAZ
            </Link>
          </li>
          <li>
            <Link className="navigation_text" href="/projects">
              DHAKA, BANGLADESH
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-[56px]">
          <li>
            <Link className="navigation_text" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navigation_text" href="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </Container>
    </motion.div>
  );
};

export default Header;
