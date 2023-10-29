import Link from "next/link"
import Image from "next/image"
const Footer = () => {
  return (
    <>
    <div className="bg-black text-white flex gap-8 justify-center items-center py-16">
        <div className="flex flex-col gap-3">
            <p className="text-md font-bold">About</p>
            <ul className="flex flex-col gap-3">
                <li>Our Values</li>
                <li>Our Goals</li>
                <li>Privacy</li>    
            </ul>
        </div>
        <div className="flex flex-col gap-3">
            <p className="text-md font-bold">Contact Us</p>
            <ul className="flex flex-col gap-3">
                <li>Our Values</li>
                <li>Our Goals</li>
                <li>Privacy</li>    
            </ul>
        </div>
    </div>

    <div className="flex flex-col gap-5 bg-white max-w-screen-xl items-center p-10">
        <Image src={'logoBlack.svg'}   width={200} height={200} alt="logo" />
        <p className="font-light">2023 Workfit</p>
    </div>
    </>
    
  )
}

export default Footer