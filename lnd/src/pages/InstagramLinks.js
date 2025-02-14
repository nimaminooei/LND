import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const InstagramLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-[2em] font-bold mb-4 kalamer px-[2em] text-white">
        Visit Our Instagram Pages
      </h1>
      <div className="flex flex-col space-y-4 soli">
        <a
          href="https://www.instagram.com/soheilghaffarii"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-300 text-black px-4 py-2 rounded transform transition-transform duration-200 hover:scale-105"
        >
          Soheil Ghaffarii
        </a>
        <a
          href="https://www.instagram.com/soheilkamali_"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-400 text-white px-4 py-2 rounded transform transition-transform duration-200 hover:scale-105"
        >
          Soheil Kamali
        </a>
      </div>
      <div className="mt-8">
        <Link
          to="/"
          className="text-white hover:text-gray-400 transform transition-transform duration-200 hover:scale-105"
        >
          <FaHome size={32} />
        </Link>
      </div>
    </div>
  );
};

export default InstagramLinks;
