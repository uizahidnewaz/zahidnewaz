import Image from "next/image";
import Container from "./components/Container";
import Hi from "@/public/hi.png";
import Newazls from "@/public/newazls.svg";

const page = () => {
  return <Container className="py-[96px] flex justify-between items-start">
<div className="mt-[218px]">
  <h3>
    <Image src={Hi} alt="Hi" />
    Hi, I am</h3>
  <h1 className="hero_heading">Zahid <br /> Newaz 
  <Image src={Newazls} alt="Newazls" className="inline-block w-[150px] h-[50px]" />
  </h1>
</div>
<div className="">aa</div>
  </Container>;
};

export default page;
