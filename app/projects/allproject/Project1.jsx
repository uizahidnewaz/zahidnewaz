import Container from "@/app/components/Container";
import ExperienceGallery from "@/app/layers/ExperienceGallery";
import Project1Pic from "@/public/project1.webp";
import Image from "next/image";
const Project1 = () => {
  return (
    <>
      <Container className="mt-[96px]">
        <h2 className="wholesale_heading">
          Wholesale Business Management Software – UI/UX Redesign Case Study
        </h2>
        <div className="mt-[64px] mb-[96px] h-[914px] overflow-hidden">
          <Image
            className="w-full h-full"
            src={Project1Pic}
            alt={Project1Pic}
          />
        </div>
        <h3 className="wholesale_subheading">Background</h3>
        <p className="mt-4 wholesale_pragraph">
          The wholesale industry relies on accurate, fast, and intuitive tools
          for managing products, sales, and inventory. The existing wholesale
          business software was functional but outdated. It’s interface was
          cluttered, unintuitive, and difficult for sales managers and staff to
          navigate efficiently. <br /> My task was to redesign the system to
          improve usability, visual hierarchy, and overall user experience
          without compromising existing workflows. <br /> The project timeline
          was very short, only about one month due to an urgent business need,
          which meant I had to put in extra effort and focus to deliver the
          redesign on time without compromising quality.
        </p>
        <div className="role my-[96px]">
          <h3 className="wholesale_subheading">My role</h3>
          <div className="mt-4">
            <p className="wholesale_role_pragraph">
              I worked as the sole designer and researcher. Responsibilities
              included :
            </p>
            <ul className="ml-3">
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Conducting user research with sales managers and staff.
              </li>
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Analyzing pain points in the existing software.{" "}
              </li>
              <li className="wholesale_role_pragraph flex items-start">
                <div className="mr-2 mt-[10px] h-[10px] w-[10px] bg-[#fff] rounded-full flex-shrink-0"></div>
                Chose a temporary color palette that aligned well with clothing
                items, ensuring visual harmony even though the platform didn’t
                yet have finalized brand colors.
              </li>
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Creating wireframes, prototypes, and high-fidelity UI designs.{" "}
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <ExperienceGallery />
    </>
  );
};

export default Project1;
