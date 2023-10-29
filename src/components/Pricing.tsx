import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import { PrimaryButton } from './Button'
const Pricing = () => {
  return (
    <div className="text-center mb-10">
        <p className="font-light text-[#626262] text-[20px] p-5 tracking-[0.25em] my-10 ">PRICING</p>
        <div className="flex justify-center items-center gap-6 ">
            <div className='flex flex-col  shadow-lg gap-6 p-6 '>
            <p className="font-light text-[#626262] text-[16px] p-5 tracking-[0.25em] self-end  ">MONTHLY</p>
            <p className="font-bold text-3xl self-start">$10 <span className="font-bold text-[#626262] text-2xl">per month</span></p>
            <div className="flex flex-col gap-8 mb-3 ">
                <p className='flex gap-3 items-center'><AiOutlineCheck/>2-month Exercise Routine and Meal Plans</p>
                <p className='flex gap-3 items-center'> <AiOutlineCheck/> Priority Support</p>
                <p className='flex gap-3 items-center'> <AiOutlineCheck/> 24/7 Customer Support</p>
                <p className='flex gap-3 items-center'> <AiOutlineCheck/> Access to latest features</p>
                <p className='flex gap-3 items-center'> <AiOutlineCheck/> Analytics</p>
            </div>
            <PrimaryButton text='Signup Here'/>
        </div>
        <div className='flex flex-col hover:shadow-[#FF6B00] ease-in-out shadow-lg  gap-6  p-6'>
            <p className="font-light text-[#626262] text-[16px] p-5 tracking-[0.25em] self-end ">ANNUALLY</p>
            <p className="font-bold text-3xl self-start">$60 <span className="font-bold text-[#626262] text-2xl">per year</span></p>
            <div className="flex flex-col gap-8 mb-3 ">
                <p className='flex gap-3 items-center'><AiOutlineCheck/>12-month Exercise Routine and Meal Plans</p>
                <p className='flex gap-3 items-center'> <AiOutlineCheck/> Priority Support</p>
                <p className='flex gap-3 items-center'> <AiOutlineCheck/> 24/7 Customer Support</p>
                <p className='flex gap-3 items-center'> <AiOutlineCheck/> Access to latest features</p>
                <p className='flex gap-3 items-center'> <AiOutlineCheck/> Analytics</p>
            </div>
            <PrimaryButton text='Signup Here' />
        </div>
        </div>
        
        
    </div>
  )
}

export default Pricing