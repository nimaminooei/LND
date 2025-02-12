import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";

import SplashScreen from "./SplashScreen";

import Endlg from "../components/Endlg";
import Slider from "../components/Slider";
import Cart from "../components/Cart";
import Sone from "../components/Sone";
import Stwo from "../components/Stwo";
import Stree from "../components/Stree";
import BubbleSection from "../components/BubbleSection"; // وارد کردن BubbleSection
import Sfor from "../components/Sfor";
import PacManComponent from "../components/PacManComponent";

function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const handleEndSplash = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onEnd={handleEndSplash} />
      ) : (
        <div className="relative h-auto text-white ">
          <BubbleSection /> {/* اضافه کردن BubbleSection */}
          <div className="relative z-10">
            <Header />
            <div data-aos="fade-up">
              <Slider />
            </div>
            <div data-aos="fade-up">
              <Sone />
            </div>
            <div data-aos="fade-up">
              <PacManComponent />
            </div>
            <Cart />
            <div data-aos="fade-up">
              <Stwo />
            </div>
            <div data-aos="fade-up">
              <Stree />
            </div>
            <div data-aos="fade-up">
              <Sfor />
            </div>

            <div data-aos="fade-up">
              <Endlg />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
