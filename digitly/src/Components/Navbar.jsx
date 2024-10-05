import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='px-40 h-[10vh] gap-20 flex items-center w-full fixed bg-transparent z-50'>
       <img src={logo} alt="" /> 
       <ul className='flex gap-5'>
        <li className='font-semibold text-white'><a href="">Home</a></li>
        <li className='font-semibold text-white'><a href="">About</a></li>
        <li className='font-semibold text-white'><a href="">Contact</a></li>
        <li className='font-semibold text-white'><a href="">Pages</a></li>
       </ul>

       <div className='flex items-center gap-7 w-full justify-end'>
        <span className='text-white'>Call us: <span className='text-[#f64a48]'>+92 03253550555</span></span>
        <i className="fa-solid fa-magnifying-glass text-white"></i>
        <i className="fa-solid fa-bars text-white"></i>
       </div>
    </nav>
  )
}

export default Navbar