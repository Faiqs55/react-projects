import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-[100] w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((nav) => (
            <li key={nav.label}>
              <a 
              href={nav.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
              >{nav.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} width={25} height={25} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
