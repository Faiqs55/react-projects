import React, { useState } from "react";

const ProductDetails = ({data}) => {
    const [show, setShow] = useState(false);
  return (
    <div className="w-full sm:w-[90%] md:w-[70%] mx-auto  lg:mx-0 lg:w-[50%] mb-5">
      <div className="w-full hover:bg-gray-100 bg-gray-50">
        <div className="flex w-full py-5 px-4 justify-between items-center cursor-pointer " onClick={()=> {setShow(prev=>!prev)}}>
          <h2 className="text-xl font-semibold">Product Details</h2>
          <div className="flex items-center relative">
            <i className="fa-solid fa-chevron-up bg-gray-200 p-1 rounded-full absolute right-0"></i>
            <i className="fa-solid fa-chevron-down bg-gray-200 p-1 rounded-full absolute right-0"></i>
          </div>
        </div>
        <p className={`text-gray-500 pb-5 px-4 ${show ? 'block' : 'hidden'}`}>
           {data.details}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default ProductDetails;
