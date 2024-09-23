import React from 'react'

const BreadCrumbs = () => {
  return (
    <div className='w-full bg-[#f2f0f1] h-[7vh] p-5 xl:px-24 flex items-center gap-2 fixed top-[10vh] z-[101]'>
        <span className='font-semibold text-sm lg:text-lg'>Home </span> {'>'} <span className='text-gray-500'> Shop</span>
    </div>
  )
}

export default BreadCrumbs