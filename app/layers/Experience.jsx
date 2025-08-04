import Image from 'next/image'
import Container from '../components/Container'
import Blinto from "@/public/blinto.webp"
const Experience = () => {
  return (
    <Container className="pt-[120px] pb-[96px] flex items-start gap-x-[15px]">
      <h2 className='motivation_heading'>experience</h2>
      <div className="mt-[202px] flex items-start gap-x-8">
        <div className="w-[44px] h-[44px] overflow-hidden">
          <Image src={Blinto} alt='blinto' />
        </div>
        <div className="">x</div>
      </div>
    </Container>
  )
}

export default Experience
