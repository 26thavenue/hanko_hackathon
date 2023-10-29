

export const PrimaryButton = ({text}:{text:string}) => {
  return (
    <div>
        <button className="bg-black hover:opacity-75 transition-all duration-300ms ease-in text-white  py-2 px-4 rounded">{text}</button>
    </div>
  )
}
export const SecondaryButton = ({text}:{text:string}) => {
  return (
    <div>
        <button className=" border-2 border-gray-100 transition-all duration-300ms ease-in hover:bg-gray-100 text-black  py-2 px-4 rounded">{text}</button>
    </div>
  )
}
export const TertiaryButton = (text:string) => {
  return (
    <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{text}</button>
    </div>
  )
}

