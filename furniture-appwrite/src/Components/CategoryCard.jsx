import React from 'react'

const CategoryCard = ({featureIMG, title}) => {
  return (
    <div className='w-full'>
        <img src={featureIMG} className='w-full h-[200px] rounded-lg' alt="" />
        <h2 className='font-semibold mt-2 object-cover object-center'>{title}</h2>
    </div>
  )
}

export default CategoryCard