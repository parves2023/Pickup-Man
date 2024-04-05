import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '/src/images/pickup-truck.svg';

console.log(logo);
const Navbar = () => {
  useEffect(() => {
    const handleClick = () => {
      const lines = document.querySelector("#lines");
      const menu = document.querySelector("#menu");
      menu.classList.toggle("addclass");
    };

    const lines = document.querySelector("#lines");
    lines.addEventListener("click", handleClick);
    return () => {
      lines.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font flex">
        <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-row ">
          <a href="#" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer flex-1">
            <img src="/src/images/pickup-truck.svg" alt="Logo" className="h-10 text-white p-2 bg-green-500 rounded-full"/>

            <span className="ml-3 text-xl">Pickup Man</span>
          </a>
          <nav className="cursor-pointer hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center flex-1">
            <Link to="/" className="navbutton  hover:text-green-400 text-green-400">হোমপেজ</Link>
            <Link to="/Rent" className="navbutton  hover:text-green-400">পিকআপ ডাকুন</Link>
            <Link to="/pickupsize" className="navbutton  hover:text-green-400">পিকআপের সাইজ</Link>
            <Link to="/Contract" className="navbutton  hover:text-green-400">যোগাযোগ</Link>
          </nav>
          <div id="lines" className="space-y-1 md:hidden cursor-pointer mt-4 z-10 pe-3">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div></div>
            <div></div>
          </div>
          <button className="hidden md:flex items-center text-white bg-green-500 border-0 py-1 px-3 focus:outline-none font-semibold hover:text-green-400 hover:bg-gray-400 rounded text-base mt-4 md:mt-0 ">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <nav id="menu" className="togglemenu container mx-auto flex flex-wrap justify-start p-5 flex-row md:flex-row">
        <Link to="/" className="navbutton mt-10 mb-4 hover:text-green-400 text-green-400 hover:underline cursor-pointer">হোমপেজ</Link>
        <Link to="/Rent" className="navbutton mb-4 hover:text-green-400 hover:underline cursor-pointer">পিকআপ ডাকুন</Link>
        <Link to="/pickupsize" className="navbutton mb-4 hover:text-green-400 hover:underline cursor-pointer">পিকআপের সাইজ</Link>
        <Link to="/Contract" className="navbutton mb-4 hover:text-green-400 hover:underline cursor-pointer">যোগাযোগ</Link>
        <div className="w-7 h-3 ">
          <button className="thebutton text-white bg-green-500 border-0 py-1 px-3 focus:outline-none font-semibold hover:text-green-400 hover:bg-gray-400 rounded text-base mt-4 md:mt-0 cursor-pointer">Join Us
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </nav>


    </>
  );
};

export default Navbar;
