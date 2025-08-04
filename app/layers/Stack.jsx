import Canva from "@/public/canva.webp";
import Figma from "@/public/figma.webp";
import Framer from "@/public/framer.webp";
import Jira from "@/public/jira.webp";
import Notion from "@/public/notion.webp";
import Image from "next/image";
import Container from "../components/Container";
const Stack = () => {
  return (
    <>
      <Container className="pt-[120px] pb-[96px] flex items-start gap-x-[15px]">
        <h2 className="motivation_heading">Favourite stack</h2>
        <div className="mt-[290px] flex flex-col gap-y-[64px]">
          <div className="flex items-start gap-x-8">
            <div className="flex-shrink-0 w-[50px] h-[50px] overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-[70%] bg-cover"
                src={Figma}
                alt="figma"
              />
            </div>
            <div className="">
              <h3 className="stack_heading">Figma</h3>
              <h4 className="stack_subheading mt-[10px] mb-6">Design Tool</h4>
              <p className="story_pragraph">
                My go-to tool for UI/UX design, from wireframes to high-fidelity
                prototypes and also for graphic designing
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-8">
            <div className="flex-shrink-0 w-[50px] h-[50px] overflow-hidden">
              <Image
                className="w-full h-full bg-cover"
                src={Canva}
                alt="figma"
              />
            </div>
            <div className="">
              <h3 className="stack_heading">Canva</h3>
              <h4 className="stack_subheading mt-[10px] mb-6">Design Tool</h4>
              <p className="story_pragraph">
                I use it for fast, clean, and effective graphic design,
                especially for social media
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-8">
            <div className="flex-shrink-0 w-[50px] h-[50px] overflow-hidden">
              <Image
                className="w-full h-full bg-cover"
                src={Notion}
                alt="figma"
              />
            </div>
            <div className="">
              <h3 className="stack_heading">Notion</h3>
              <h4 className="stack_subheading mt-[10px] mb-6">
                For Note-taking and Documentation
              </h4>
              <p className="story_pragraph">
                I rely on it for note-taking, and documenting design systems
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-8">
            <div className="flex-shrink-0 w-[50px] h-[50px] overflow-hidden">
              <Image
                className="w-[60%] h-full bg-cover"
                src={Framer}
                alt="figma"
              />
            </div>
            <div className="">
              <h3 className="stack_heading">framer</h3>
              <h4 className="stack_subheading mt-[10px] mb-6">Visual Design</h4>
              <p className="story_pragraph">
                Currently learning it for no-code web development
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-8">
            <div className="flex-shrink-0 w-[50px] h-[50px] overflow-hidden">
              <Image
                className="w-full h-full bg-cover"
                src={Jira}
                alt="figma"
              />
            </div>
            <div className="">
              <h3 className="stack_heading">Jira</h3>
              <h4 className="stack_subheading mt-[10px] mb-6">
                Project Management
              </h4>
              <p className="story_pragraph">
                I use it for project management, tracking tasks and time, and
                organizing notes
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="py-8 h-[736px]">
        <Image className="w-full h-full bg-cover" src={Notion} alt="stack" />
      </div>
    </>
  );
};

export default Stack;
