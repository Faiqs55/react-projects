import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../services/auth';
import {authLogout} from '../store/authSlice'

const NavActions = () => {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
     authService.logout().then(() => {
      dispatch(authLogout());
     })
  }
  return (
    <div className="xl:flex gap-5 items-center hidden">
        <div className="flex gap-2 items-center bg-gray-200 rounded-full py-2 px-4">
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          <input
            className="outline-none bg-transparent w-full px-4"
            type="text"
            placeholder="Search for products"
          />
        </div>
        <i className="fa-sharp-duotone fa-solid fa-cart-shopping text-lg text-amber-800"></i>
        <div className='relative'>
         <i className="fa-sharp-duotone fa-solid fa-user-tie text-lg text-amber-800"></i>
         <div className='absolute top-7 bg-gray-100 py-2 px-2 flex flex-col w-[100px] items-start rounded-md shadow-lg left-0'>
          <button onClick={logoutHandler}>Logout</button>
         </div>
        </div>
      </div>
  )
}

export default NavActions