import Hi from "@/public/hi.svg";
import Newazls from "@/public/newazls.svg";
import Image from "next/image";
import Container from "./components/Container";

const page = () => {
  return (
    <Container className="py-[96px] flex justify-between items-start">
      <div className="mt-[218px]">
        <div className="flex items-center gap-x-2">
          <h3 className="hero_title">Hi, I am</h3>
          <Image className="h-[26px] w-[26px]" src={Hi} alt="Hi" />
        </div>        <div className="">
          <h1 className="hero_heading">Zahid</h1>
          <br />
          <div className="flex items-end">
            <h1 className="hero_heading">Newaz</h1>
            <Image
              src={Newazls}
              alt="Newazls"
              className="inline-block w-[100px] h-[50px]"
            />
          </div>
        </div>
      </div>
      <div className="">aa</div>
    </Container>
  );
};

export default page;
