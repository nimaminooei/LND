import React from "react";
import {
  FaEnvelope,
  FaTelegramPlane,
  FaWhatsapp,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center px-[2em] h-screen popi py-6 sm:py-12 md:py-16 lg:py-24 text-white">
      <div className="flex text-center text-sm md:text-lg lg:text-xl mb-2">
        At flex, we can build any website you envision
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <div>online store</div>
        <div>profile websites</div>
        <div>gallery websites</div>
        <div>games</div>
        <div>creating any type of website</div>
        <div className="animate__animated animate__flipInY mb-4">
          <a className="text-yellow-500" href="tel:+989392206332">
            09371020413
          </a>
        </div>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://t.me/dayan393"
            className="hover:text-gray-400 transform transition-transform duration-200 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="https://wa.me/989392206332"
            className="hover:text-gray-400 transform transition-transform duration-200 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
      <div className="mt-8">
        <Link
          to="/"
          className="text-white hover:text-gray-400 transform transition-transform duration-200 hover:scale-105"
        >
          <FaHome size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Services;
