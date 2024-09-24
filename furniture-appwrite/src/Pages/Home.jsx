import React from 'react'
import Carousel from '../Components/Carousel'
import Features from '../Components/Features';
import Gallery from '../Components/Gallery';
import { categories, products } from '../assets';

const Home = () => {
  const imgs = [
    'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4665034/pexels-photo-4665034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];
  return (
    <main className='mt-[17vh]'>
      <Carousel imgs={imgs} />
      <Features/>
      <Gallery title={'Sofa Set'} subtitle={'Crafted with love Specially for you'} card={'category'} data={categories}/>
      <Gallery title={'Popular Picks in Sofa'} subtitle={'Crafted with love Specially for you'} card={'product'} data={products} />
    </main>
  )
}

export default Home