import React, { useState } from "react";

const Filter = ({ overlayShow }) => {
  const [range, setRange] = useState(0);
  const { show, setShow } = overlayShow;
  return (
    <div
      className={`md:w-[30%] p-4 h-fit min-h-[70vh] border-[1px] border-gray-300 rounded-lg fixed md:static top-24 left-[50%] translate-x-[-50%] md:translate-x-0 z-[110] md:z-0 bg-white sm:w-[50%] w-[80%] md:block ${
        !show ? "hidden" : "md:block"
      }`}
    >
      <div className="flex md:justify-end justify-between w-full items-center">
        <i
          className="fa-solid fa-xmark text-xl md:invisible"
          onClick={() => setShow((prev) => !prev)}
        ></i>
        <button className="text-amber-800 font-semibold">Clear All</button>
      </div>
      <div className="mt-5">
        <div>
          <form className="flex flex-col gap-2">
            <div className="">
              <h1 className="font-semibold text-xl mb-2">Sort By</h1>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value={"lh"}
                  className="h-[15px] w-[15px]"
                />
                <label htmlFor="">Price - Low to High</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value={"hl"}
                  className="h-[15px] w-[15px]"
                />
                <label htmlFor="">Price - High to Low</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value={"l"}
                  className="h-[15px] w-[15px]"
                />
                <label htmlFor="">Price - Latest</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value={"p"}
                  className="h-[15px] w-[15px]"
                />
                <label htmlFor="">Price - Popular</label>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="font-semibold text-xl mb-2">Price Range</h1>
              <div className="flex pr-3 mt-1 flex-col">
                <div className="relative mb-6 w-full">
                  <input
                    onChange={(e) => setRange(e.target.value)}
                    id="labels-range-input"
                    type="range"
                    value={range}
                    min="0"
                    max="1500"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    Min ($100)
                  </span>

                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    Max ($1500)
                  </span>
                </div>
                <div className="border-2 border-gray-200 w-fit mt-2 self-center p-1 px-3 flex">
                  <span>$</span>
                  <input
                    type="text"
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    className="outline-none w-fit"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="font-semibold text-xl mb-2">Category</h1>
              <select
                defaultValue={"Choose a Category"}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option disabled>Choose a Category</option>
                <option value="Sofa">Sofa</option>
                <option value="Chair">Chair</option>
                <option value="Bed">Bed</option>
                <option value="Table">Table</option>
              </select>
            </div>
            <button
              className="bg-amber-700 text-white py-1 rounded-lg mt-3"
              type="submit"
            >
              Filter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
