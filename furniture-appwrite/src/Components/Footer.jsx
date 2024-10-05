import React from "react";

const Footer = () => {
  return (
    <footer className="pt-7 bg-white pb-5 border-t-[1px] border-amber-700 w-full px-5 lg:px-24">
      <div className="flex flex-wrap sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
      <div className="flex flex-col gap-3 mb-2 sm:mb-0">
        <h1 className="text-2xl font-Sofadi font-bold text-amber-800">Urban Craft</h1>
        <p className="text-sm text-gray-500">
          Worldwide Furniture store since 1947. We Sell Over 1000+ branded
          Products on Our Website
        </p>
        <span className="text-sm text-gray-600 flex items-center gap-2">
          <i className=" text-amber-700 fa-sharp-duotone fa-solid fa-location-dot"></i>{" "}
          Punjab, Lahore Pakistan
        </span>
        <span className="text-sm text-gray-600 flex items-center gap-2">
          <i className=" text-amber-700 fa-sharp-duotone fa-solid fa-phone"></i> +92
          3253550555
        </span>
        <span className="text-sm text-gray-600 flex items-center gap-2">
          Made By Faiq
        </span>
      </div>
      <div className="flex flex-col gap-3 pl-5">
        <h1 className="font-bold">Sitemap</h1>
        <ul className="flex flex-col gap-3 text-gray-400 font-semibold">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Article</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold">Category</h1>
        <ul className="flex flex-col gap-3 text-gray-400 font-semibold">
          <li>
            <a href="">Living Room</a>
          </li>
          <li>
            <a href="">Bed room</a>
          </li>
          <li>
            <a href="">Kitchen</a>
          </li>
          <li>
            <a href="">Bath room</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold">Our Company</h1>
        <ul className="flex flex-col gap-3 text-gray-400 font-semibold">
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Vacancies</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Returns Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 self-center">
        <h1 className="font-bold">Stay Updated</h1>
        <div className="flex items-center px-4 py-2 rounded-full gap-3 text-gray-400 font-semibold bg-gray-200">
          <i className="fa-solid fa-envelope"></i>
          <input className="bg-transparent outline-none" placeholder="Enter Your Email" type="text" />
        </div>
        <button className="bg-amber-800 text-white self-start px-5 py-1 font-semibold rounded-full">Subscribe</button>
      </div>
      </div>
      <hr className="mt-5" />
      <p className="mt-5 text-center text-sm text-gray-500">2024 By Urban Craft All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
