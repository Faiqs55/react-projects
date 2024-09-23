import React from 'react'

const NavActions = () => {
  return (
    <div className="xl:flex gap-5 items-center hidden">
        <div className="flex gap-2 items-center bg-gray-200 rounded-full py-2 px-4">
          <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
          <input
            className="outline-none bg-transparent w-full px-4"
            type="text"
            placeholder="Search for products"
          />
        </div>
        <i class="fa-sharp-duotone fa-solid fa-cart-shopping text-lg text-gray-600"></i>
        <i class="fa-sharp-duotone fa-solid fa-user-tie text-lg text-gray-600"></i>
      </div>
  )
}

export default NavActions