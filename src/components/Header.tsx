import { PrimaryButton } from "./Button"
import Image from "next/image"
import Third from '../../public/Third.png'

const Header = () => {
  return (
    <div className=" my-10 mx-auto md:my-20 lg:my-20  xl:my-20  max-w-screen-md  flex flex-col items-center gap-4 ">
        <p className='p-8 md:p-0 text-3xl md:text-5xl lg:text-5xl  xl:text-5xl font-bold text-center leading-[5rem]'>Discover perfect workout plans tailored just for you</p>
        <p className='font-light text-md text-center px-20 py-4 md:py-8 lg:py-8 xl:py-8 text-[#575656]'>Unlock your fitness potential with our expertly crafted workout plans. Your journey to a healthier, stronger you starts here</p>
        <PrimaryButton text='Sign Up Here'/>
        <Image src={Third} alt='hero' width={500} height={500} />
    </div>
    
  )
}

export default Header