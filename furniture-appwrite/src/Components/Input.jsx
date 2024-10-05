import React, { forwardRef } from 'react'

const Input = forwardRef(
  ({label, required, icon, placeholder, type, ...props}, ref) => {  
  return (
    <div className='flex flex-col w-full'>
        {label && (
            <label className='text-sm text-gray-500 ml-2'>{label}{required && <span className='text-red-700'>*</span>}</label>
        )}
        <div className='w-full flex mt-1 bg-[#f2f0f1] rounded-full items-center px-4'>
           {icon && icon[0]}
           <input ref={ref} {...props} className='outline-none flex-1 px-2 py-2 bg-transparent' type={type} placeholder={placeholder} />
        </div>
    </div>
  )
})

export default Input