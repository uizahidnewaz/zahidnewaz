import Blinto from "@/public/blinto.webp";
import Btrac from "@/public/btrac.webp";
import Image from "next/image";
import Container from "../components/Container";
const Stack = () => {
  return (
    <Container className="pt-[120px] pb-[96px] flex items-start gap-x-[15px]">
      <h2 className="motivation_heading">Favourite stack</h2>
      <div className="mt-[290px] flex flex-col gap-y-[64px]">
        <div className="flex items-start gap-x-8">
          <div className="flex-shrink-0 w-[44px] h-[41px] overflow-hidden">
            <Image
              className="w-full h-full bg-cover"
              src={Blinto}
              alt="blinto"
            />
          </div>
          <div className="">
            <h3 className="experience_heading">
              Blinto llc
              <span className="experience_date"> | March 2025 - July 2025</span>
            </h3>
            <h4 className="experience_subheading mt-3 mb-6">UI/UX Designer</h4>
            <p className="story_pragraph">
              I worked closely with developers and directly communicated with
              clients to design both websites and software. Beyond UI/UX, I also
              contributed by creating blog graphics that aligned with the
              company’s content strategy
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-8">
          <div className="flex-shrink-0 w-[44px] h-[44px] overflow-hidden">
            <Image
              className="w-full h-full bg-cover"
              src={Btrac}
              alt="blinto"
            />
          </div>
          <div className="">
            <h3 className="experience_heading">
              b-trac solutions ltd
              <span className="experience_date">
                {" "}
                | November 2024 - January 2025
              </span>
            </h3>
            <h4 className="experience_subheading mt-3 mb-6">
              Graphic & UI/UX Designer Intern
            </h4>
            <p className="story_pragraph">
              I collaborated with the Business Development team to support
              product promotion through graphic design for social media and
              marketing materials. I also contributed to the UI/UX team, where I
              worked on improving digital interfaces
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stack;
