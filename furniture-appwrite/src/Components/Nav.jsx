import React, { useState } from "react";
import NavMenus from "./NavMenus";
import NavActions from "./NavActions";

const Nav = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleHandler = () => {
    setToggleDropDown((prev) => !prev);
  };
  const handleFocus = () => {
    setInputFocus((prev) => !prev);
  };
  return (
    <nav className="bg-white flex py-5 xl:py-0 w-full justify-between fixed top-0 items-center shadow-md p-5 xl:px-24 z-[1000] h-[10vh] gap-2 xl:gap-0">
      <h1 className="font-bold text-lg md:text-2xl font-Sofadi">Urban Craft</h1>
      <NavMenus toggleDropDown={toggleDropDown} toggleHandler={toggleHandler}/>
      <NavActions/>
      {!showDrawer && (
        <i
          class="fa-sharp fa-solid fa-bars xl:invisible text-2xl"
          onClick={() => setShowDrawer((prev) => !prev)}
        ></i>
      )}
      <div
        className={`absolute top-0 z-[100] ${
          showDrawer ? "right-0" : "-right-60"
        } bg-gray-100 h-[100vh] p-5 flex flex-col gap-3 ${
          inputFocus ? "w-[300px]" : "w-[200px]"
        } transition-all duration-500`}
      >
        <i
          class="fa-sharp fa-solid fa-bars self-end text-2xl cursor-pointer mb-5"
          onClick={() => setShowDrawer((prev) => !prev)}
        ></i>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center bg-gray-200 rounded-md border-[1px] border-gray-300 py-2 px-4 w-full">
            <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
            <input
              onFocus={handleFocus}
              onBlur={() => setInputFocus((prev) => !prev)}
              className="outline-none bg-transparent w-full px-4"
              type="text"
              placeholder="Search for products"
            />
          </div>
          <span className="text-gray-500 font-semibold flex gap-2 items-center border-[1px] border-gray-300 bg-gray-200 p-2 rounded-md">
            Your Cart
            <i class="fa-sharp-duotone fa-solid fa-cart-shopping text-lg text-gray-600"></i>
          </span>
          <span className="text-gray-500 font-semibold flex gap-2 items-center border-[1px] border-gray-300 bg-gray-200 p-2 rounded-md">
            Profile
            <i class="fa-sharp-duotone fa-solid fa-user-tie text-lg text-gray-600"></i>
          </span>
        </div>

        <ul className="flex flex-col gap-3">
          <li className="text-gray-500 font-semibold border-[1px] p-2 rounded-md bg-gray-200 hover:bg-gray-300 border-gray-300">
            <a href="/" className="block">
              Home
            </a>
          </li>
          <li
            className="text-gray-500 font-semibold cursor-pointer flex flex-col gap-1 relative border-[1px] p-2 rounded-md bg-gray-200 border-gray-300"
            onClick={toggleHandler}
          >
            <span className="self-start flex gap-2 items-center">
              Shop
              {!toggleDropDown && (
                <i class="fa-solid fa-angle-down text-xs mt-[2px]"></i>
              )}
              {toggleDropDown && (
                <i class="fa-solid fa-angle-up text-xs mt-[2px]"></i>
              )}
            </span>

            {
              <ul
                className={`rounded-md py-2 px-3 ${
                  toggleDropDown ? "block" : "hidden"
                } flex flex-col gap-2 transition-all duration-200`}
              >
                <li className="hover:underline hover:text-gray-600">
                  <a href="">All</a>
                </li>
                <li className="hover:underline hover:text-gray-600">
                  <a href="">Sofa</a>
                </li>
                <li className="hover:underline hover:text-gray-600">
                  <a href="">Sofa Set</a>
                </li>
                <li className="hover:underline hover:text-gray-600">
                  <a href="">Sofa Bed</a>
                </li>
                <li className="hover:underline hover:text-gray-600">
                  <a href="">Wedding Set</a>
                </li>
              </ul>
            }
          </li>
          <li className="text-gray-500 font-semibold border-[1px] p-2 rounded-md bg-gray-200 hover:bg-gray-300 border-gray-300">
            <a href="/" className="block">
              Offers
            </a>
          </li>
          <li className="text-gray-500 font-semibold border-[1px] p-2 rounded-md bg-gray-200 hover:bg-gray-300 border-gray-300">
            <a href="/" className="block">
              Contact Us
            </a>
          </li>
          <li className="text-gray-500 font-semibold border-[1px] p-2 rounded-md bg-gray-200 hover:bg-gray-300 border-gray-300">
            <a href="/" className="block">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
