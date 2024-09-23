import React from 'react'
import { star } from '../assets/icons'
import Button from './Button'

const PopProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} className='w-[280px] h-[280px]' alt="" />
        <div className='mt-8 flex justify-start gap-2.5'>
          <img src={star} height={24} width={24} alt="" />
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 text-2xl text-coral-red font-semibold font-montserrat'>{price}</p>
        {/* <Button label="Buy Now" styles={'bg-coral-red text-white mt-4 rounded-full'} /> */}
    </div>
  )
}

export default PopProductCard