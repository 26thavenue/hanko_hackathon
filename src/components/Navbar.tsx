'use client'

import Link from 'next/link'
import {FiMenu} from 'react-icons/fi'
import Image from 'next/image'
import {BsChevronUp} from 'react-icons/bs'
import { useState } from 'react'
import { PrimaryButton, SecondaryButton } from './Button'
const Navbar = () => {
    const[active, setActive] = useState(true)

    const toggleIcon = () => {
        setActive(!active); // Toggle the state
    };
  
  return (
    <div className=" container flex p-8  justify-between mx-auto w-full items-center  max-w-screen-xl ">
        <Image src={'logoBlack.svg'} alt='logo' className='object-cover' width={150} height={150} />
        <div className= " md:hidden lg:hidden xl:hidden" >
          {active ?  (
        <FiMenu  className = '' onClick = {toggleIcon } />
        ) : (
        <BsChevronUp onClick = {toggleIcon } />
        ) }
      
        </div>
          <>
            {active ? (
              <>
              <div className=" gap-8 cursor-pointer hidden md:flex lg:flex xl:flex">
              <Link href=''  className="">Features</Link>
              <Link href='' >How it Works</Link>
              <Link href='' >Pricing</Link>
              </div>
              <div className=" gap-8 hidden md:flex lg:flex xl:flex">
              <PrimaryButton text= 'SignUp' />
              <SecondaryButton text='Login'/>
              </div>
              </>
            ) : null}
          
        </>
       
    </div>
  )
}

export default Navbar