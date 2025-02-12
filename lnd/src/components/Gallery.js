import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageGallery from "./GalleryMega";
import ModernGallery from "./ModernGallery";
import Flip from "./Flip";

function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          className="h-[4em] flex justify-center items-center text-gradient"
          src="images/hamze.png"
        />
      </div>
      <div className="text-white px-[3em] md:px-[30em] text-center  ">
        <span className="text-[1.3em] text-gradient">HAMZEH</span> brand is an
        Iranian brand, and these days it is very prominent in the leather bag
        and shoe industry and packaging
      </div>
      <div data-aos="fade-up">
        <ModernGallery />
      </div>
      <div data-aos="fade-right">
        <ImageGallery />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div data-aos="fade-up">
          <Flip />
        </div>
      </div>
      <div className="grid gap-4 py-[12vmin] px-[10vmin] mx-auto max-w-2xl">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 grid-rows-1 gap-1 rounded-md overflow-hidden h-80"
        >
          <img className="w-full h-full object-cover" src="images/24.jpg" />
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 grid-rows-1 gap-1 rounded-md overflow-hidden h-80"
        >
          <img className="w-full h-full object-cover" src="images/24.jpg" />
          <img className="w-full h-full object-cover" src="images/24.jpg" />
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 grid-rows-2 gap-1 rounded-md overflow-hidden h-80"
        >
          <img
            className="w-full h-full object-cover row-span-2"
            src="images/24.jpg"
          />
          <img className="w-full h-full object-cover" src="images/27s.jpg" />
          <img className="w-full h-full object-cover" src="images/16.jpg" />
        </div>
        <div data-aos="fade-up">
          <ImageGallery />
        </div>
        <div
          data-aos="fade-right"
          className="grid grid-cols-2 grid-rows-2 gap-1 rounded-md overflow-hidden h-80"
        >
          <img className="w-full h-full object-cover" src="images/19s.jpg" />
          <img className="w-full h-full object-cover" src="images/25s.jpg" />
          <img className="w-full h-full object-cover" src="images/27s.jpg" />
          <img className="w-full h-full object-cover" src="images/24.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
