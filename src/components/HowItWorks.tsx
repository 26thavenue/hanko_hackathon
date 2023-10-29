
const HowItWorks = () => {
  return (
    <div className="max-w-screen-xl  text-center">
        <p className='text-xl tracking-[0.25em] font-medium my-10'>HOW IT WORKS</p>
        <p className='text-xl md:text-3xl lg:text-3xl xl:text-4xl font-bold '>Get started easily with these steps</p>
        <div>
            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly p-8 items-center my-10'>
                <div className='flex flex-col justify-center items-center hover:border-2 border-[#fdb989] transition-all ease-in-out w-[20rem] py-16 px-3 '>
                    <div className='flex justify-center items-center rounded-full bg-[#F4F4F4] w-16 h-16'>
                        <p className='text-4xl font-bold text-[#FF6B00]'>1</p>
                    </div>
                    <p className='text-lg font-bold mt-2'>Create an account</p>
                    <p className='text-sm mt-2'>Get your 2 weeks free workout plans, then you can later subscribe to get your 2-month plan</p>
                </div>
                <div className='flex flex-col justify-center items-center my-10 md:mx-10 lg:mx-10 xl:mx-10 hover:border-2 border-[#fdb989] transition-all ease-in-out w-[20rem] py-16 px-3 '>
                    <div className='flex justify-center items-center rounded-full bg-[#F4F4F4] w-16 h-16'>
                        <p className='text-4xl font-bold text-[#FF6B00]'>2</p>
                    </div>
                    <p className='text-lg font-bold mt-2'>Customize your user profile</p>
                    <p className='text-sm mt-2'>Set your preferences, goals and activity level</p>
                </div>
                <div className='flex flex-col justify-center items-center hover:border-2 border-[#fdb989] transition-all ease-in-out w-[20rem] py-16 px-3 '>
                    <div className='flex justify-center items-center rounded-full bg-[#F4F4F4] w-16 h-16'>
                        <p className='text-4xl font-bold text-[#FF6B00]'>3</p>
                    </div>
                    <p className='text-lg font-bold mt-2'>You're ready to go!!!!</p>
                    <p className='text-sm mt-2'>Your 2-weeks journey to body and fitness goals start here</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks