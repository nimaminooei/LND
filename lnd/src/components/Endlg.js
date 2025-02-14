import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function EndTerenza() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex flex-col justify-center items-center logo soli cursor-pointer text-[1em] py-[.1em]">
              <div> LEGENDS </div>
              <div> NEVER </div>
              <div className="swing"> DIE </div>
            </div>
          </div>
          <div>
            <img className="w-[4em]" src="images/milad.png" alt="Logo" />
          </div>
          <div className="flex space-x-6 cursor-pointer text-sm">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Our Services
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact Us
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/instagram-links" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </Link>
          </div>
          <p className="text-sm mt-2">
            © 2025{" "}
            <Link to="/flex" className="text-black">
              flex.
            </Link>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default EndTerenza;
