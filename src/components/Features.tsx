import React from 'react'
import Image from 'next/image'
import { PrimaryButton } from './Button'
const Features = () => {
  return (
    <div className=" text-center my-10 bg-[#E6E6E6] max-w-screen-xl p-10">
        <p className="font-light text-[#626262] text-[20px] p-5 tracking-[0.25em] text-xl ">FEATURES </p>
        <p className=' text-xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-black lg:px-40 xl:px-40  md:px-40  leading-10 py-10'>Supercharge your workout routines with our AI-powered workout generator</p>
        <div className="grid p-8  gap-8 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 my-10 justify-center items-center">
            <p className="text-xl font-bold text-center p-6">Burn calories and achieve your goal with our AI powered tool</p>
            <Image src={'Display.svg'} alt='features-one' width={200} height={200}/>
            <p className="text-xl font-bold text-center p-6">No credit card required</p>
            <Image src={'Display.svg'} alt='features-one' width={200} height={200}/>
            <p className="text-xl font-bold text-center p-6">Burn calories and achieve your goal with our AI powered tool</p>
            <Image src={'Display.svg'} alt='features-one' width={200} height={200}/>
        </div>
        <PrimaryButton text='Sign Up Here'/>
    </div>
  )
}

export default Features