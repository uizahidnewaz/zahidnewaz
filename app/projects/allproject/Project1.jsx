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
      </Container>
      <ExperienceGallery />
    </>
  );
};

export default Project1;
