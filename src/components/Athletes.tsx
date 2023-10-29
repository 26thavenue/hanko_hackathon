import Image from "next/image"

const Athletes = () => {
  return (
    <div className="bg-black h-[250px] md:h-[400px] lg:h-[400px] xl:h-[400px] text-white justify-center items-center gap-4 p-8 text-center mx-auto my-5 flex flex-col">
        <Image src={'logoWhite.svg'}   width={200} height={200} alt="logo" />
        <p className="font-bold text-xl">for Athletes</p>
        {/* <p>COMING SOON</p> */}
    </div>
  )
}

export default Athletes