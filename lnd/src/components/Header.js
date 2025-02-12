import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useNavigate } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  return (
    <nav className="px-[1em] py-[.3em] mb-[3em] ">
      <div className="flex items-center justify-between mt-3">
        <div
          onClick={() => navigate("/")}
          className=" flex flex-col justify-center items-center logo soli cursor-pointer  text-[.4em] py-[.1em] text-white soli"
        >
          <div> LEGENDS </div>
          <div> NEVER </div>
          <div> DIE </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <FaTimes size={24} className="text-white" />
            ) : (
              <FaBars size={24} className="text-white" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <a onClick={() => navigate("")} className="text-white text-lg">
            Home
          </a>
          <a onClick={() => navigate("")} className="text-white text-lg">
            Gallery
          </a>
          <a onClick={() => navigate("")} className="text-white text-lg">
            AboutUs
          </a>
          <a onClick={() => navigate("")} className="text-white text-lg">
            services
          </a>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-400 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
      >
        <div className="fixed right-2 top-[4em] flex flex-col items-center justify-center bg-black z-50 h-[16em] w-[10em] rounded-3xl lg:hidden">
          <a
            onClick={() => navigate("")}
            className=" block px-4 py-2 text-white text-xl cursor-pointer"
          >
            home
          </a>
          <a
            onClick={() => navigate("")}
            className=" block px-4 py-2 text-white text-xl cursor-pointer"
          >
            Gallery
          </a>
          <a
            onClick={() => navigate("")}
            className=" block px-4 py-2 text-white text-xl cursor-pointer"
          >
            AboutUs
          </a>
          <a
            onClick={() => navigate("")}
            className=" block px-4 py-2 text-white text-xl cursor-pointer"
          >
            services
          </a>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
