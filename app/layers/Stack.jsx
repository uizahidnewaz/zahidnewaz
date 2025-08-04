import Canva from "@/public/canva.webp";
import Figma from "@/public/figma.webp";
import Image from "next/image";
import Container from "../components/Container";
const Stack = () => {
  return (
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
            <Image className="w-full h-full bg-cover" src={Canva} alt="figma" />
          </div>
          <div className="">
            <h3 className="stack_heading">Canva</h3>
            <h4 className="stack_subheading mt-[10px] mb-6">Design Tool</h4>
            <p className="story_pragraph">
              I use it for fast, clean, and effective graphic design, especially
              for social media
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-8">
          <div className="flex-shrink-0 w-[50px] h-[50px] overflow-hidden">
            <Image className="w-full h-full bg-cover" src={Figma} alt="figma" />
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
      </div>
    </Container>
  );
};

export default Stack;
