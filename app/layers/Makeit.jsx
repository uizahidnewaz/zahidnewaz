import React from 'react'
import MakeitImg from "@/public/makeit.webp";
import Image from 'next/image';
const Makeit = () => {
  return (
      <div className="makeit py-18 h-[800px]">
        {/* <Makeit /> */}
        <Image className="w-full h-full bg-cover" src={MakeitImg} alt="makeit" />
      </div>
  )
}

export default Makeit
