import Image from "next/image"

const Sidebar = () => {
    return (
        <div className="max-h-screen flex flex-col items-center justify-center">
            <Image src={'logoBlack.svg'}   width={200} height={200} alt="logo" />
            <div className='flex justify-center items-center rounded-full bg-[#F4F4F4] w-16 h-16'>
                        <p className='text-4xl font-bold text-[#FF6B00]'>3</p>
            </div>
        </div>
    )
}

const pages = () => {
  return (
    <div>
        <Sidebar/>
    </div>
  )
}

export default pages