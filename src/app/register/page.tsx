import Image from "next/image"

const register = () => {
  return (
    <div className="bg-black text-center">
      <Image src={'logoWhite.svg'}   width={200} height={200} alt="logo" />
      <div className='flex flex-col m-6 w-full h-full self-center '>
       <div className=' flex flex-col m-6   justify-center items-center gap-3 '>
        <h1 className="font-bold text-4xl m-2">Signup✨ </h1>

       <div className='my-3 flex flex-col text-[#706A6A]'>
        <label htmlFor ='Name'>Email</label>
        <input placeholder="Enter your name" className='py-3 px-5 outline-0 bg-[#F4F4F4] w-[400px]'/>
       </div>

       
    
       <div className='my-3 flex flex-col text-[#706A6A] '>
        <label htmlFor ='Password'>Password</label>
        <input placeholder='Enter your password' className='py-3 px-5 outline-0 bg-[#F4F4F4] w-[400px]' type='password'/>
       </div>

       {/* Input field for Confirm Password */}

       

        <button 
         
         className='py-3 px-6 bg-[#48AF24]  my-6 text-white w-[400px]'>SignUp</button>
       
    </div>
  </div>
    </div>
  )
}

export default register