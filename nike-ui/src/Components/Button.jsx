import React from 'react'

const Button = ({label, iconURL, styles}) => {
  return (
    <button className={`${styles} flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none`}>
        {label}
        {iconURL && <img src={iconURL} className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button