import Container from "@/app/components/Container";
import ExperienceGallery from "@/app/layers/ExperienceGallery";
import Old1 from "@/public/old1.webp";
import Old2 from "@/public/old2.webp";
import Old3 from "@/public/old3.webp";
import Old4 from "@/public/old4.webp";
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
        <div className="problem mb-[96px]">
          <h3 className="wholesale_subheading">Finding Problems</h3>
          <div className="mt-4">
            <p className="wholesale_role_pragraph">
              Before making design decisions, I worked with stakeholders to
              answer two critical questions :
            </p>
            <ul className="ml-3">
              <li className="wholesale_role_pragraph flex items-start">
                <div className="mr-2 mt-[10px] h-[10px] w-[10px] bg-[#fff] rounded-full flex-shrink-0"></div>
                What problem are we solving? – The current UI was visually
                outdated, lacked intuitive navigation, and caused delays in
                daily operations.
              </li>
              <li className="wholesale_role_pragraph flex items-start">
                <div className="mr-2 mt-[10px] h-[10px] w-[10px] bg-[#fff] rounded-full flex-shrink-0"></div>
                What’s holding users back? – Poor layout, inconsistent styles,
                confusing forms, and no visual hierarchy for important data.
              </li>
            </ul>
            <p className="wholesale_role_pragraph">
              Example metric-based insight: <br /> If only 10 out of 100 users
              could find the correct report on the first try, that’s a 90%
              navigation failure rate, a major usability problem.
            </p>
          </div>
        </div>
        <div className="old_design mb-[96px]">
          <h3 className="wholesale_subheading">old Design</h3>
          <div className="relative h-[568px]">
            <div className="mt-6 h-[344px] flex justify-between w-full overflow-hidden">
              <Image className="w-full h-full" src={Old1} alt={Old1} />
              <Image className="w-full h-full" src={Old2} alt={Old2} />
            </div>
            <div className="absolute h-[340px] w-[718px] left-1/2 -translate-x-1/2 top-[218px] block">
              <Image className="w-full h-full" src={Old3} alt={Old3} />
            </div>
          </div>
          <div className="mt-6 h-[410px] w-full overflow-hidden">
            <Image className="w-full h-full" src={Old4} alt={Old4} />
          </div>
        </div>
        <div className="research mb-[96px]">
          <h3 className="wholesale_subheading">Research</h3>
          <div className="mt-4">
            <p className="wholesale_role_pragraph">
              To understand both user needs and business requirements, I
              conducted :
            </p>
            <ul className="ml-3">
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Secondary Research – Reviewed competitor software to identify
                modern patterns and industry trends.
              </li>
            </ul>
            <p className="wholesale_role_pragraph">I focused on both :</p>
            <ul className="ml-3">
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Qualitative insights – Why users found the system confusing (“I
                don’t know where to click next”).
              </li>
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Quantitative data – Frequency of errors, average time to
                generate a report, etc.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="defining mb-[96px]">
          <h3 className="wholesale_subheading">
            Defining the Problem — 5W Method
          </h3>
          <div className="defining_table mt-6">
            <div className="flex justify-between">
              <div className="w-full border-r border-[#B8FF346B] py-[10px] px-4">
                aa
              </div>
              <div className="w-full py-[10px] px-4">aa</div>
            </div>
            <div className="flex justify-between border-t border-[#B8FF346B]">
              <div className="w-full border-r border-[#B8FF346B] py-[10px] px-4">
                aa
              </div>
              <div className="w-full py-[10px] px-4">aa</div>
            </div>
          </div>
        </div>
      </Container>
      <ExperienceGallery />
    </>
  );
};

export default Project1;
