import Link from "next/link";
import Container from "./Container";

const Header = () => {
  return (
    <Container className="flex justify-between items-center">
     <div className=""></div>
      <ul className="flex space-x-4">
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
  );
};

export default Header;
