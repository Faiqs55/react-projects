import React from 'react'
import { categories } from '../assets'
import CategoryCard from './CategoryCard'

const Gallery = ({title, subtitle}) => {
  return (
    <div className='px-5 lg:px-24 flex flex-col items-center my-16'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <h3 className='text-gray-500 mt-1'>{subtitle}</h3>
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full text-center'>
           {categories.map(cat => <CategoryCard img={cat.img} title={cat.title} />)}
        </div>
    </div>
  )
}

export default Gallery