import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { src: "sonic.jpg", text: "Sonic" },
  { src: "a1.jpg", text: "Street fighter " },
  { src: "mario.jpg", text: "Super Mario" },
  { src: "pacman.jpg", text: "Pacman" },
];

export default function Cart() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-[1em] px-[2em]">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center justify-center w-[20em] h-[20em]rounded-lg mb-[1em] shadow-2xl drop-shadow-md group"
          data-aos="fade-up"
        >
          <img
            src={`images/${image.src}`}
            alt={`Image ${index + 1}`}
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <p className="text-white text-center">{image.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
