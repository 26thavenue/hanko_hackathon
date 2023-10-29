import React from 'react'

const MaxWidthWrapper = ({
    className,
    children
}:{
    className?: string 
    children: React.ReactNode}) => {
  return (
    <div className="mx-auto w-full px-2.5 max-w-screen-xl md:px-20">
        {children}
    </div>
  )
}

export default MaxWidthWrapper