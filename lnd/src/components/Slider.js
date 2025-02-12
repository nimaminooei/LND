import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/images/-2.jpg",
  "/images/-1.jpg",
  "/images/-3.jpg",
  "/images/-4.jpg",
  "/images/-5.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    const nextIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg  ">
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={handlePrevClick}
          className=" bg-opacity-50 text-white p-2 rounded-full hover:bg-black transition duration-300"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={handleNextClick}
          className=" bg-opacity-50 text-white p-2 rounded-full hover:bg-black transition duration-300"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
      <div
        className="h-full bg-contain bg-center bg-no-repeat transition-transform duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
    </div>
  );
};

export default Slider;
