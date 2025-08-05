"use client";
import Work1 from "@/public/work1.webp";
import Work2 from "@/public/work2.webp";
import Image from "next/image";
import Container from "../components/Container";

const SellectedWork = () => {
  return (
    <Container>
      <div className="pt-[120px] pb-[96px]">
        <div className="flex items-start justify-between gap-[58px]">
          <h2 className="work_heading">Selected WORK</h2>
          <p className="work_pragraph mt-2">
            A few highlights from my recent work. Each one helped me grow and
            brought new insights into creating meaningful design.
          </p>
        </div>

        <div className="mt-[80px] flex items-start justify-between gap-[58px]">
          <div className="">
            <div className="w-[580px] h-[398px] overflow-hidden rounded-[3px] work_img">
              <Image className="w-full h-full bg-cover" src={Work1} alt="aa" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <h3 className="work_subtitle">Wholesale business software</h3>
              <p className="work_number">01</p>
            </div>
          </div>
          <div className="">
            <div className="w-[580px] h-[398px] overflow-hidden rounded-[3px] work_img">
              <Image className="w-full h-full bg-cover" src={Work2} alt="aa" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <h3 className="work_subtitle">Hospital management system</h3>
              <p className="work_number">02</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SellectedWork;
