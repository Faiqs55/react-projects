import React, { useEffect, useState } from 'react'
import { categories } from '../assets'
import CategoryCard from './CategoryCard'
import ProductCard from './ProductCard';

const Gallery = ({title, subtitle, card, data}) => {
    const [cardData, setCardData] = useState(data);
  return (
    <div className='px-5 lg:px-28 flex flex-col items-center my-16'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <h3 className='text-gray-500 mt-1'>{subtitle}</h3>
        <div className='mt-5 px-5 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full text-center'>
           {card === "category" && cardData.map(cat => <CategoryCard {...cat} />)}
           {card === "product" && cardData.map(pro => <ProductCard {...pro} />)}
        </div>
    </div>
  )
}

export default Gallery