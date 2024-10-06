import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavMenus = ({toggleDropDown, toggleHandler, categories}) => {
  return (
    <ul className="xl:flex gap-6 flex-1 justify-center items-center flex-row hidden">
        <li className="text-gray-500 hover:text-amber-700 font-semibold">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li
          className="text-gray-500 hover:text-amber-700 font-semibold cursor-pointer flex items-center gap-1 relative"
          onClick={toggleHandler}
        >
          Shop
          {!toggleDropDown && (
            <i className="fa-solid fa-angle-down text-xs mt-[2px]"></i>
          )}
          {toggleDropDown && (
            <i className="fa-solid fa-angle-up text-xs mt-[2px]"></i>
          )}
          {
            <ul
              className={`absolute w-[200px] rounded-md bg-gray-100 py-2 px-3 ${
                toggleDropDown ? "visible top-8" : "invisible top-12"
              } flex flex-col gap-2 transition-all ease-in-out duration-300`}
            >
              <li className="hover:underline hover:text-gray-600">
                <NavLink to={'/shop'}>All</NavLink>
              </li>
              {categories.length > 0 && categories.map(category => (
              <li key={category.$id} className="hover:underline hover:text-gray-600">
                <a href="" >{category.title}</a>
              </li>
              ))}
              
            </ul>
          }
        </li>
        <li className="text-gray-500 hover:text-amber-700 font-semibold">
          <a href="/">Offers</a>
        </li>
        <li className="text-gray-500 hover:text-amber-700 font-semibold">
          <a href="/">Contact Us</a>
        </li>
        <li className="text-gray-500 hover:text-amber-700 font-semibold">
          <a href="/">Blog</a>
        </li>
      </ul>
  )
}

export default NavMenus