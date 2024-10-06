import React, { useState } from "react";
import NavMenus from "./NavMenus";
import NavActions from "./NavActions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import authService from "../services/auth";
import { authLogout } from "../store/authSlice";
import { useDispatch } from "react-redux";

const Nav = ({categories}) => {  
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleHandler = () => {
    setToggleDropDown((prev) => !prev);
  };
  const handleFocus = () => {
    setInputFocus((prev) => !prev);
  };
  const logoutHandler = async () => {
    authService.logout().then(() => {
     dispatch(authLogout());
    })
 }
  return (
    <nav className="bg-white flex py-5 xl:py-0 w-full justify-between fixed top-0 items-center shadow-md p-5 xl:px-24 z-[1000] h-[10vh] gap-2 xl:gap-0">
      <h1 className="font-bold text-amber-800 text-lg md:text-2xl font-Sofadi">
        Urban Craft
      </h1>
      <NavMenus categories={categories} toggleDropDown={toggleDropDown} toggleHandler={toggleHandler} />
      {auth.loggedIn && <NavActions />}
      {!auth.loggedIn && (
        <Link
          to={"/login"}
          className="invisible xl:visible uppercase px-6 py-1 border-2 border-amber-800 text-amber-800 rounded-lg"
        >
          Login
        </Link>
      )}
      {!showDrawer && (
        <i
          className="fa-sharp fa-solid fa-bars xl:invisible text-2xl"
          onClick={() => setShowDrawer((prev) => !prev)}
        ></i>
      )}
      <div
        className={`absolute top-0 z-[100] ${
          showDrawer ? "right-0" : "-right-60"
        } bg-gray-100 h-[100vh] p-5 flex flex-col gap-3 ${
          inputFocus ? "w-[300px]" : "w-[220px]"
        } transition-all duration-500`}
      >
        <i
          className="fa-sharp fa-solid fa-bars self-end text-2xl cursor-pointer mb-5"
          onClick={() => setShowDrawer((prev) => !prev)}
        ></i>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center bg-gray-200 rounded-md border-[1px] border-gray-300 py-2 px-4 w-full">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
            <input
              onFocus={handleFocus}
              onBlur={() => setInputFocus((prev) => !prev)}
              className="outline-none bg-transparent w-full px-4"
              type="text"
              placeholder="Search for products"
            />
          </div>
          {auth.loggedIn && (
            <span
              onClick={() => {
                setShowDrawer((prev) => !prev);
              }}
              className="text-gray-500 font-semibold flex gap-2 items-center border-[1px] border-gray-300 bg-gray-200 p-2 rounded-md"
            >
              Your Cart
              <i className="fa-sharp-duotone fa-solid fa-cart-shopping text-lg text-gray-600"></i>
            </span>
          )}
          {auth.loggedIn && (
            <span
              onClick={() => {
                setShowDrawer((prev) => !prev);
              }}
              className="text-gray-500 font-semibold flex gap-2 items-center border-[1px] border-gray-300 bg-gray-200 p-2 rounded-md"
            >
              Profile
              <i className="fa-sharp-duotone fa-solid fa-user-tie text-lg text-gray-600"></i>
            </span>
          )}
        </div>

        <ul
          className="flex flex-col gap-3"
          onClick={() => {
            setShowDrawer((prev) => !prev);
          }}
        >
          <li className="text-gray-500 font-semibold border-[1px] p-2 rounded-md bg-gray-200 hover:bg-gray-300 border-gray-300">
            <Link to="/" className="block">
              Home
            </Link>
          </li>
          <li
            className="text-gray-500 font-semibold cursor-pointer flex flex-col gap-1 relative border-[1px] p-2 rounded-md bg-gray-200 border-gray-300"
            onClick={() => {
              setShowDrawer((prev) => !prev);
              toggleHandler();
            }}
          >
            <span className="self-start flex gap-2 items-center">
              Shop
              {!toggleDropDown && (
                <i className="fa-solid fa-angle-down text-xs mt-[2px]"></i>
              )}
              {toggleDropDown && (
                <i className="fa-solid fa-angle-up text-xs mt-[2px]"></i>
              )}
            </span>

            {
              <ul
                onClick={() => {
                  setShowDrawer((prev) => !prev);
                }}
                className={`rounded-md py-2 px-3 ${
                  toggleDropDown ? "block" : "hidden"
                } flex flex-col gap-2 transition-all duration-200`}
              >
                <li className="hover:underline hover:text-gray-600">
                  <Link to="/shop">All</Link>
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
          {auth.loggedIn && <li className="text-white text-center font-semibold border-[1px] p-2 rounded-md bg-amber-700" onClick={logoutHandler}>
              Logout
          </li>}
          {!auth.loggedIn && <Link to={'/login'} className="text-white text-center font-semibold border-[1px] p-2 rounded-md bg-amber-700" onClick={logoutHandler}>
              Login
          </Link>}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
