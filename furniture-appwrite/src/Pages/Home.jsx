import React from 'react'
import Carousel from '../Components/Carousel'
import Features from '../Components/Features';
import Gallery from '../Components/Gallery';
import { categories, products } from '../assets';

const Home = () => {
  
  const imgs = [
    'https://images.pexels.com/photos/20337840/pexels-photo-20337840/free-photo-of-view-of-a-loft-style-living-room-with-a-brown-leather-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3773570/pexels-photo-3773570.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
  return (
    <main className='mt-[17vh]'>
      <Carousel imgs={imgs} />
      <Features/>
      <Gallery title={'Sofa Set'} subtitle={'Crafted with love Specially for you'} card={'category'} data={categories}/>
      <Gallery title={'Popular Picks in Sofa'} subtitle={'Crafted with love Specially for you'} nav={true} card={'product'} data={products.slice(0,8)} />
      <Gallery title={'Recently Viewed'} subtitle={'Things you are keeping eye on'} card={'product'} data={products.slice(0,4)} />
    </main>
  )
}

export default Home