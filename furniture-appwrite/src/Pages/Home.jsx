import React, { useEffect, useState } from 'react'
import Carousel from '../Components/Carousel'
import Features from '../Components/Features';
import Gallery from '../Components/Gallery';
import { products } from '../assets';
import dbService from '../services/db';

const Home = () => {
  const [categories, setCategories] = useState([]);
  
  const imgs = [
    'https://images.pexels.com/photos/20337840/pexels-photo-20337840/free-photo-of-view-of-a-loft-style-living-room-with-a-brown-leather-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3773570/pexels-photo-3773570.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  useEffect(() => {
    setTimeout(() => {
      dbService.getCategories()
    .then(res => {
        setCategories(res.documents);
    })
    .catch(e => {throw e});
    }, 1500)
  }, [])

  return (
    <main className='mt-[17vh]'>
      <Carousel imgs={imgs} />
      <Features/>
      {categories.length < 1 && <Gallery title={'Browse Categories'} subtitle={'Crafted with love Specially for you'} card={'category'} data={null}/>}
      {categories.length > 0 && <Gallery title={'Browse Categories'} subtitle={'Crafted with love Specially for you'} card={'category'} data={categories}/>}
      <Gallery title={'Popular Picks in Sofa'} subtitle={'Crafted with love Specially for you'} nav={true} card={'product'} data={products.slice(0,8)} />
      <Gallery title={'Recently Viewed'} subtitle={'Things you are keeping eye on'} card={'product'} data={products.slice(0,4)} />
    </main>
  )
}

export default Home