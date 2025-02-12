import React, { useState, useEffect } from "react";

function SplashScreen({ onEnd }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnd();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onEnd]);

  return (
    <div className="flex flex-col items-center justify-center .bg-blue-gradient h-screen">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        typeof="video/mp4"
        src="images/vt.mp4"
        alt="Logo"
        className=" h-screen"
      /> */}

      <div className=" flex flex-col justify-center items-center logo soli cursor-pointer  text-[3em] py-[.1em] text-white">
        <div> LEGENDS </div>
        <div> NEVER </div>
        <div> DIE </div>
      </div>
    </div>
  );
}

export default SplashScreen;
