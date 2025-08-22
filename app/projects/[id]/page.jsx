import Container from "@/app/components/Container";
import ExperienceGallery from "@/app/layers/ExperienceGallery";
import Old1 from "@/public/old1.webp";
import Old2 from "@/public/old2.webp";
import Old3 from "@/public/old3.webp";
import Old4 from "@/public/old4.webp";
import Project1Pic from "@/public/project1.webp";
import Redesign1 from "@/public/redesign1.webp";
import Redesign2 from "@/public/redesign2.webp";
import Redesign3 from "@/public/redesign3.webp";
import Redesign4 from "@/public/redesign4.webp";
import Redesign5 from "@/public/redesign5.webp";
import Image from "next/image";
const Project1 = () => {
  return (
    <>
      <Container className="mt-[96px] lg:mt-[72px] md:mt-[56px] sm:mt-[40px]">
        <h2 className="wholesale_heading">
          Wholesale Business Management Software – UI/UX Redesign Case Study
        </h2>
        <div className="mt-[64px] mb-[96px] lg:mt-[48px] lg:mb-[72px] md:mt-[36px] md:mb-[56px] sm:mt-[28px] sm:mb-[40px] xl:h-[914px] lg:h-[700px] md:h-[500px] sm:h-[400px] overflow-hidden">
          <Image
            className="w-full h-full object-fit-contain"
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
        <div className="role my-[96px] lg:my-[72px] md:my-[56px] sm:my-[40px]">
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
        <div className="problem mb-[96px] lg:mb-[72px] md:mb-[56px] sm:mb-[40px]">
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
        <div className="old_design mb-[96px] lg:mb-[72px] md:mb-[56px] sm:mb-[40px]">
          <h3 className="wholesale_subheading">old Design</h3>
          <div className="relative h-[568px] lg:h-[480px] md:h-[400px] sm:h-[320px]">
            <div className="mt-6 xl:h-[344px] lg:h-[280px] md:h-[220px] sm:h-[180px] flex justify-between w-full overflow-hidden">
              <Image
                className="w-1/2 h-full object-fit-contain"
                src={Old1}
                alt={Old1}
              />
              <Image
                className="w-1/2 h-full object-fit-contain"
                src={Old2}
                alt={Old2}
              />
            </div>
            <div className="absolute xl:h-[340px] lg:h-[280px] md:h-[220px] sm:h-[180px] w-[718px] lg:w-[80%] md:w-[90%] sm:w-[95%] left-1/2 -translate-x-1/2 top-[218px] lg:top-[200px] md:top-[180px] sm:top-[140px] block">
              <Image
                className="w-full h-full object-fit-contain"
                src={Old3}
                alt={Old3}
              />
            </div>
          </div>
          <div className="mt-6 xl:h-[410px] lg:h-[350px] md:h-[300px] sm:h-[250px] w-full overflow-hidden">
            <Image
              className="w-full h-full object-fit-contain"
              src={Old4}
              alt={Old4}
            />
          </div>
        </div>
        <div className="research mb-[96px] lg:mb-[72px] md:mb-[56px] sm:mb-[40px]">
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
        <div className="defining mb-[96px] lg:mb-[72px] md:mb-[56px] sm:mb-[40px]">
          <h3 className="wholesale_subheading">
            Defining the Problem — 5W Method
          </h3>
          <div className="defining_table mt-6">
            <div className="flex justify-between flex-wrap sm:flex-nowrap">
              <div className="w-full border-r border-[#B8FF346B] py-[10px] px-4 defining_text">
                WHO
              </div>
              <div className="w-full py-[10px] px-4 defining_pragraph">
                Sales managers and wholesale staff
              </div>
            </div>
            <div className="flex justify-between flex-wrap sm:flex-nowrap border-t border-[#B8FF346B]">
              <div className="w-full border-r border-[#B8FF346B] py-[10px] px-4 defining_text">
                WHAT
              </div>
              <div className="w-full py-[10px] px-4 defining_pragraph">
                Struggle to navigate, interpret, and act on data quickly
              </div>
            </div>
            <div className="flex justify-between flex-wrap sm:flex-nowrap border-t border-[#B8FF346B]">
              <div className="w-full border-r border-[#B8FF346B] py-[10px] px-4 defining_text">
                WHEN
              </div>
              <div className="w-full py-[10px] px-4 defining_pragraph">
                During daily reporting, inventory checks, and order management
              </div>
            </div>
            <div className="flex justify-between flex-wrap sm:flex-nowrap border-t border-[#B8FF346B]">
              <div className="w-full border-r border-[#B8FF346B] py-[10px] px-4 defining_text">
                WHERE
              </div>
              <div className="w-full py-[10px] px-4 defining_pragraph">
                Inside modules like Customer Ledger, Inventory Report, and Sales
                Report, etc.
              </div>
            </div>
            <div className="flex justify-between flex-wrap sm:flex-nowrap border-t border-[#B8FF346B]">
              <div className="w-full border-r border-[#B8FF346B] py-[10px] px-4 defining_text">
                WHY
              </div>
              <div className="w-full py-[10px] px-4 defining_pragraph">
                The UI lacked modern patterns, clear grouping, and intuitive
                form flows
              </div>
            </div>
          </div>
        </div>
        <div className="role my-[96px] lg:my-[72px] md:my-[56px] sm:my-[40px]">
          <h3 className="wholesale_subheading">Ideation</h3>
          <div className="mt-4">
            <p className="wholesale_role_pragraph">
              I explored multiple approaches :
            </p>
            <ul className="ml-3">
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Used clear section headings and proper spacing for better
                readability.{" "}
              </li>
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Grouped related inputs visually to reduce clutter and improve
                clarity.{" "}
              </li>
              <li className="wholesale_role_pragraph flex items-start">
                <div className="mr-2 mt-[10px] h-[10px] w-[10px] bg-[#fff] rounded-full flex-shrink-0"></div>
                Designed a dashboard that highlights valuable insights,
                mandatory metrics, and frequent actions, enabling users to act
                faster and more confidently.
              </li>
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Added filters and search options to help users find information
                quickly.
              </li>
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Applied consistent button styles and standardized action
                placement across modules.
              </li>
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Created product summaries for easier visualization and quicker
                understanding.
              </li>
              <li className="wholesale_role_pragraph flex items-center">
                <div className="mr-2 h-[10px] w-[10px] bg-[#fff] rounded-full"></div>
                Introduced a cleaner, modern visual design for faster scanning
                of information.
              </li>
            </ul>
          </div>
        </div>
        <div className="redesign mb-[96px] lg:mb-[72px] md:mb-[56px] sm:mb-[40px]">
          <h3 className="wholesale_subheading">redesign</h3>
          <div
            className="mt-6 flex flex-col gap-y-6
          "
          >
            <div className="xl:h-[907px] lg:h-[700px] md:h-[500px] sm:h-[350px] w-full overflow-hidden">
              <Image
                src={Redesign1}
                alt={Redesign1}
                className="w-full h-full object-fit-contain"
              />
            </div>
            <div className="xl:h-[918px] lg:h-[700px] md:h-[500px] sm:h-[350px] w-full overflow-hidden">
              <Image
                src={Redesign2}
                alt={Redesign2}
                className="w-full h-full object-fit-contain"
              />
            </div>
            <div className="xl:h-[918px] lg:h-[700px] md:h-[500px] sm:h-[350px] w-full overflow-hidden">
              <Image
                src={Redesign3}
                alt={Redesign3}
                className="w-full h-full object-fit-contain"
              />
            </div>
            <div className="xl:h-[868px] lg:h-[700px] md:h-[500px] sm:h-[350px] w-full overflow-hidden">
              <Image
                src={Redesign4}
                alt={Redesign4}
                className="w-full h-full object-fit-contain"
              />
            </div>
            <div className="xl:h-[866px] lg:h-[700px] md:h-[500px] sm:h-[350px] w-full overflow-hidden">
              <Image
                src={Redesign5}
                alt={Redesign5}
                className="w-full h-full object-fit-contain"
              />
            </div>
          </div>
        </div>
        <div className="key ">
          <h3 className="wholesale_subheading">Key Takeaways</h3>
          <p className="mt-4 wholesale_pragraph">
            When working on this project, I realized that putting the user first
            is always the most important step, even in business software.
            Designing around real user needs naturally improves efficiency and
            satisfaction. I also saw how small visual changes like improving
            spacing, refining typography, and grouping elements with a clear
            visual hierarchy, can greatly reduce cognitive load and help users
            focus on what matters most. Consistency across the system became
            another key lesson; using the same patterns, colors, and button
            styles reduced friction and created stronger affordance, so users
            always knew what to expect. Simplicity proved to be especially
            powerful. By prioritizing high-frequency actions such as product
            search, add, and edit, sales managers and staff could complete their
            tasks with less effort and more speed. Lastly, this project reminded
            me that research is never done. By continuously testing and
            validating ideas, I was able to avoid feature bloat and ensure the
            redesign solved real business problems instead of just looking
            modern. <br />
            If you’re the sole designer working on a product that is still in
            its early stages, it’s essential to revisit and refine the user
            journey again and again. Early design decisions often need
            revalidation as the product evolves. When the platform deals with
            large amounts of data, it becomes even more important to understand
            how users interact with that data and what patterns they rely on.
            Competitor research should also never be a one-time activity.
            Designers need to continuously monitor competitors, not to copy
            them, but to gain fresh insights, spot emerging trends, and identify
            opportunities to make the product stand out.
          </p>
          <h4 className="wholesale_thanks mt-[48px] lg:mt-[36px] md:mt-[28px] sm:mt-[20px]">
            Thank you!
          </h4>
        </div>
      </Container>
      <ExperienceGallery />
    </>
  );
};

export default Project1;
