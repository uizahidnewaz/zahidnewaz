import Hi from "@/public/hi.png";
import Newazls from "@/public/newazls.svg";
import Image from "next/image";
import Container from "./components/Container";

const page = () => {
  return (
    <Container className="py-[96px] flex justify-between items-start">
      <div className="mt-[218px]">
        <h3>
          <Image src={Hi} alt="Hi" />
          Hi, I am
        </h3>
        <div className="hero_heading">
          Zahid <br />
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
