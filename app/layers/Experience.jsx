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
        <div className="">
          <h3 className='experience_heading'>Blinto llc<span className='experience_date'> | March 2025 - July 2025</span></h3>
          <h4 className='experience_subheading mt-3 mb-6'>UI/UX Designer</h4>
          <p className='story_pragraph'>I worked closely with developers and directly communicated with clients to design both websites and software. Beyond UI/UX, I also contributed by creating blog graphics that aligned with the company’s content strategy</p>
        </div>
      </div>
    </Container>
  )
}

export default Experience
