import {IoMdArrowDropright} from 'react-icons/io'

const FAQS = () => {
  return (
    <div className="text-center my-10 ">
        <p className='font-light text-[#626262] text-[20px] p-5 tracking-[0.25em] my-10' >FAQS</p>
        <div className='flex flex-col justify-center items-center'>
            <div className=" shadow-lg hover:shadow-xl p-8 flex gap-4 items-center  w-[700px]">
            <IoMdArrowDropright/>
            <p className='text-bold text-xl'>How are you guys so amazing</p>
            </div>
            <div className=" shadow-lg hover:shadow-xl p-8 flex gap-4 items-center  w-[700px]">
            <IoMdArrowDropright/>
            <p className='text-bold text-xl'>How are you guys so amazing</p>
            </div>
            <div className=" shadow-lg hover:shadow-xl p-8 flex gap-4 items-center  w-[700px]">
            <IoMdArrowDropright/>
            <p className='text-bold text-xl'>How are you guys so amazing</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default FAQS