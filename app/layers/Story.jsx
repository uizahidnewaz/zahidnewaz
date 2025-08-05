"use client";
import Container from "../components/Container";
// import Makeit from "./assets/Makeit";
import "lenis/dist/lenis.css";

const Story = () => {
  return (
    <Container>
      <div className="story pt-[120px] pb-[96px]">
        <h2 className="story_heading">My Side of the Story</h2>
        <div className="mt-[84px] flex justify-between items-start gap-x-[80px]">
          <div className="flex items-center gap-x-[12px]">
            <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full !bg-[#fff]"></div>
            <h3 className="story_title flex-shrink-0">About me</h3>
          </div>
          <div className="">
            <p className="story_pragraph">
              I'm Shah Md. Zahid Newaz. I studied at Rajuk Uttara Model College,
              then went on to complete my BSc in Computer Science and
              Engineering from North South University. For a long time, I
              thought my path was already set, lines of code, system design,
              maybe software development.
            </p>
            <p className="story_pragraph mt-[30px]">
              {" "}
              My journey into design began at the end of 2023, when I discovered
              a deep interest in creating user-friendly and visually engaging
              digital experiences. Since then, I’ve been learning and growing
              every day, exploring UI/UX principles, studying real-world
              products, and building designs that solve real problems. I believe
              in continuous learning, and thoughtful design.
            </p>
          </div>
        </div>
        <div className="mt-[84px] flex justify-between items-start gap-x-[80px]">
          <div className="flex items-center gap-x-[12px]">
            <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full !bg-[#fff]"></div>
            <h3 className="story_title flex-shrink-0">My mission</h3>
          </div>
          <p className="story_pragraph">
            My mission is to make people’s lives easier through thoughtful
            design and to create experiences that users genuinely enjoy
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Story;
