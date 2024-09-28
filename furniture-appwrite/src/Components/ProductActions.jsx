import React from 'react'

const ProductActions = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[70%] mx-auto  lg:mx-0 lg:w-[50%]">
          {/* PRODUCT INFO START  */}
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Goldstan Premium Sofa</h1>
              <h3 className="text-sm text-gray-500">
                3-seat sofa, Knisa Medium Blue
              </h3>
              <span className="flex gap-1 items-center">
                <i className="fa-solid fa-star text-yellow-500"></i>
                <span className="font-semibold">4.5</span>
                <span className="text-sm text-gray-500">(345)</span>
              </span>
              <h3 className="flex gap-2 items-center">
                <span className="text-xl font-semibold">$500</span>
                <span className="text-sm text-gray-500 line-through">$800</span>
              </h3>
              <span className="font-semibold text-xl text-green-700">
                30% OFF
              </span>
            </div>
            <div>
              <i className="fa-solid fa-heart p-2 border-[1px] text-xl border-gray-300 cursor-pointer rounded-full text-amber-800"></i>
            </div>
          </div>
          {/* PRODUCT INFO END  */}

          {/* COLORS START  */}
          <div className="mt-3">
            <h3 className="text-xl text-gray-500 font-semibold">COLOR</h3>
            <div className="flex gap-2 mt-2">
              <div className=" cursor-pointer border-[1px] border-gray-300 rounded-md px-2 py-1 text-sm flex items-center gap-2">
                <span>RED</span>
                <span className="px-2 py-2 bg-red-600 rounded-full"></span>
              </div>
              <div className=" cursor-pointer border-[1px] border-gray-300 rounded-md px-2 py-1 text-sm flex items-center gap-2">
                <span>GREEN</span>
                <span className="px-2 py-2 bg-green-600 rounded-full"></span>
              </div>
              <div className=" cursor-pointer border-[1px] border-gray-300 rounded-md px-2 py-1 text-sm flex items-center gap-2">
                <span>BLUE</span>
                <span className="px-2 py-2 bg-blue-600 rounded-full"></span>
              </div>
            </div>
          </div>
          {/* COLORS END  */}

          {/* SIZE START  */}
          <div className="mt-3">
            <h3 className="text-xl text-gray-500 font-semibold">SIZE</h3>
            <div className="flex gap-2 mt-2">
              <span className="border-[1px] border-gray-300 rounded-md px-2 py-1">1-seater</span>
              <span className="border-[1px] border-gray-300 rounded-md px-2 py-1">2-seater</span>
              <span className="border-[1px] border-gray-300 rounded-md px-2 py-1">3-seater</span>
            </div>
          </div>
          {/* SIZE END  */}

          {/* ACTIONS START  */}
          <div className="flex gap-2 mt-10 sm:justify-between w-full lg:justify-start">
            <div className="flex items-center justify-between border-[1px] border-gray-300 rounded-full md:w-1/4">
                <span className="cursor-pointer hover:bg-gray-100 rounded-l-full px-4 py-2 border-r-[1px] border-gray-300 text-xl font-semibold">-</span>
                <span className="font-semibold px-3 md:px-0">2</span>
                <span className="cursor-pointer hover:bg-gray-100 rounded-r-full px-4 py-2 border-l-[1px] border-gray-300 text-xl font-semibold">+</span>
            </div>
            <button className="bg-amber-800 text-white px-10 lg:px-16 rounded-full text-lg">Add to cart</button>
          </div>
          {/* ACTIONS END  */}

        </div>
  )
}

export default ProductActions