import React from 'react'
import { PrimaryButton } from './Button'

const Banner = () => {
  return (
    <div className="bg-[#FF6B00] h-[250px] md:h-[400px] lg:h-[400px] xl:h-[400px] text-white justify-center items-center gap-8 p-8 text-center mx-auto flex flex-col my-10">
      
      <p className="text-3xl md:text-5xl font-bold lg:text-5xl xl:text-5xl">Try Workfit for free today</p>
      <p className="text-lg font -light">Tailored plans, just for you</p>
      <PrimaryButton text="Signup For Free"/>
    </div>
  )
}

export default Banner