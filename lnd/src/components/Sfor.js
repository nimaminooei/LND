import React, { useEffect } from "react";

import "aos/dist/aos.css";

function Sfor() {
  return (
    <section className="flex flex-col justify-center items-center py-6 sm:py-12 md:py-16 lg:py-24">
      <div className="flex justify-center items-center text-center mb-4 md:mb-8 text-yellow-500 text-[1.5em] fade-up">
        Soheil Ghaffari x Soheil Kamali
      </div>
      <div className="flex justify-center items-center  text-center px-4 sm:px-8 md:px-16 lg:px-32 mb-4 md:mb-8cfade-up">
        Thank You! We want to extend our heartfelt thanks to everyone who has
        contributed to the creation of this website. Your hard work and
        dedication have made this project possible.
      </div>
      <div className="flex flex-col justify-center items-center mb-4 md:mb-8">
        <div data-aos="fade-right">Special Thanks to </div>
        <div data-aos="fade-left">[Aleazi]</div>
        <div data-aos="fade-right">[Parham Mahdavi]</div>
        <div data-aos="fade-left">[Nima Minooyi]</div>
        <div data-aos="fade-right">[Gisa Asadi]</div>
      </div>
      <div
        className="flex justify-center items-center text-center mb-4 md:mb-8"
        data-aos="fade-up"
      >
        We truly appreciate your efforts and support!
      </div>
      <div
        className="flex justify-center items-center text-center"
        data-aos="fade-up"
      >
        Thank you all once again for being a part of this Game!
      </div>
    </section>
  );
}

export default Sfor;
