import React, { useState } from "react";
import Filter from "../Components/Filter";
import { products } from "../assets";
import ProductCard from "../Components/ProductCard";

const Shop = () => {
  const [show, setShow] = useState(false);
  
  return (
    <main className="mt-[17vh] px-5 lg:px-24 py-5">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">
          Sofa Set{" "}
          <span className="text-base text-gray-500 font-normal">
            - 200 items
          </span>
        </h1>
        <button onClick={() => {setShow(prev => !prev)}} className="flex items-center gap-2 bg-amber-700 text-white px-3 font-semibold py-1 rounded-md md:hidden">
          <span>Filters</span> <i className="fa-solid fa-filter"></i>
        </button>
      </div>
      <div className="flex gap-5 mt-5">
        <Filter overlayShow={{show, setShow}}/>
        <div className="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {products.map((pro) => (
            <ProductCard key={pro.id} {...pro} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
